import React from 'react';

const Notice = (props) => {
  return(
    <div className={props.noticeContainerClass}>
      <div className={props.class}>
        <p>{props.status}</p>
      </div>
    </div>
  );
}

export default Notice;
