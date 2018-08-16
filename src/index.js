import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';
//const API_KEY = _config.API_KEY;
/*
testing some youtube integration, udemy course
 but what is this apikye for?
 I think a client apikey dont need to be private, vecause it should restrict like
 for your domain, or something like this
 yeah, ive checked it, but studing, so make sense put something secure
 yeah, should work like below, run it and see the console.log,
 on node it work, not sure on browser what gonna happen
 but node only start a web server, i need to check it on browser, didnt i?
 run anc check on chrome
 changed to alert, i cant see, share the server here
 hmmm, how the fuck i do that ? kkkk
 at your name, the same place you shared the link, you can chare a port
 localhost:8085
 dude... this tools are amazing... 
 ok i see
 man you put the port that is running my jenkis server here haha
 i'll change, just second
 localhost:8099, nothing, didn you change ports like
you put 8099 twice shoud be lik 3000, 
localhost:8099 and localhost:3050,
both are loading like forever,
what port u using in your browser?
8080
have you maped 8080->3050?
what? no
8080 in my browser, and put those ports exposed
when you share you say I gona share 8080 as 3050
hmmmm, just a second again
i need to be running my server?
no mapped, i just exposed my main port
8080
okay, i see now
really weird, gonna try locally in another project

MAN: it works here, haha, I think is this weird boilerplate you got from udemy
hmmm, make sense... i'll try with a default one to check 
but in the general, the way as i did is correct right?
yeah, just should keep const like 
const API_KEY = process.env.API_KEY and not right in the code down there
ok, use the const instead the env direct, got it
yeah
share the terminal a little, want to check a thing
ok

*/
import VideoList from './components/video_list'

const API_KEY = config.API_KEY;

class App extends Component {
    constructor(props) {
        super(props);



        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'paragliding' }, (videos) => { this.setState({ videos }) });

    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));

export default App;