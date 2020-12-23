import React,{useState} from 'react'

export default function SearchBar(props) {
    const[value, setValue] = useState('')
    return (
        <div className="searchbar">
            <input className='input'
            type="text"
            value={value}
            placeholder="search coctail"
            onChange={event=>{
                setValue(event.target.value)
                props.getAllCoctailsByName(value)
            }}
            />

            <select className='input2' onChange={(event)=>props.filterByAlc(event.target.value)}>
                <option value='All'>All</option>
                <option value='Alcoholic'>Alcoholic</option>
                <option value='Non_Alcoholic'>Non_Alcoholic</option>
            </select>
        </div>
    )
}