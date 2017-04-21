import React, { Component } from 'react';
import './App.css';
import ImageDisplay from './ImageDisplay.js';
import ImageList from './ImageList.js';
import FavoritesList from './FavoritesList.js';
import Nav from './Nav.js';
import photoData from './data.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: photoData,
      currentImage: photoData[0]
    }
    this.onImageClick = this.onImageClick.bind(this);
    this.onImageSubmit = this.onImageSubmit.bind(this);
  }

  onImageClick = (image) => {
    this.setState({
      currentImage: image
    }) 
  }

  onImageSubmit = (url, title) => {
    console.log('app onSubmit');
    let newImage = {url: url, title: title};
    this.setState({images: [...this.state.images, newImage]});
    this.setState({currentImage: newImage});    
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Photo Library App by Carlo and Max</h2>
          <Nav submitImage={this.onImageSubmit} />
        </div>
        <div className="main-container">
          <div className="left-container">
            <ImageList images={this.state.images} onImageClick={this.onImageClick} />
            <FavoritesList />
          </div>
          <div className="right-container">
            <ImageDisplay image={this.state.currentImage} />
          </div>            
        </div>
      </div>
    );
  }
}

export default App;
