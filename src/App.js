import React from 'react';
import axios from 'axios';
import Card from './Card';

class App extends React.Component {
    state = { 
      joke: ''
     }
    componentDidMount() {
      var url = 'https://safe-falls-22549.herokuapp.com/random_joke'
        axios.get(url)
        .then((x) => {
          this.setState({
            joke: x.data
          })
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container text-right py-5">
                    <Card setup={this.state.joke.setup} punchline={this.state.joke.punchline} />
                </div>
            </React.Fragment>
        )
    }
}
export default App;
