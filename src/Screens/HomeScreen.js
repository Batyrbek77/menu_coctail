import React, { useState, useEffect } from 'react'
import List from '../components/Home/List'
import SearchBar from '../components/Home/SearchBar'
import { COCTAIL_ALL, FILTER_BY_ALCO, SEARCH_BY_NAME } from '../config'
import '../../src/components/Home/List.css'


export default function HomeScreen() {
    const [data, setData] = useState(null)
    useEffect(() => {
        getAllCoctails()
    }, [])

    const getAllCoctails = async () => {
        let resp = await fetch(COCTAIL_ALL)
        let request = await resp.json()
        setData(request.drinks)
    }

    const getAllCoctailsByName = async (latter) => {
        if (latter.length <= 1 || latter == '') {
            getAllCoctails()
        } else {
            let resp = await fetch(SEARCH_BY_NAME + latter)
            let request = await resp.json()
            setData(request.drinks)
        }
    }
    const filterByAlc = async (fltr) => {
        if (fltr == 'All') {
            getAllCoctails()
        } else {
            let resp = await fetch(FILTER_BY_ALCO + fltr)
            let req = await resp.json()
            setData(req.drinks)
        }
    }
    return (
        <div>
            <div className='head'>
            <h1>HOME</h1>
            </div>
            <SearchBar
                getAllCoctailsByName={getAllCoctailsByName}
                filterByAlc={filterByAlc}
            />
            <List
                data={data}
            />
        </div>
    )
}