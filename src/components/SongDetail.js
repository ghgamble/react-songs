import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
      if (!song) {
            // if song is null, which it will be when component first loads
            return <div>Select a song</div>;
      }

      return (
            <div>
                  <h3>Details for:</h3>
                  <p>
                        Title: {song.title}
                        <br />
                        Duration: {song.duration}
                  </p>
            </div>
      );
};

const mapStateToProps = state => {
      return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
