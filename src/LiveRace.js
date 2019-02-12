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
				<div className="textContainer">
					<p id="raceText">{`A new race will begin soon${this.state.end}`}</p>
				</div>
			);
	}

}

ReactDOM.render(<RaceHolder />, document.querySelector('#race_holder'));