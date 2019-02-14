class RowingRace extends React.Component {
	render() {

		A = "Joe";
		B = "Kate";

		return(
			<div id="raceBackgroundWater" className="raceContainer">
				<img src="media/empty_boat.png" alt="race boat" height="100" width="100" className="boatImage"></img>
				<img src="media/empty_boat.png" alt="race boat" height="100" width="100" className="boatImage"></img>
				<p className="liveRaceText">
					<span className="racerA">{`${A}`}</span> vs <span className="racerB">{`${B}`}</span>
				</p>
			</div>

		);
	}

}

class RaceHolder extends React.Component {

	render() {
		return(<Race />);
	}

}


class Race extends React.Component { 

	constructor(props) {
      super(props);
	      this.state = {
	        currentEnd: 0,
	        endings: ['', '.', '..', '...'],
	        end: '.'
	      };
	}

	componentDidMount() {
		this.timerID = setInterval(
	  		() => this.tick(),
	  		1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.state.currentEnd++;
		if(this.state.currentEnd >= 4){this.state.currentEnd = 0}
		this.setState({
			end: this.state.endings[this.state.currentEnd]
		});
	}

	render() {
		return(
				<div className="raceContainer">
					<p id="raceText">{`A new race will begin soon${this.state.end}`}</p>
				</div>
			);
	}

}

ReactDOM.render(<RowingRace />, document.querySelector('#race_holder'));