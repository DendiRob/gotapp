import React, {Component} from 'react';
// import './housePage.css';
import ItemList from '../itemList';
import ItemDetails,{Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/service';
import RowBlock from '../rowBlock'



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
        const itemList = (
            <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.gotService.getAllHouses}
                renderItem = {(item) => item.name} 
                page={2}/>
        )

        const itemDetails = (
            <ItemDetails
                itemId={this.state.selectedItem}
                getData={this.gotService.getHouse}
                >
                    <Field field = 'region' label='Region' />
                    <Field field = 'words' label='Words' />
                    <Field field = 'titles' label='Titles' />
                    <Field field = 'overlord' label='Overlord' />
                    <Field field = 'ancestralWeapons' label='Ancestral Weapons' />
            </ItemDetails>
            
        )

        if(this.state.errorr){
            return <ErrorMessage />
        }
        return(
            <RowBlock left={itemList} right={itemDetails} />
        )
    }
}
