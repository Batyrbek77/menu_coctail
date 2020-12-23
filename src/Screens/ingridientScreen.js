import React, {useEffect, useState} from 'react'
import { SEARCH_BY_INGRIDIENT } from '../config'

export default function IngridientScreen(props) {
    const [ing, setIng] = useState(null)

    useEffect(()=>{
        let param = props.match.params.name
        getIngridient(param)
    },[])

    const getIngridient = async(prm)=>{
        let resp = await fetch(SEARCH_BY_INGRIDIENT+prm)
        let req = await resp.json()
        setIng(req ? req.ingredients[0] :null)
        
    }

    return (
        <div>
        <span onClick={
            props.history.goBack
        }>{'<--'}</span>
            {ing ? 
                <div>
                    <span>
                        <input type ="checkBox"
                        defaultChecked={
                            ing.strAlcohol == 'Yes' ?
                            true:false}
                            disabled
                        />
                    </span>
                    <h1>{ing.strIngredient}</h1>
                    <b><i>{ing.strIngredient}</i></b>
                </div>
                :<h1>Result undefined</h1>
            }
        </div>
    )
}