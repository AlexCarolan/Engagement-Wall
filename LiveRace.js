var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RaceHolder = function (_React$Component) {
	_inherits(RaceHolder, _React$Component);

	function RaceHolder(props) {
		_classCallCheck(this, RaceHolder);

		var _this = _possibleConstructorReturn(this, (RaceHolder.__proto__ || Object.getPrototypeOf(RaceHolder)).call(this, props));

		_this.raceHasEnded = _this.raceHasEnded.bind(_this);

		_this.waiting = true;

		_this.state = {
			content: React.createElement(RaceWaiting, null)
		};
		return _this;
	}

	_createClass(RaceHolder, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this2 = this;

			this.timerID = setInterval(function () {
				return _this2.tick();
			}, 5000);
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			clearInterval(this.timerID);
		}

		//Every few seconds have a chance to start a new race 

	}, {
		key: "tick",
		value: function tick() {

			var chance = Math.floor(Math.random() * 100 + 1);

			if (chance >= 90) {
				clearInterval(this.timerID);
				this.setState({
					content: React.createElement(RowingRace, { endMethod: this.raceHasEnded })
				});
			}
		}
	}, {
		key: "raceHasEnded",
		value: function raceHasEnded() {
			var _this3 = this;

			this.setState({
				content: React.createElement(RaceWaiting, null)
			});

			this.timerID = setInterval(function () {
				return _this3.tick();
			}, 5000);
		}
	}, {
		key: "render",
		value: function render() {

			return React.createElement(
				"div",
				null,
				this.state.content
			);
		}
	}]);

	return RaceHolder;
}(React.Component);

var RowingRace = function (_React$Component2) {
	_inherits(RowingRace, _React$Component2);

	function RowingRace(props) {
		_classCallCheck(this, RowingRace);

		var _this4 = _possibleConstructorReturn(this, (RowingRace.__proto__ || Object.getPrototypeOf(RowingRace)).call(this, props));

		_this4.namesA = ["Oliver", "Jack", "Harry", "Olivia", "Jessica", "Lily"];

		_this4.namesB = ["George", "Oscar", "Ethan", "Emily", "Elizabeth", "Charlotte"];

		_this4.progressA = 0;
		_this4.progressB = 0;

		_this4.endRace = props.endMethod;

		//Assign random names
		_this4.nameA = _this4.namesA[Math.floor(Math.random() * 6)];
		_this4.nameB = _this4.namesB[Math.floor(Math.random() * 6)];

		_this4.state = {
			bottomText: React.createElement(
				"span",
				null,
				React.createElement(
					"span",
					{ className: "racerA" },
					"" + _this4.nameA
				),
				" vs ",
				React.createElement(
					"span",
					{ className: "racerB" },
					"" + _this4.nameB
				)
			)
		};

		return _this4;
	}

	_createClass(RowingRace, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this5 = this;

			this.timerID = setInterval(function () {
				return _this5.tick();
			}, 50);
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			clearInterval(this.timerID);
		}

		//move up to 85% left max

	}, {
		key: "tick",
		value: function tick() {

			//Randomly generate progress for each playert
			this.progressA = this.progressA + (Math.random() * (0.05 - 0.3) + 0.3);
			this.progressB = this.progressB + (Math.random() * (0.05 - 0.3) + 0.3);

			//Set racer img to new new progress value
			var racerImgA = document.getElementById("racerBoatA");
			racerImgA.style.left = this.progressA + "%";

			var racerImgB = document.getElementById("racerBoatB");
			racerImgB.style.left = this.progressB + "%";

			//Check for a winner
			if (this.progressA >= 85) {
				this.declareWinner(this.nameA, 'A');
			} else if (this.progressB >= 85) {
				this.declareWinner(this.nameB, 'B');
			}
		}
	}, {
		key: "declareWinner",
		value: function declareWinner(winnerName, pos) {
			var _this6 = this;

			clearInterval(this.timerID);

			if (pos === 'A') {
				this.setState({
					bottomText: React.createElement(
						"span",
						null,
						React.createElement(
							"span",
							{ className: "racerA" },
							"" + this.nameA
						),
						" is the winner!"
					)
				});
			} else if (pos === 'B') {
				this.setState({
					bottomText: React.createElement(
						"span",
						null,
						React.createElement(
							"span",
							{ className: "racerB" },
							"" + this.nameB
						),
						" is the winner!"
					)
				});
			}

			this.timerID = setInterval(function () {
				return _this6.restart();
			}, 5000);
		}
	}, {
		key: "restart",
		value: function restart() {
			clearInterval(this.timerID);
			this.endRace();
		}
	}, {
		key: "render",
		value: function render() {

			return React.createElement(
				"div",
				{ id: "raceBackgroundWater", className: "raceContainer" },
				React.createElement("img", { src: "media/blue_boat.png", alt: "race boat", height: "75", width: "100", className: "boatImage", id: "racerBoatA" }),
				React.createElement("img", { src: "media/red_boat.png", alt: "race boat", height: "75", width: "100", className: "boatImage", id: "racerBoatB" }),
				React.createElement(
					"p",
					{ className: "liveRaceText" },
					this.state.bottomText
				)
			);
		}
	}]);

	return RowingRace;
}(React.Component);

var RaceWaiting = function (_React$Component3) {
	_inherits(RaceWaiting, _React$Component3);

	function RaceWaiting(props) {
		_classCallCheck(this, RaceWaiting);

		var _this7 = _possibleConstructorReturn(this, (RaceWaiting.__proto__ || Object.getPrototypeOf(RaceWaiting)).call(this, props));

		_this7.state = {
			currentEnd: 0,
			endings: ['', '.', '..', '...'],
			end: '.'
		};
		return _this7;
	}

	_createClass(RaceWaiting, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this8 = this;

			this.timerID = setInterval(function () {
				return _this8.tick();
			}, 750);
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			clearInterval(this.timerID);
		}
	}, {
		key: "tick",
		value: function tick() {
			this.state.currentEnd++;
			if (this.state.currentEnd >= 4) {
				this.state.currentEnd = 0;
			}
			this.setState({
				end: this.state.endings[this.state.currentEnd]
			});
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "raceContainer" },
				React.createElement(
					"p",
					{ id: "raceText" },
					"A new race will begin soon" + this.state.end
				)
			);
		}
	}]);

	return RaceWaiting;
}(React.Component);

ReactDOM.render(React.createElement(RaceHolder, null), document.querySelector('#race_holder'));