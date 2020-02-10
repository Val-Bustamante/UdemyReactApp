import React from "react"

class SearchBar extends React.Component {
    state = { term: "", video: "" };

    onInputChange = (event) => {

        //allows searchbar text to change
        this.setState({ term: event.target.value })



    }

    onFormSubmit = (event) => {
        event.preventDefault();
        //TO do: call callback from parent app component
        //to tell app that the user submitted form and parts of the app need to rerender
        
    }

    render() {
        return (
            <div className="searchbar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;