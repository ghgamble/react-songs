import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
      renderList() {
            let songsList = this.props.songs;
            return songsList.map((song) => {
                  return (
                        <div className="item" key={song.title}>
                              <div className="right floated content">
                                    <button className="ui button primary">Select</button>
                              </div>
                              <div className="content">{song.title}</div>
                        </div>
                  );
            })
      }

      render() {
            // this.props === { songs: state.songs }
            console.log(this.props);
            return (
                  <div className="ui divided list">{this.renderList()}</div>
            );
      }
}

const mapStateToProps = (state) => {
      // State argument is everything in redux store
      // console.log(state.songs);
      return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);
