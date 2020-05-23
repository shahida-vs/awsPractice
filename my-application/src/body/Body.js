import React, { Component } from 'react';

import Description from '../description/Description';

import './Body.css'

class Body extends Component {
    state = {
        description: '',
        selectedSubCategory: '',
    }

    componentWillReceiveProps() {
        this.setState({ selectedSubCategory: '' })
    }

    handleSelect = (description, name) => {
        this.setState({ selectedSubCategory: name, description: description })
    }

    subCategories = () => {
        const { subItems = '' } = this.props;
        const { selectedSubCategory = '' } = this.state;
        return subItems.map(({ description, id, name }) => <div className={selectedSubCategory === name ? "selected-sub-category-box" : "sub-category-box"} key={id} onClick={() => this.handleSelect(description, name)}>{name}</div>)
    }

    render() {
        const { selectedCategory = '' } = this.props;
        const { description = '', selectedSubCategory = '' } = this.state;
        return (
            selectedCategory &&
            <div className="body-container">
                <div className="sub-categories-container">
                    {this.subCategories()}
                </div>
                <div className="description-box-container">
                    {selectedSubCategory &&
                        <div className="description-box">
                            <Description description={description} />
                        </div>}
                </div>
            </div>
        )
    }
}
export default Body