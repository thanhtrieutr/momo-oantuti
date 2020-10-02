import React, { Component } from 'react';
import { useTable } from 'react-table'
import axios from 'axios'


export default class ScoreboardPage extends Component{
	constructor(){
		super()
		this.state = {
			data: []
		}
	}
	
	async componentDidMount() {
		const response = await axios.get(`http://localhost:3000/api/top100`);
		const data = response.data
		if (response.status === 200 && data) {
			await this.setState({
				data: data			
			})
		}
	}
		
		render(){
			// const data = this.state.data
			// const columns = [
			// 		{
			// 			Header: 'Name',
			// 			accessor: 'name', // accessor is the "key" in the data
			// 		},
			// 		{
			// 			Header: 'Score',
			// 			accessor: 'point',
			// 		},
			// 	]
			// const {
      //   getTableProps,
      //   getTableBodyProps,
      //   headerGroups,
      //   rows,
      //   prepareRow,
      // } = useTable({ columns, data })
      return (
        <div>
            <h1>TOP 100 PLAYERS</h1>
						<table className="table">

						
							<thead>
								<th scope="col">#</th>
								<th scope="col">Name</th>
								<th scope="col">Score</th>
							</thead>
							<tbody>

							{this.state.data.map((row,index)=>
							(<tr>
								<th>{index + 1}</th>
								<td>{row.name}</td>
								<td>{row.point}</td>

							</tr>))}
								</tbody>
						</table>


            {/* <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
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
        </table> */}
        <a href="/">Home</a> 
        </div>
      )
		}
}

