import React from 'react';

/**
 * Component to render a figure and img
 * It will render edit and delete icons in edit mode
 */
const Figure = (props) => {
  return (props.data &&
      <figure>
        { props.mode === "edit" ? <div className="icons-container">
          <a className='edit-icon' href='#' onClick={() => props.editClick('Figure', props.data.value, props.data.key)}>
            <i className='fa fa-pencil'/>
          </a>
          <a className='delete-icon' href='#' onClick={() => props.deleteClick(props.data.key)}>
            <i className='fa fa-trash'/>
          </a>
        </div> : ''
        }
        <img src={props.data.value.src} alt={props.data.value.alt} width={props.data.value.width} height={props.data.value.height}/>
      </figure>
  )
};

export default Figure;
