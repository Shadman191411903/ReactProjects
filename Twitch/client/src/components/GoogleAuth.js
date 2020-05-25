import React from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../actions'


class GoogleAuth extends React.Component{
   
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'482670543025-dah9s26l1pd2vbmgqle8pnq3603am01m.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });


    }
    onAuthChange=(isSignedIn)=>{
        //console.log("on auth change", isSignedIn)
        if(isSignedIn){
            //console.log("isSignInProps triggered")
            this.props.signIn(this.auth.currentUser.get().getId())
        }
        else{
            this.props.signOut()
        }

    }
    onSignIn = () => {
        //console.log("I am trieggered Now")
        this.auth.signIn();
    }
    onSignOut = () =>{
        this.auth.signOut();
    }
    renderAuthButton() {
        console.log("signInState",this.props.isSignedIn)
        if(this.props.isSignedIn === null){
            return null;
        }else if(this.props.isSignedIn){
            return(
                <button onClick={this.onSignOut} className = "ui red google button">
                    <i className = "google icon"/>
                     Sign out
                </button>
            )

        }else{
            return (
                <button onClick={this.onSignIn} className = "ui red google button">
                    <i className = "google icon"/>
                     Sign In with google
                </button>
            )
        }
    }
    render(){
        return(
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    console.log("State:", state)
    return {isSignedIn:state.auth.isSignedIn}
}
export default connect(mapStateToProps,{signIn:signIn,signOut:signOut})(GoogleAuth);