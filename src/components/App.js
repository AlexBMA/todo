import React from 'react';
import {Route, Router,Switch} from "react-router";
import BeerEdit from "./beers/BeerEdit";
import BeerCreate from "./beers/BeerCreate";
import BeerShow from "./beers/BeerShow";
import BeerList from "./beers/BeerList";
import history from "../history";

const App = () =>{
    return(
        <div className="ui container">
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={BeerList}/>
                    <Route path="/beers/new"  exact component={BeerCreate}/>
                    <Route path="/beers/edit" exact component={BeerEdit}/>
                    <Route path="/beers/:id" exact component={BeerShow}/>
                </Switch>
            </Router>
        </div>
    );
}


export default App;