

class CycleLeaderBoard extends React.Component {
  	render() {

  		const scores = [
   			['M Sharp',134],
  			['A Rosa',127],
  			['B Sanderson',118],
  			['J Solomon',101],
  			['H Greene',94],
  			['G Harvey',85],
  			['M Croft',83],
  			['P Thompson',79],
  			['D Hutton',77],
  			['M Washington',72]
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
						    <th>Total</th>
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
  			['C Huffman',61],
  			['K Tate',54],
  			['R Davies',53],
  			['E Parry',49],
  			['D Phillips',45],
  			['M Clements',43],
  			['T Hebert',43],
  			['L Church',40],
  			['D Rodgers',38],
  			['L Boyle',33]
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
						    <th>Total</th>
						 </tr>
							{listItems}
					</tbody>
				</table>
			);	
  	}

}



ReactDOM.render(<RunningLeaderBoard />, document.querySelector('#lead_board_run'));
ReactDOM.render(<CycleLeaderBoard />, document.querySelector('#lead_board_cycle'));