import React, {Component} from 'react';
import {Col,Row} from 'reactstrap';
// import './charDetailPage.css';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';

export default class CharacterPage extends Component {

    state = {
        onChar: true,
        selectedChar: null,
        errorr: false
    }

    onCharSelected = (id) =>  {
        this.setState({
            selectedChar: id    
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
            <Row>
                <Col md='6'>
                    <ItemList 
                    onCharSelected={this.onCharSelected} />
                </Col>
                <Col md='6'>
                    <CharDetails
                    charId={this.state.selectedChar} />
                </Col>
            </Row>
        )
    }
}
