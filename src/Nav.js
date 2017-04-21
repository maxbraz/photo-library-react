import React, { Component } from 'react';

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      title: ''
    }
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUrlChange(e) {
    this.setState({url: e.target.value})
  }

  handleTitleChange(e) {
    this.setState({title: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitImage(this.state.url, this.state.title);
    this.setState({url: '', title: ''});
  }

  render() {
    return (
      <div className="navbar">
        <table>
          <tbody>
            <tr>
              <td>Image Link:</td>
              <td>
                <input type="text" name="url" placeholder="URL Link for Image" value={this.state.url} onChange={this.handleUrlChange}></input>
              </td>
              <td>Image Title:</td>
              <td>
                <input type="text" name="title" placeholder="Image Title" value={this.state.title} onChange={this.handleTitleChange}></input>
              </td>
              <td>
                <button name="button" onClick={this.handleSubmit}>Save Photo</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Nav;
