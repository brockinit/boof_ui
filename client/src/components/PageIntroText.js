import React from 'react';

const styles = {
  introText: {
    fontSize: '1.1rem',
    paddingLeft: '3rem',
    paddingBottom: '2rem',
    fontFamily: 'Merriweather',
    fontWeight: '200'
  },
};

const PageIntroText = props => {
  return (
    <div style={styles.introText}>
      <p>
        {props.text}
      </p>
    </div>
  );
};

export default PageIntroText;
