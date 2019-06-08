import React from 'react';

/**
 * Component to render the blog Header
 * It will render edit icon in edit mode
 */
const Header = (props) => {
  return (props.data &&
      <header>
        { props.mode === "edit" ? <div className="icons-container">
          <a className='edit-icon' href='#' onClick={() => props.editClick('Header', props.data.value, props.data.key)}>
            <i className='fa fa-pencil'/>
          </a>
        </div> : ''
        }
        <h1>{props.data.value.text}</h1>
      </header>
  )
};

export default Header;
