import React from 'react';
import GotService from '../../services/service';
import ItemDetails,{Field} from '../itemDetails';
import { useParams } from 'react-router-dom';



const BooksItem = () =>  {
    const gotService = new GotService()
    const {id} = useParams()
     
        return(
                <ItemDetails
                itemId={id}
                getData={gotService.getBook}
                >
                    <Field field = 'publisher' label='Publisher' />
                    <Field field = 'released' label='Released' />
                    <Field field = 'namberOfPages' label='namber Of Pages' />
                </ItemDetails>
            )
    }
    

export default BooksItem