import React, { Component } from 'react';

import Body from '../body/Body';

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
    state = {
        selectedCategory: '',
        subItems: ''
    }
    handleClicked = (category = '', key = '') => {
        this.setState({ selectedCategory: category, subItems: dummyData.categories[key].items })
    }
    categorySection = () => {
        const { selectedCategory = '' } = this.state;
        return CATEGORIES.map(({ name = '', id = '' }) => <div className={selectedCategory === name ? "selected-box" : "box"} key={id} onClick={() => this.handleClicked(name, id)}>{name}</div>)
    }
    clearChoice = () => {
        this.setState({ selectedCategory: '', subItems: '' });
    }
    render() {
        const { selectedCategory = '', subItems = '' } = this.state;
        return (
            <div className="container">
                <div className='top-section'>
                    <div className={selectedCategory ? "clear-button-enabled" : "clear-button-disabled"} onClick={this.clearChoice}>Clear Section</div>
                    <div className="box-container">
                        {this.categorySection()}
                    </div>
                </div>
                <div className="body">
                    <Body selectedCategory={selectedCategory} subItems={subItems} />
                </div>
            </div>
        )
    }
}

export default SelectionPage