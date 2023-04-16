import React from 'react';
import GotService from '../../services/service';
import ItemDetails,{Field} from '../itemDetails';
import { useParams } from 'react-router-dom';



const HouseItem = () =>  {
    const gotService = new GotService()
    const {id} = useParams()
     
        return(
            <ItemDetails
                itemId={id}
                getData={gotService.getHouse}
                >
                    <Field field = 'region' label='Region' />
                    <Field field = 'words' label='Words' />
                    <Field field = 'titles' label='Titles' />
                    <Field field = 'overlord' label='Overlord' />
                    <Field field = 'ancestralWeapons' label='Ancestral Weapons' />
            </ItemDetails>
            )
    }
    

export default HouseItem 