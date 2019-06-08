import React from 'react';
import Row from "../Row/Row";
import TableHeader from "../TableHeader/TableHeader";
import './Table.css';

/**
 * Creates the table
 */
const Table = (props) => {

  return (
      <table>
        <TableHeader
            addClick={props.addClick}
        />
        <tbody>
        {props.data && props.data.length ? props.data.map(record => {
          return (
              <Row key={record.id} rowData={record} onDelete={props.onDelete}/>
          )
        }) : <tr><td colSpan='2'> No Records to Display</td></tr>}
        </tbody>
      </table>
  )
};

export default Table;
