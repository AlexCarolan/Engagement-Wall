var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

/* Generate Inital Progress */
// Monthly goal 20,000 base
// Current total generated using day of month 
// This data is generated due to unavailability of an accessable api
var goalLimit = 20000;
var rowingLimit = 50000;
var runningLimit = 75000;
var date = new Date();
var progress = date.getDate() * 500 + Math.floor(Math.random() * 5000);

//Draws the gym hours goal chart
function drawChart() {

  //Check that the remaining hours are above zero
  var remainder = goalLimit - progress;
  if (remainder <= 0) {
    remainder = 0;
  }

  var data = google.visualization.arrayToDataTable([['Status', 'Hours'], ['Complete', progress], ['Incomplete', remainder]]);

  var fSize = 13;
  if (window.matchMedia("(min-height: 1070px)").matches) {
    fSize = 18;
  } else {
    fSize = 13;
  }

  var options = {
    fontSize: fSize,
    legend: 'none',
    pieHole: 0.4,
    colors: ['#D33B42', '#7d7d7d'],
    chartArea: { width: '100%', height: '93%' },
    backgroundColor: '#c1c5c9',
    titlePosition: 'none'
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_goal'));
  chart.draw(data, options);
}

//Draws the rowing goal chart
function drawRowingChart() {

  //Check that the remaining hours are above zero
  var remainder = rowingLimit - (progress + 2500);
  if (remainder <= 0) {
    remainder = 0;
  }

  var data = google.visualization.arrayToDataTable([['Status', 'Distance'], ['Complete', progress + 2500], ['Incomplete', remainder]]);

  var fSize = 13;
  if (window.matchMedia("(min-height: 1070px)").matches) {
    fSize = 18;
  } else {
    fSize = 13;
  }

  var options = {
    fontSize: fSize,
    legend: 'none',
    pieHole: 0.4,
    colors: ['#266DD3', '#7d7d7d'],
    chartArea: { width: '100%', height: '93%' },
    backgroundColor: '#c1c5c9',
    titlePosition: 'none'
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_goal'));
  chart.draw(data, options);
}

//Draws the running goal chart
function drawRunningChart() {

  //Check that the remaining hours are above zero
  var remainder = runningLimit - (progress + 15000);
  if (remainder <= 0) {
    remainder = 0;
  }

  var data = google.visualization.arrayToDataTable([['Status', 'Distance'], ['Complete', progress + 15000], ['Incomplete', remainder]]);

  var fSize = 13;
  if (window.matchMedia("(min-height: 1070px)").matches) {
    fSize = 18;
  } else {
    fSize = 13;
  }

  var options = {
    fontSize: fSize,
    legend: 'none',
    pieHole: 0.4,
    colors: ['#00B40C', '#7d7d7d'],
    chartArea: { width: '100%', height: '93%' },
    backgroundColor: '#c1c5c9',
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
        return _this2.updateValues();
      }, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }
  }, {
    key: 'updateValues',
    value: function updateValues() {
      this.setState({
        hours: progress
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'h3',
        { className: 'total_tracker' },
        'Current Progress: ' + this.state.hours + ' Hours'
      );
    }
  }]);

  return TotalHours;
}(React.Component);

var TotalRowed = function (_React$Component2) {
  _inherits(TotalRowed, _React$Component2);

  function TotalRowed(props) {
    _classCallCheck(this, TotalRowed);

    var _this3 = _possibleConstructorReturn(this, (TotalRowed.__proto__ || Object.getPrototypeOf(TotalRowed)).call(this, props));

    _this3.state = {
      dist: progress + 2500
    };
    return _this3;
  }

  _createClass(TotalRowed, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this4 = this;

      this.timerID = setInterval(function () {
        return _this4.updateValues();
      }, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }
  }, {
    key: 'updateValues',
    value: function updateValues() {
      this.setState({
        hours: progress + 2500
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'h3',
        { className: 'total_tracker' },
        'Current Progress: ' + this.state.dist + ' Miles'
      );
    }
  }]);

  return TotalRowed;
}(React.Component);

var TotalRan = function (_React$Component3) {
  _inherits(TotalRan, _React$Component3);

  function TotalRan(props) {
    _classCallCheck(this, TotalRan);

    var _this5 = _possibleConstructorReturn(this, (TotalRan.__proto__ || Object.getPrototypeOf(TotalRan)).call(this, props));

    _this5.state = {
      dist: progress + 15000
    };
    return _this5;
  }

  _createClass(TotalRan, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this6 = this;

      this.timerID = setInterval(function () {
        return _this6.updateValues();
      }, 1000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }
  }, {
    key: 'updateValues',
    value: function updateValues() {
      this.setState({
        hours: progress + 15000
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'h3',
        { className: 'total_tracker' },
        'Current Progress: ' + this.state.dist + ' Miles'
      );
    }
  }]);

  return TotalRan;
}(React.Component);

var GoalTitle = function (_React$Component4) {
  _inherits(GoalTitle, _React$Component4);

  function GoalTitle() {
    _classCallCheck(this, GoalTitle);

    return _possibleConstructorReturn(this, (GoalTitle.__proto__ || Object.getPrototypeOf(GoalTitle)).apply(this, arguments));
  }

  _createClass(GoalTitle, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'h3',
        { className: 'headder' },
        'Community Goals - ' + goalLimit + ' Gym Hours'
      );
    }
  }]);

  return GoalTitle;
}(React.Component);

var RowingTitle = function (_React$Component5) {
  _inherits(RowingTitle, _React$Component5);

  function RowingTitle() {
    _classCallCheck(this, RowingTitle);

    return _possibleConstructorReturn(this, (RowingTitle.__proto__ || Object.getPrototypeOf(RowingTitle)).apply(this, arguments));
  }

  _createClass(RowingTitle, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'h3',
        { className: 'headder' },
        'Community Goals - ' + rowingLimit + ' Miles Rowed'
      );
    }
  }]);

  return RowingTitle;
}(React.Component);

var RunningTitle = function (_React$Component6) {
  _inherits(RunningTitle, _React$Component6);

  function RunningTitle() {
    _classCallCheck(this, RunningTitle);

    return _possibleConstructorReturn(this, (RunningTitle.__proto__ || Object.getPrototypeOf(RunningTitle)).apply(this, arguments));
  }

  _createClass(RunningTitle, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'h3',
        { className: 'headder' },
        'Community Goals - ' + runningLimit + ' Treadmill Miles'
      );
    }
  }]);

  return RunningTitle;
}(React.Component);

var ChartHolder = function (_React$Component7) {
  _inherits(ChartHolder, _React$Component7);

  function ChartHolder(props) {
    _classCallCheck(this, ChartHolder);

    var _this10 = _possibleConstructorReturn(this, (ChartHolder.__proto__ || Object.getPrototypeOf(ChartHolder)).call(this, props));

    _this10.tick = _this10.tick.bind(_this10);
    _this10.tracker = 1;
    _this10.titles = [React.createElement(GoalTitle, null), React.createElement(RowingTitle, null), React.createElement(RunningTitle, null)];
    _this10.counters = [React.createElement(TotalHours, null), React.createElement(TotalRowed, null), React.createElement(TotalRan, null)];
    _this10.limits = [goalLimit, rowingLimit, runningLimit];
    _this10.additions = [0, 2500, 15000];

    _this10.state = {
      title: _this10.titles[0],
      counter: _this10.counters[0]
    };

    return _this10;
  }

  _createClass(ChartHolder, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this11 = this;

      this.timerID = setInterval(function () {
        return _this11.tick();
      }, 10000);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.timerID);
    }

    //Swap goal at each interval

  }, {
    key: 'tick',
    value: function tick() {
      var _this12 = this;

      if (Math.floor(Math.random() * 10) > 5) {
        progress = progress + Math.floor(Math.random() * 4);
      }

      this.tracker = this.tracker + 1;

      if (this.tracker >= 4) {
        this.tracker = 1;
      }

      if (this.tracker === 1) {
        this.setState({
          title: this.titles[0],
          counter: this.counters[0]
        });
        google.charts.setOnLoadCallback(drawChart);
      } else if (this.tracker === 2) {
        this.setState({
          title: this.titles[1],
          counter: this.counters[1]
        });
        google.charts.setOnLoadCallback(drawRowingChart);
      } else if (this.tracker === 3) {
        this.setState({
          title: this.titles[2],
          counter: this.counters[2]
        });
        google.charts.setOnLoadCallback(drawRunningChart);
      }

      clearInterval(this.timerID);
      this.timerID = setInterval(function () {
        return _this12.tick();
      }, 10000);
    }
  }, {
    key: 'render',
    value: function render() {

      if (progress + this.additions[this.tracker - 1] >= this.limits[this.tracker - 1]) {

        return React.createElement(
          'div',
          { id: 'inner_cont' },
          this.state.title,
          React.createElement('img', { className: 'comp_goal', src: 'media/goal_complete.png', alt: 'Running icon', height: '293.4', width: '326.4' }),
          this.state.counter,
          React.createElement(
            'button',
            { type: 'button', onClick: this.tick },
            'Next Goal'
          )
        );
      } else {

        return React.createElement(
          'div',
          { id: 'inner_cont' },
          this.state.title,
          React.createElement('div', { id: 'chart_goal', className: 'chart' }),
          this.state.counter,
          React.createElement(
            'button',
            { type: 'button', onClick: this.tick },
            'Next Goal'
          )
        );
      }
    }
  }]);

  return ChartHolder;
}(React.Component);

ReactDOM.render(React.createElement(ChartHolder, null), document.querySelector('#chart_cont'));