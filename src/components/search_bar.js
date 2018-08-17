import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={term : ''};
    }

    onInputChange(event){
        console.log(event.target.value);
        this.setState({term : event.target.value});
    }

    render(){
    return (
            <div>
            <input onChange={event => this.onInputChange(event)} />
            </div>
    );

    }
    
}
export default SearchBar;