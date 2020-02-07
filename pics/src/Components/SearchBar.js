import React from 'react'

//class base component because we need state since the user will be typing into the search bar
//Purpose: takes in input: gets search term 

class SearchBar extends React.Component {

    state = { term: '' };
    /*callback names are community convention
    onInputChange(event) {
        console.log(event.target.value);
    }*/

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field" >
                        <label>Image Search</label>
                        {/*No parantheses at the end of method because 
                        we do not want it to be called each time it is rendered
                        Callback functions do not have() because it is a refernce to the method
                        onChange is an event handler*/}
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={e => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>

            </div>
        );
    }
}

export default SearchBar;