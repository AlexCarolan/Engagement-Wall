

class RunningLeaderBoard extends React.Component {



  	render() {

		const numbers = [1, 2, 3, 4, 5];
		const listItems = numbers.map((number) =>
		  <li>{number}</li>
		);

		return(
				<ul>{listItems}</ul>
			);	
  	}

}



ReactDOM.render(<RunningLeaderBoard />, document.querySelector('#lead_board'));