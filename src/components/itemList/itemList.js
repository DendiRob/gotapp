import React, {Component} from 'react';
import './itemList.css';
import GotService from '../../services/service';
import Spinner  from '../spinner';
import { Link } from 'react-router-dom';

export default class ItemList extends Component {
    gotService = new GotService()

    state = {
        itemList: null,
        pageOfItem: null,
    }


    componentDidMount() {
        const {page} = this.props
        const {getData} = this.props
        getData(page)
            .then( (itemList) => {
                this.setState({
                    itemList: itemList,
                    pageOfItem: page
                })
            })
    }

    renderItems(arr) {
        const {pageOfItem} = this.state
        console.log(arr)
        return arr.map((item, i) => {
            const {id} = item
            const label = this.props.renderItem(item)
            return (
                <Link
                key={id}
                to={`/${this.props.gotPage}/${((pageOfItem * 10 - 9) + i)}`}>
                    <li
                    className="list-group-item">
                        {label}
                    </li>
                </Link>

            )
        })
    }

    render() {
        const {itemList} = this.state;

        if (!itemList){
            return <Spinner />
        }

        const items = this.renderItems(itemList)
        

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}