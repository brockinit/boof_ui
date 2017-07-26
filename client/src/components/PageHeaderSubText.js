import React from 'react';

const styles = {
  headerSubText: {
    fontSize: '1.7rem',
    fontStyle: 'italic',
    paddingLeft: '3rem',
    paddingRight: '2rem',
  },
};

const PageHeaderSubText = props => {
  return (
    <div style={styles.headerSubText}>
      <p>
        {props.text}
      </p>
      <p>----------</p>
    </div>
  );
};

export default PageHeaderSubText;
