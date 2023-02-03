import React from 'react';

function Button(props) {
  return (
    <>
      <button
        type='submit'
        className='btn'
        style={{backgroundColor: props.BgColor}}
        onClick={props.onClick}
      >
        {props.text}
      </button>
    </>
  );
}

export default Button;
