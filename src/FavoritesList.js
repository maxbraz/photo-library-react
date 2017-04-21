import React, { Component } from 'react';

class FavoritesList extends Component {
  render() {
    return (
      <div className="image-list">
        <table>
          <thead>
            <tr>
              <td>
                Favorites
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Row 1
              </td>
            </tr>
            <tr>
              <td>
                Row 2
              </td>
            </tr>
            <tr>
              <td>
                Row 3
              </td>
            </tr>
            <tr>
              <td>
                Row 4
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default FavoritesList;
