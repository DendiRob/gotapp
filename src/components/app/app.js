import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';


export default class App extends Component {

        state = {
            onChar: true,
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
                     <CharacterPage />
                    
                </Container>
            </>
        );
    }
};
