

class CycleLeaderBoard extends React.Component {
  	render() {

  		const scores = [
  			['A',123],
  			['B',123],
  			['C',123],
  			['D',123],
  			['E',123],
  			['A',123],
  			['B',123],
  			['C',123],
  			['D',123],
  			['E',123]
  		]

		let listItems = [];

		for (i=0; i<10; i++)
		{
		    listItems.push(
			    <tr key={i}>
				    <td key="{'num'+i}">{`${i+1}`}</td>
				    <td key="{'name'+i}">{`${scores[i][0]}`}</td> 
				    <td key="{'dist'+i}">{`${scores[i][1]} Km`}</td>
				 </tr> 
			 );
		}

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

  		const scores = [
  			['A',123],
  			['B',123],
  			['C',123],
  			['D',123],
  			['E',123],
  			['A',123],
  			['B',123],
  			['C',123],
  			['D',123],
  			['E',123]
  		]

		let listItems = [];

		for (i=0; i<10; i++)
		{
		    listItems.push(
			    <tr key={i}>
				    <td key="{'num'+i}">{`${i+1}`}</td>
				    <td key="{'name'+i}">{`${scores[i][0]}`}</td> 
				    <td key="{'dist'+i}">{`${scores[i][1]} Km`}</td>
				 </tr> 
			 );
		}

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