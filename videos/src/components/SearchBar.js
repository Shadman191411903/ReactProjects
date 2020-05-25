import React from 'react'

class SearchBar extends React.Component{

    state={term:''}

    handleInputChange=(event)=>{

        this.setState({term:event.target.value})

    }
    handleSubmit=(event)=>{
        event.preventDefault()
        //TO DO callback from parent class
        this.props.onFormSubmit(this.state.term)
    }
    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.handleSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                        type="text"
                        placeholder="Type a video name"
                        onChange={this.handleInputChange}
                        value={this.state.term} 

                          
                        />
                    </div>
                </form>

            </div>
        )
    }
}
export default SearchBar