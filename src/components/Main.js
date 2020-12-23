import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeScreen from '../Screens/HomeScreen'
import DetailScreen from '../Screens/DetailScreen'

export default function Main() {
    return (
        <Switch>
            <Route exact path = '/' component={HomeScreen}/>
            <Route exact path = '/detail/:id' component={DetailScreen}/>
        </Switch>
    )
}
