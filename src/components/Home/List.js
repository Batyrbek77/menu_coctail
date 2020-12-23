import React from 'react'
import { Link } from 'react-router-dom'
import './List.css'

export default function List(props) {
    return (
        <div className='list'>
            {props.data?
                props.data.map(el=>{
                    return(
                        <Link className='par' to={'/detail/' + el.idDrink} key={el.idDrink}>
                            <div>
                                <h3>{el.strDrink}</h3>
                                <img style={{width:'300px'}} src={el.strDrinkThumb}/>
                            </div>
                        </Link>
                    )
                })
                :<h5>Загрузка...</h5>
            }
        </div>
    )
}