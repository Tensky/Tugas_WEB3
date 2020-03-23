import React, {Component} from 'react';
import Home from '../../app/Home';
import Pagetwo from '../../app/Pagetwo'
import {Switch, Route} from 'react-router-dom'

class Router extends Component{
    render(){
        return(
            <Switch>
                {/* <Route exact path="/" component = {Home}/> */}
                <Route path="/secondRoute" component = {Pagetwo}/>
            </Switch>
        )
    }
}

export default Router;