'use strict';

class CurrentDate extends React.Component {

  render() {
		let date = new Date();
		let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		
		let year = date.getFullYear();
		let dayString = days[date.getDay()];
		let month = months[date.getMonth()];
		
		let seconds = date.getSeconds();
		let minutes = date.getMinutes();
		let hours = date.getHours();
		
		return(<h2>{seconds}</h2>);
		
  }
	
}

ReactDOM.render(<CurrentDate />, document.querySelector('#date'));