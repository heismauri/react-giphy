import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.handleClickFunction) {
      this.props.handleClickFunction(this.props.id);
    }
  }
  render() {
    const gifUrl = `https://media1.giphy.com/media/${this.props.id}/200.gif`;
    return (
      <img src={gifUrl} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
