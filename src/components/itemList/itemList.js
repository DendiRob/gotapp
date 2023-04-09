import React, {Component} from 'react';
import './itemList.css';
import GotService from '../../services/service';
import Spinner  from '../spinner';

export default class ItemList extends Component {
    gotService = new GotService()

    state = {
        charList: null,
        pageOfCharacters: null
    }

    componentDidMount() {
        const page = 5
        this.gotService.getAllCharacters(page)
            .then( (charList) => {
                this.setState({
                    charList,
                    pageOfCharacters: page
                })
            })
    }

    renderItems(arr) {
        const {pageOfCharacters} = this.state
        return arr.map((item, i) => {
            return (
                <li
                    key={i}
                    className="list-group-item"
                    onClick={() => this.props.onCharSelected((pageOfCharacters * 10 - 9) + i)}
                    >
                    {item.name}
                </li>
            )
        })
    }

    render() {
        const {charList} = this.state;

        if (!charList){
            return <Spinner />
        }

        const items = this.renderItems(charList)

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}