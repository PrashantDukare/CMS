import React from 'react';

/**
 * Table header component
 * @param props
 * @returns the table header with add page button.
 */
const TableHeader = (props) => {
  return (
      <thead>
        <tr>
          <td colSpan='2'>
            <div className='action-container'>
              <button onClick={props.addClick}>Add Page</button>
            </div>
          </td>
        </tr>
        <tr>
          <th>Page</th>
          <th>Actions</th>
        </tr>
      </thead>
  )
};

export default TableHeader;
