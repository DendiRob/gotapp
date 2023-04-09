import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import ErrorMessage from '../errorMessage';


export default class App extends Component {

        state = {
            onChar: true,
            selectedChar: null,
            error: false
        }
    
    
    onToggleChar = () => {
        const {onChar} = this.state
        this.setState({
            onChar: onChar ? false : true
        })
    }

    componentDidCatch() {
        console.log('failure')
        this.setState({error:true})
    }


    onCharSelected = (id) =>  {
        this.setState({
            selectedChar: id    
        })
    }
    

    render() {
        const {onChar} = this.state
        const checkChar = onChar ? <RandomChar /> : null;

        if(this.state.error){
            return <ErrorMessage />
        }

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {checkChar}
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{size: 6, offset: 0}}>
                            <Button
                                color="danger"
                                size = 'lg'
                                onClick={this.onToggleChar}
                            >
                                Botton
                            </Button>
                        </Col>
                    </Row>
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
                </Container>
            </>
        );
    }
};
