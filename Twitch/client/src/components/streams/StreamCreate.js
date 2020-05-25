import React from 'react';
import {connect} from 'react-redux'
import {Field, reduxForm} from 'redux-form';
import {createStream} from '../../actions';
class StreamCreate extends React.Component{
    renderInput=({input,label,meta})=>{
        const className = `field ${meta.error && meta.touched ? 'error': ''}`
        return(
            <div className = {className}>
                <label>
                    {label}
                </label>
                <input {...input} autoComplete="off"/>
                
                <div>
                    {this.renderError(meta)}
                </div>
            </div>
        )
    }
    onSubmit=(formValues)=>{
       this.props.createStream(formValues);        
    }
    renderError({error,touched}){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }
    }
    render(){
        console.log("thisProps",this.props)
        return(
        
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className ="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name = "description" component={this.renderInput} label="Entire description"/>
                <button  className="ui button primary">Submit</button>
            </form>
        
        )
    }
}
    
const validate = formValues =>{
    const errors ={};
    if (!formValues.title){
        errors.title='Enter a title biatch'

    }
    if (!formValues.description){
        errors.description='Enter a description biatch'
        
    }
    return errors;
}
const formWrapped= reduxForm({form:'streamCreate',validate:validate})(StreamCreate);

export default connect(null,{createStream})(formWrapped);