import React from 'react'
import BeerForm from "./BeerForm";
import {connect} from 'react-redux';
import {createBeer} from "../../actions";

class BeerCreate extends React.Component{

    onSubmit = (formValues) =>{
        this.props.createBeer(formValues)
    }

    render() {
        return (
            <div>
                <h1>Create Stream</h1>
                <BeerForm onSubmit ={this.onSubmit}/>
            </div>
        )
    }
}

export default connect(null,{createBeer})(BeerCreate)
