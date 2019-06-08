import React from 'react';

/**
 * Component to render a section
 * It will render edit and delete icons in edit mode
 */
const Section = (props) => {
  return (props.data &&
      <section>
        { props.mode === "edit" ? <div className="icons-container">
          <a className='edit-icon' href='#' onClick={() => props.editClick('Section', props.data.value, props.data.key)}>
            <i className='fa fa-pencil'/>
          </a>
          <a className='delete-icon' href='#' onClick={() => props.deleteClick(props.data.key)}>
            <i className='fa fa-trash'/>
          </a>
        </div> : ''
        }
        <h1>{props.data.value.heading}</h1>
        <p>{props.data.value.text}</p>
      </section>
  )
};

export default Section;
