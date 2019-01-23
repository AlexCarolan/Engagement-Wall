'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrentDate = function (_React$Component) {
	_inherits(CurrentDate, _React$Component);

	function CurrentDate(props) {
		_classCallCheck(this, CurrentDate);

		var _this = _possibleConstructorReturn(this, (CurrentDate.__proto__ || Object.getPrototypeOf(CurrentDate)).call(this, props));

		_this.dateGetter = new Date();
		_this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		_this.days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

		_this.state = {
			year: _this.dateGetter.getFullYear(),
			dayString: _this.days[_this.dateGetter.getDay()],
			day: _this.dateGetter.getDate(),
			month: _this.months[_this.dateGetter.getMonth()],
			seconds: _this.dateGetter.getSeconds(),
			minutes: _this.dateGetter.getMinutes(),
			hours: _this.dateGetter.getHours()
		};

		return _this;
	}

	_createClass(CurrentDate, [{
		key: "pad",
		value: function pad(d) {
			return d < 10 ? '0' + d.toString() : d.toString();
		}
	}, {
		key: "componentDidMount",
		value: function componentDidMount() {
			var _this2 = this;

			this.timerID = setInterval(function () {
				return _this2.tick();
			}, 1000);
		}
	}, {
		key: "componentWillUnmount",
		value: function componentWillUnmount() {
			clearInterval(this.timerID);
		}
	}, {
		key: "tick",
		value: function tick() {
			this.dateGetter = new Date();
			this.setState({
				year: this.dateGetter.getFullYear(),
				dayString: this.days[this.dateGetter.getDay()],
				day: this.dateGetter.getDate(),
				month: this.months[this.dateGetter.getMonth()],
				seconds: this.dateGetter.getSeconds(),
				minutes: this.dateGetter.getMinutes(),
				hours: this.dateGetter.getHours()
			});
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"h2",
				null,
				this.pad(this.state.hours) + ":" + this.pad(this.state.minutes) + ":" + this.pad(this.state.seconds) + " \xA0\xA0 " + this.state.dayString + " " + this.state.day + " " + this.state.month + " " + this.state.year
			);
		}
	}]);

	return CurrentDate;
}(React.Component);

ReactDOM.render(React.createElement(CurrentDate, null), document.querySelector('#date'));