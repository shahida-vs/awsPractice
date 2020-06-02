import React, { Component } from 'react';
import { connect } from 'react-redux';

import Description from '../description/Description';
import { selectCategory } from '../actions/SelectionPageAction'

import './Body.css'

class Body extends Component {

    handleSelect = (description = "", name = '') => {
        const { setSelectedCategory = () => { } } = this.props
        setSelectedCategory({ selectedSubCategory: name, description: description })
    }

    subCategories = () => {
        const { selectedSubCategory = '', subItems = '' } = this.props.selectReducer;
        return subItems.map(({ description = '', id = '', name = '' }) => <div className={selectedSubCategory === name ? "selected-sub-category-box" : "sub-category-box"} key={id} onClick={() => this.handleSelect(description, name)}>{name}</div>)
    }

    render() {
        const { selectedCategory = '', selectedSubCategory = '', description = '' } = this.props.selectReducer;
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

const mapStateToProps = (store) => {
    return {
        selectReducer: store.SelectionReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setSelectedCategory: (value) => dispatch(selectCategory(value))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Body);