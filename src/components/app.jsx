import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGif: "GdQR3peNRqAiHecfYo"
    };
  }
  search = (query) => {
    giphy('1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm')
      .search({
        q: query,
        rating: 'g',
        limit: 20
      }, (error, response) => {
        this.setState({
          gifs: response.data
        });
      });
  }
  selectGif = (gif) => {
    this.setState({
      selectedGif: gif
    });
  }
  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGif} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGifFunction={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
