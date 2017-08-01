import React from 'react';

const styles = {
  introText: {
    fontSize: '1.5rem',
    paddingLeft: '3rem',
    paddingBottom: '2rem',
    fontFamily: 'Cormorant Garamond'
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
