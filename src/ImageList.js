import React, { Component } from 'react';

class ImageList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="image-list">
        <table>
          <thead>
            <tr>
              <td>
                Images
              </td>
            </tr>
          </thead>
          <tbody>
            {this.props.images.map((image, index) => (
              <tr onClick={() => this.props.onImageClick(image)} key={index}>
                <td>
                  {image.title}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ImageList;
