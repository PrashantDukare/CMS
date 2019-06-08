import React from 'react';

/**
 * Component to render a paragraph
 * It will render edit and delete icons in edit mode
 */
const Para = (props) => {
  return (props.data &&
      <div key={props.data.key} className='para'>
        { props.mode === "edit" ? <div className="icons-container">
          <a className='edit-icon' href='#' onClick={() => props.editClick('Para', props.data.value, props.data.key)}>
            <i className='fa fa-pencil'/>
          </a>
          <a className='delete-icon' href='#' onClick={() => props.deleteClick(props.data.key)}>
            <i className='fa fa-trash'/>
          </a>
        </div> : ''
        }
        <p> {props.data.value.text} </p>
      </div>
  )
};

export default Para;
