import React, { Component } from 'react';
import { connect } from 'react-redux';

import Body from '../body/Body';
import { selectCategory } from '../actions/SelectionPageAction'

import dummyData from '../sampleData.json'

import './SelectionPage.css'

const CATEGORIES = [
    {
        id: 0,
        name: 'Books'
    },
    {
        id: 1,
        name: 'Electronics'
    },
    {
        id: 2,
        name: 'Food'
    }
]

class SelectionPage extends Component {

    handleClicked = (category = '', key = '') => {
        //this.setState({ selectedCategory: category, subItems: dummyData.categories[key].items })
        const { setSelectedCategory = () => { } } = this.props;
        setSelectedCategory({ selectedCategory: category, subItems: dummyData.categories[key].items, selectedSubCategory: '' })
    }
    categorySection = () => {
        const { selectedCategory = '' } = this.props.selectReducer;
        return CATEGORIES.map(({ name = '', id = '' }) => <div className={selectedCategory === name ? "selected-box" : "box"} key={id} onClick={() => this.handleClicked(name, id)}>{name}</div>)
    }
    clearChoice = () => {
        // this.setState({ selectedCategory: '', subItems: '' });
        const { setSelectedCategory = () => { } } = this.props;
        setSelectedCategory({ selectedCategory: '', subItems: '', didSelectionChange: false })
    }
    render() {
        const { selectedCategory = '', subItems = '' } = this.props.selectReducer;
        return (
            <div className="container">
                <div className='top-section'>
                    <div className={selectedCategory ? "clear-button-enabled" : "clear-button-disabled"} onClick={this.clearChoice}>Clear Section</div>
                    <div className="box-container">
                        {this.categorySection()}
                    </div>
                </div>
                <div className="body">
                    <Body />
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
export default connect(mapStateToProps, mapDispatchToProps)(SelectionPage);
