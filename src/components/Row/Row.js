import React from 'react';
import {Link} from 'react-router-dom';

/**
 * Component to render a row with page name and action icons
 */
const Row = (props) => {
  const headerField = props.rowData.content.find((entry) => {
    return entry.type === 'Header';
  });
  const name = headerField && headerField && headerField.value ? headerField.value.text : '';
  return ( props.rowData &&
      <tr key={props.rowData.id}>
        <td>
          {name}
        </td>
        <td className='actions'>
          <Link to={`/page/${props.rowData.id}`}> <i className='fa fa-eye' title='View'/></Link>
          <Link to={`/page/edit/${props.rowData.id}`}> <i className='fa fa-pencil' title='Edit'/></Link>
          <a href="#" onClick={() => props.onDelete(props.rowData.id)}><i className='fa fa-trash' title='Delete'/></a>
        </td>
      </tr>
  )
};

export default Row;
