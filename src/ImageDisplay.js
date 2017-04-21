import React, { Component } from 'react';


class ImageDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="image-display">
        <img src={this.props.image.url} alt="" />
        <table>
          <tbody>
            <tr>
              <td><span className="image-title">{this.props.image.title}</span></td><td>Ratings</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ImageDisplay;
