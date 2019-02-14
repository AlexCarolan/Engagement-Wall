class RowingRace extends React.Component {

	constructor(props) {
      super(props);
	  	
	  	this.progressA = 0;
	  	this.nameA = "Joe";
		this.nameB = "Kate";
	      
	}
	
	componentDidMount() {
		this.timerID = setInterval(
	  		() => this.tick(),
	  		250
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	//move up to 85% left max
	tick() {

		this.progressA = this.progressA + 1;
		let racerImgA = document.getElementById("racerBoatA");
		racerImgA.style.left = (this.progressA)+"%";

		if (this.progressA >= 85) {
			this.declareWinner(this.nameA);
		}


	}

	declareWinner(winnerName) {
		clearInterval(this.timerID);
	}

	render() {

		return(
			<div id="raceBackgroundWater" className="raceContainer">
				<img src="media/cropped_boat.png" alt="race boat" height="50" width="100" className="boatImage" id="racerBoatA"></img>
				<img src="media/cropped_boat.png" alt="race boat" height="50" width="100" className="boatImage" id="racerBoatB"></img>
				<p className="liveRaceText">
					<span className="racerA">{`${this.nameA}`}</span> vs <span className="racerB">{`${this.nameB}`}</span>
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