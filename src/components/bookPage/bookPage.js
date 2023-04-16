import React, {Component} from 'react';
// import './bookPage.css';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/service';




export default class BookPage extends Component {
    gotService = new GotService()

    state = {
        errorr: null
    }


    componentDidCatch() {
        console.log('failure')
        this.setState({errorr:true})
    }


    render() {


        if(this.state.errorr){
            return <ErrorMessage />
        }
        return(
            <ItemList 
                getData={this.gotService.getAllBooks}
                renderItem = {(item) => item.name} 
                page={1}
                gotPage={'books'}/>
        )
    }
}
