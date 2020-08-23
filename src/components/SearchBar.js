import React from "react";

class SearchBar extends React.Component {
    state = { term: "Write smthng here.."};
    
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Search Data</label>
                        <input type="text"
                        value={this.state.term} 
                        onClick= {(e) => { this.setState({term: ""} )}}
                        onChange= {(e) => {this.setState({term: e.target.value})}} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;