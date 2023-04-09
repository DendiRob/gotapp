import React, {Component,} from 'react';
import './randomChar.css';
import GotService from '../../services/service';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage';

export default class RandomChar extends Component {
    constructor(){
        super()
        console.log('constr')

    }

    state = {
        char: {},
        loading: true,
        error: false
    }

    getService = new GotService()
    
    componentDidMount() {
        this.updateCharacter();
        this.timeId = setInterval(this.updateCharacter, 5000)
    }

    componentWillUnmount(){
        clearInterval(this.timeId)
    }


    onErrorMessage = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updateCharacter = () => {
        const id = Math.floor(Math.random()*140 + 25);
        this.getService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onErrorMessage)
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }



    render() {
        console.log('render')

        const {char, loading,error} = this.state
        const err = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;   
        const content = !(loading || error) ? <View char = {char}/> : null;


        return (
            <div className="random-block rounded">
                {err}
                {spinner}
                {content}
            </div>
        );
    }
}

const View = ({char}) => {

    const {name,gender,born,died,culture} = char

    return(
        <>
            <h4>Random Character: {name}</h4>
                <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )}