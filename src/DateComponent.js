'use strict';

class CurrentDate extends React.Component {

	constructor(props) {
		super(props);
		this.dateGetter = new Date();
		this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		this.days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

		this.state = {
			year : this.dateGetter.getFullYear(),
			dayString : this.days[this.dateGetter.getDay()],
			day : this.dateGetter.getDate(),
			month : this.months[this.dateGetter.getMonth()],
			seconds : this.dateGetter.getSeconds(),
			minutes : this.dateGetter.getMinutes(),
			hours : this.dateGetter.getHours()
		};
		
	}

	pad(d) {
    	return (d < 10) ? '0' + d.toString() : d.toString();
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
		this.dateGetter = new Date();
		this.setState({
			year : this.dateGetter.getFullYear(),
			dayString : this.days[this.dateGetter.getDay()],
			day : this.dateGetter.getDate(),
			month : this.months[this.dateGetter.getMonth()],
			seconds : this.dateGetter.getSeconds(),
			minutes : this.dateGetter.getMinutes(),
			hours : this.dateGetter.getHours()
		});
	}

  	render() {
		return(<h2>{`${this.pad(this.state.hours)}:${this.pad(this.state.minutes)}:${this.pad(this.state.seconds)} \u00A0\u00A0 ${this.state.dayString} ${this.state.day} ${this.state.month} ${this.state.year}`}</h2>);	
  	}
	
}

ReactDOM.render(<CurrentDate />, document.querySelector('#date'));