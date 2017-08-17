import React, { Component } from 'react';

const styles = {
  app: {
    paddingTop: 40,
    textAlign: 'center',
    fontSize: '26px',
  },
};

class WelcomePage extends Component {
  render() {
    return (
      <div style={styles.app}>Welcome to Zen Time!</div>
    )
  }
}

export default WelcomePage;