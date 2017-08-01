import React from 'react';

const styles = {
  headerSubText: {
    fontSize: '1.5rem',
    fontStyle: 'italic',
    paddingLeft: '3rem',
    paddingRight: '2rem',
    paddingBottom: '1rem'
  },
  hr: {
    textAlign: 'left',
    marginLeft: '3rem',
    height: '1.5px',
    width: '3.5rem',
    border: '0',
    borderTop: '2px solid',
    paddingTop: '2rem',
  }
};

const PageHeaderSubText = props => {
  return (
    <div>
      <p style={styles.headerSubText}>
        {props.text}
      </p>
      <hr style={styles.hr} />
    </div>
  );
};

export default PageHeaderSubText;
