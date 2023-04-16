import React, {Component} from 'react';
// import './charDetailPage.css';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/service';




export default class CharacterPage extends Component {
    gotService = new GotService()

    state = {
        onChar: true,
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
                    getData={this.gotService.getAllCharacters}
                    renderItem = {(item) => item.name} 
                    page={5} 
                    gotPage={'characters'}/>
        )
    }
}
