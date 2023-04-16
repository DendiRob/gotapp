import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import './app.css';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';
import GotService from '../../services/service';
import BookPage from '../bookPage'
import HousePage from '../housePage/housePage';
import { BooksItem, CharacterItem, HouseItem } from '../pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


export default class App extends Component {
    gotService = new GotService()
        state = {
            onChar: true,
            error: false,
            selectedItem: null
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


    render() {
        const {onChar} = this.state
        const checkChar = onChar ? <RandomChar /> : null;

        if(this.state.error){
            return <ErrorMessage />
        }

        return (
            <Router>
                <div className='app'> 
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
                        <Routes> 
                            <Route path='/characters' Component={CharacterPage}/>
                            <Route path='/houses' Component={HousePage}/> 
                            <Route path='/books' Component={BookPage}/> 
                            <Route 
                            path='/books/:id' 
                            element={ <BooksItem />} />
                            <Route 
                            path='/characters/:id' 
                            element={ <CharacterItem />} />
                            <Route 
                            path='/houses/:id' 
                            element={ <HouseItem />} />

                        </Routes>
                    </Container>
                </div>
            </Router>
        );
    }
};
