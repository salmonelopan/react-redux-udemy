import React from 'react';


class GoogleAuth extends React.Component{

    state = {
        isSignedIn: null
    }

    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId: '338635997627-skiil2ge009gaf4819e6ruat54fkofdk.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()});
    }

    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return null;
        } else if(this.state.isSignedIn){
            return (
                <button className="ui red google button">
                    <i className="google icon"/>
                    Sign Out            
                </button>);
        } else{
            return (
                <button className="ui red google button">
                    <i className="google icon"/>
                    Sign In            
                </button>
            );
        }
    }


    render(){
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

export default GoogleAuth;

