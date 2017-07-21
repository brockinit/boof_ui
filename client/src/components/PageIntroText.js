import React from 'react';

const styles = {
  introText: {
    fontSize: '1.2rem',
    paddingLeft: '3rem',
    paddingBottom: '2rem',
    fontFamily: 'Merriweather'
  }
}

const PageIntroText = (props) => {
  return (
    <div style={styles.introText}>
      <p>{props.text}</p>
    </div>
  )
}

export default PageIntroText;
