import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyAl0wswOThHjJO0TyoK_hyq9C5ih1uTlVE';

import VideoList from './components/video_list'  

class App extends Component{
    constructor(props) {
        super(props);

        this.state = {videos: []};

        YTSearch({key: API_KEY, term:'paragliding'},(videos) => {this.setState({videos})});

    }
    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));

export default App;