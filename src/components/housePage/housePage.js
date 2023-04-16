import React, {Component} from 'react';
// import './housePage.css';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/service';




export default class HousePage extends Component {
    gotService = new GotService()

    state = {
        selectedItem: null,
        errorr: false
    }

    onItemSelected = (id) =>  {
        this.setState({
            selectedItem: id    
        })
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
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllHouses}
                renderItem = {(item) => item.name} 
                page={2}
                gotPage={'houses'}/>
        )
    }
}
