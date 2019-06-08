import React from 'react';
import './PopUp.css';

/**
 * Component to render a popup with the current blog component data
 */
const PopUp = (props) => {
  return (props.schema &&
      <div className='popup'>
        <div className='popup_inner'>
          <div className='popup-body'>
            {props.schema ? props.schema.map((entry) => {
              return (
                  <fieldset key={entry.field}>
                    <label>{entry.label}</label>
                    {entry && entry.type ==='textarea'?
                        <textarea rows='10' cols='100' defaultValue={entry.value} onChange={(event) => props.updateBlog(event, entry.field)}/> :
                        <input type={entry.type} defaultValue={entry.value} onChange={(event) => props.updateBlog(event, entry.field)}/>
                    }
                  </fieldset>
              )
            }): ''

            }
          </div>
          <div className='popup-actions'>
            <button onClick={props.onSave}>Save</button>
            <button onClick={props.onCancel}>Cancel</button>
          </div>
        </div>
      </div>
  );
};

export default PopUp;
