import React from 'react';
import { useTable } from 'react-table'


const ScoreboardPage = (props) => {
    const data = React.useMemo(
        () => [
          {
            name: 'Hello',
            score: '23',
          },
          {
            name: 'react-table',
            score: '3',
          }
        ],
        []
      )
    
      const columns = React.useMemo(
        () => [
          {
            Header: 'Name',
            accessor: 'name', // accessor is the "key" in the data
          },
          {
            Header: 'Score',
            accessor: 'score',
          },
        ],
        []
      )
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data })
    
      return (
        <div>
            <h1>TOP100</h1>
            <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      borderBottom: 'solid 3px red',
                      background: 'aliceblue',
                      color: 'black',
                      fontWeight: 'bold',
                    }}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: '10px',
                          border: 'solid 1px gray',
                          background: 'papayawhip',
                        }}
                      >
                        {cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
        <a href="">Home</a> 
        </div>
      )
}

export default ScoreboardPage;