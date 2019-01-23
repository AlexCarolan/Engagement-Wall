var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

/* Generate Inital Hours */
// Monthly goal 20,000
// Current total generated using day of month 
// This data is generated due to unavailability of accessable api
var goalLimit = 20000;
var date = new Date();
var progress = date.getDate() * 500 + Math.floor(Math.random() * 5000);

function drawChart() {

  //Check that the remaining hours are above zero
  var remainder = goalLimit - progress;
  if (remainder <= 0) {
    remainder = 0;
  }

  var data = google.visualization.arrayToDataTable([['Status', 'Hours'], ['Complete', progress], ['Incomplete', remainder]]);

  var options = {
    title: 'Community Goal - Total Hours',
    legend: 'none',
    pieHole: 0.4,
    colors: ['#19B3A6', '#7d7d7d'],
    chartArea: { width: '100%', height: '100%' },
    titlePosition: 'none'
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_goal'));
  chart.draw(data, options);
}

var TotalHours = function (_React$Component) {
  _inherits(TotalHours, _React$Component);

  function TotalHours(props) {
    _classCallCheck(this, TotalHours);

    var _this = _possibleConstructorReturn(this, (TotalHours.__proto__ || Object.getPrototypeOf(TotalHours)).call(this, props));

    _this.state = {
      hours: progress
    };
    return _this;
  }

  _createClass(TotalHours, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.timerID = setInterval(function () {
        return _this2.tick();
      }, 2000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }
  }, {
    key: 'tick',
    value: function tick() {
      //Create a random chance to increases by a semi-random value
      if (Math.floor(Math.random() * 10) > 5) {
        progress = progress + Math.floor(Math.random() * 4);
      }

      drawChart();

      this.setState({
        hours: progress
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'h3',
        null,
        'Current Progress: ' + this.state.hours + ' Hours'
      );
    }
  }]);

  return TotalHours;
}(React.Component);

var GoalTitle = function (_React$Component2) {
  _inherits(GoalTitle, _React$Component2);

  function GoalTitle() {
    _classCallCheck(this, GoalTitle);

    return _possibleConstructorReturn(this, (GoalTitle.__proto__ || Object.getPrototypeOf(GoalTitle)).apply(this, arguments));
  }

  _createClass(GoalTitle, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'h3',
        null,
        'Community Goals - ' + goalLimit + ' Gym Hours'
      );
    }
  }]);

  return GoalTitle;
}(React.Component);

ReactDOM.render(React.createElement(GoalTitle, null), document.querySelector('#goal_title'));
ReactDOM.render(React.createElement(TotalHours, null), document.querySelector('#total_hours'));