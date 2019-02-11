class Race extends React.Component { 

	render() {
		return(
				<div className="textContainer">
					<p id="raceText"> A new race will begin soon...</p>
				</div>
			);
	}

}

ReactDOM.render(<Race />, document.querySelector('#race_holder'));