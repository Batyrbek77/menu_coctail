import React, {useEffect, useState} from 'react'
import View from '../components/Detail/View'
import { COCTAIL_BY_ID } from '../config'

export default function DetailScreen(props) {
    const [fullInfo, setFullInfo]=useState(null)
    useEffect(()=>{
        let param = props.match.params.id
        getDetailInfo(param)
    },[])
    const getDetailInfo = async(prm)=>{
        let resp = await fetch(COCTAIL_BY_ID + prm)
        let req = await resp.json()
        console.log(req.drinks)
        setFullInfo(req.drinks)
    }

    return (
        <div>
            <span onClick={
                props.history.goBack
            }>{'<--'}</span>
            <View
                info = {fullInfo}
            />
        </div>
    )
}