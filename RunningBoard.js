var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CycleLeaderBoard = function (_React$Component) {
	_inherits(CycleLeaderBoard, _React$Component);

	function CycleLeaderBoard() {
		_classCallCheck(this, CycleLeaderBoard);

		return _possibleConstructorReturn(this, (CycleLeaderBoard.__proto__ || Object.getPrototypeOf(CycleLeaderBoard)).apply(this, arguments));
	}

	_createClass(CycleLeaderBoard, [{
		key: 'render',
		value: function render() {

			var scores = [['M Sharp', 134], ['A Rosa', 127], ['B Sanderson', 118], ['J Solomon', 101], ['H Greene', 94], ['G Harvey', 85], ['M Croft', 83], ['P Thompson', 79], ['D Hutton', 77], ['M Washington', 72]];

			var listItems = [];

			for (i = 0; i < 10; i++) {
				listItems.push(React.createElement(
					'tr',
					{ key: i },
					React.createElement(
						'td',
						{ key: '{\'num\'+i}' },
						'' + (i + 1)
					),
					React.createElement(
						'td',
						{ key: '{\'name\'+i}' },
						'' + scores[i][0]
					),
					React.createElement(
						'td',
						{ key: '{\'dist\'+i}' },
						scores[i][1] + ' Km'
					)
				));
			}

			return React.createElement(
				'table',
				{ className: 'leaderboard' },
				React.createElement(
					'tbody',
					null,
					React.createElement(
						'tr',
						null,
						React.createElement(
							'th',
							null,
							'Position'
						),
						React.createElement(
							'th',
							null,
							'Name'
						),
						React.createElement(
							'th',
							null,
							'Total'
						)
					),
					listItems
				)
			);
		}
	}]);

	return CycleLeaderBoard;
}(React.Component);

var RunningLeaderBoard = function (_React$Component2) {
	_inherits(RunningLeaderBoard, _React$Component2);

	function RunningLeaderBoard() {
		_classCallCheck(this, RunningLeaderBoard);

		return _possibleConstructorReturn(this, (RunningLeaderBoard.__proto__ || Object.getPrototypeOf(RunningLeaderBoard)).apply(this, arguments));
	}

	_createClass(RunningLeaderBoard, [{
		key: 'render',
		value: function render() {

			var scores = [['C Huffman', 61], ['K Tate', 54], ['R Davies', 53], ['E Parry', 49], ['D Phillips', 45], ['M Clements', 43], ['T Hebert', 43], ['L Church', 40], ['D Rodgers', 38], ['L Boyle', 33]];

			var listItems = [];

			for (i = 0; i < 10; i++) {
				listItems.push(React.createElement(
					'tr',
					{ key: i },
					React.createElement(
						'td',
						{ key: '{\'num\'+i}' },
						'' + (i + 1)
					),
					React.createElement(
						'td',
						{ key: '{\'name\'+i}' },
						'' + scores[i][0]
					),
					React.createElement(
						'td',
						{ key: '{\'dist\'+i}' },
						scores[i][1] + ' Km'
					)
				));
			}

			return React.createElement(
				'table',
				{ className: 'leaderboard' },
				React.createElement(
					'tbody',
					null,
					React.createElement(
						'tr',
						null,
						React.createElement(
							'th',
							null,
							'Position'
						),
						React.createElement(
							'th',
							null,
							'Name'
						),
						React.createElement(
							'th',
							null,
							'Total'
						)
					),
					listItems
				)
			);
		}
	}]);

	return RunningLeaderBoard;
}(React.Component);

ReactDOM.render(React.createElement(RunningLeaderBoard, null), document.querySelector('#lead_board_run'));
ReactDOM.render(React.createElement(CycleLeaderBoard, null), document.querySelector('#lead_board_cycle'));