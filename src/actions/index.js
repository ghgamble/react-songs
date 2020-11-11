// ACTION CREATOR
export const selectSong = song => {
      // return an ACTION
      return {
            type: 'SONG_SELECTED',
            payload: song
      }
}
