import React from 'react';
import GotService from '../../services/service';
import ItemDetails,{Field} from '../itemDetails';
import { useParams } from 'react-router-dom';



const CharacterItem = () =>  {
    const gotService = new GotService()
    const {id} = useParams()
     
        return(
            <ItemDetails
            itemId = {id}
            getData = {gotService.getCharacter}
            >
                    <Field field = 'gender' label='Gender' />
                    <Field field = 'born' label='Born' />
                    <Field field = 'died' label='Died' />
                    <Field field = 'culture' label='Culture' />
            </ItemDetails>
            )
    }
    

export default CharacterItem