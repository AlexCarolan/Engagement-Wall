class RowingRace extends React.Component {

	constructor(props) {
      super(props);

      	this.namesA = [
      	"Oliver",
      	"Jack",
      	"Harry",
      	"Olivia",
      	"Jessica",
      	"Lily"
      	];

      	this.namesB = [
      	"George",
      	"Oscar",
      	"Ethan",
      	"Emily",
      	"Elizabeth",
      	"Charlotte"
      	];
	  	
	  	this.progressA = 0;
	  	this.progressB = 0;

	  	//Assign random names
	  	this.nameA = this.namesA[Math.floor((Math.random() * 6))];
		this.nameB = this.namesB[Math.floor((Math.random() * 6))];

		this.state = {
			bottomText: <span><span className="racerA">{`${this.nameA}`}</span> vs <span className="racerB">{`${this.nameB}`}</span></span>
		}
	      
	}
	
	componentDidMount() {
		this.timerID = setInterval(
	  		() => this.tick(),
	  		50
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	//move up to 85% left max
	tick() {

		//Randomly generate progress for each playert
		this.progressA = (this.progressA + (Math.random() * (0.05 - 0.3) + 0.3));
		this.progressB = (this.progressB + (Math.random() * (0.05 - 0.3) + 0.3));

		//Set racer img to new new progress value
		let racerImgA = document.getElementById("racerBoatA");
		racerImgA.style.left = (this.progressA)+"%";

		let racerImgB = document.getElementById("racerBoatB");
		racerImgB.style.left = (this.progressB)+"%";

		//Check for a winner
		if (this.progressA >= 85) {
			this.declareWinner(this.nameA, 'A');

		} else if (this.progressB >= 85) {
			this.declareWinner(this.nameB,'B');
		}


	}

	declareWinner(winnerName, pos) {
		clearInterval(this.timerID);

		if(pos === 'A') {
			this.setState({
				bottomText: <span><span className="racerA">{`${this.nameA}`}</span> is the winner!</span>
			});
		} else if(pos === 'B') {
			this.setState({
				bottomText: <span><span className="racerB">{`${this.nameB}`}</span> is the winner!</span>
			});
		}
	}

	render() {

		return(
			<div id="raceBackgroundWater" className="raceContainer">
				<img src="media/blue_boat.png" alt="race boat" height="75" width="100" className="boatImage" id="racerBoatA"></img>
				<img src="media/red_boat.png" alt="race boat" height="75" width="100" className="boatImage" id="racerBoatB"></img>
				<p className="liveRaceText">
					{this.state.bottomText}
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