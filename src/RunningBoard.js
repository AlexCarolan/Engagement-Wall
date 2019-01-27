

class CycleLeaderBoard extends React.Component {
  	render() {

		const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		const listItems = numbers.map((number) =>
		    <tr>
			    <td>{number})</td>
			    <td>Lastname</td> 
			    <td>dist</td>
			 </tr>
		);

		return(
				<table className="leaderboard">
					<tbody>
						<tr>
						    <th>Position</th>
						    <th>Name</th> 
						    <th>Total Distance</th>
						 </tr>
							{listItems}
					</tbody>
				</table>
			);	
  	}

}

class RunningLeaderBoard extends React.Component {
  	render() {

		const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		const listItems = numbers.map((number) =>
		    <tr>
			    <td>{number})</td>
			    <td>Lastname</td> 
			    <td>dist</td>
			 </tr>
		);

		return(
				<table className="leaderboard">
					<tbody>
						<tr>
						    <th>Position</th>
						    <th>Name</th> 
						    <th>Total Distance</th>
						 </tr>
							{listItems}
					</tbody>
				</table>
			);	
  	}

}



ReactDOM.render(<RunningLeaderBoard />, document.querySelector('#lead_board_run'));
ReactDOM.render(<CycleLeaderBoard />, document.querySelector('#lead_board_cycle'));