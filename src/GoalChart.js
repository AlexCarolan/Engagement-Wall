
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      /* Generate Inital Progress */
      // Monthly goal 20,000 base
      // Current total generated using day of month 
      // This data is generated due to unavailability of an accessable api
      const goalLimit = 20000;
      const rowingLimit = 50000;
      const runningLimit = 75000;
      let date = new Date();
      let progress = (date.getDate() * (500) + Math.floor(Math.random() * 5000));

      //Draws the gym hours goal chart
      function drawChart() {

        //Check that the remaining hours are above zero
        let remainder = (goalLimit-progress);
        if(remainder <= 0){remainder = 0}

        var data = google.visualization.arrayToDataTable([
          ['Status', 'Hours'],
          ['Complete',     progress],
          ['Incomplete',     remainder],
        ]);

        let fSize = 13;
        if (window.matchMedia("(min-height: 1070px)").matches) {
          fSize = 18;
        } else {
          fSize = 13;
        }

        var options = {
          fontSize: fSize,
          legend:'none',
          pieHole: 0.4,
          colors: ['#D33B42', '#7d7d7d'],
          chartArea: {width: '100%', height: '93%'},
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
        let remainder = (rowingLimit-(progress+2500));
        if(remainder <= 0){remainder = 0}

        var data = google.visualization.arrayToDataTable([
          ['Status', 'Distance'],
          ['Complete',     (progress+2500)],
          ['Incomplete',     remainder],
        ]);

        let fSize = 13;
        if (window.matchMedia("(min-height: 1070px)").matches) {
          fSize = 18;
        } else {
          fSize = 13;
        }

        var options = {
          fontSize: fSize,
          legend:'none',
          pieHole: 0.4,
          colors: ['#266DD3', '#7d7d7d'],
          chartArea: {width: '100%', height: '93%'},
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
        let remainder = (runningLimit-(progress+15000));
        if(remainder <= 0){remainder = 0}

        var data = google.visualization.arrayToDataTable([
          ['Status', 'Distance'],
          ['Complete',     (progress+15000)],
          ['Incomplete',     remainder],
        ]);

        let fSize = 13;
        if (window.matchMedia("(min-height: 1070px)").matches) {
          fSize = 18;
        } else {
          fSize = 13;
        }

        var options = {
          fontSize: fSize,
          legend:'none',
          pieHole: 0.4,
          colors: ['#00B40C', '#7d7d7d'],
          chartArea: {width: '100%', height: '93%'},
          backgroundColor: '#c1c5c9',
          titlePosition: 'none'
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_goal'));
        chart.draw(data, options);
      }
      
      class TotalHours extends React.Component {
        
          constructor(props) {
              super(props);

              this.state = {
                hours : progress
              };
          }

          componentDidMount() {
            this.timerID = setInterval(
                () => this.updateValues(),
                1000
            );
          }

          componentWillUnmount() {
            clearInterval(this.timerID);
          }

          updateValues() {
              this.setState({
                hours : progress
              });
          }

          render() {
            return(<h3 className="total_tracker">{`Current Progress: ${this.state.hours} Hours`}</h3>);
          }
      }

      class TotalRowed extends React.Component {
        
          constructor(props) {
              super(props);

              this.state = {
                dist : (progress + 2500)
              };
          }

          componentDidMount() {
            this.timerID = setInterval(
                () => this.updateValues(),
                1000
            );
          }

          componentWillUnmount() {
            clearInterval(this.timerID);
          }

          updateValues() {
              this.setState({
                hours : (progress + 2500)
              });
          }

          render() {
            return(<h3 className="total_tracker">{`Current Progress: ${this.state.dist} Miles`}</h3>);
          }
      }

      class TotalRan extends React.Component {
        
          constructor(props) {
              super(props);

              this.state = {
                dist : (progress + 15000)
              };
          }

          componentDidMount() {
            this.timerID = setInterval(
                () => this.updateValues(),
                1000
            );
          }

          componentWillUnmount() {
            clearInterval(this.timerID);
          }

          updateValues() {
              this.setState({
                hours : (progress + 15000)
              });
          }

          render() {
            return(<h3 className="total_tracker">{`Current Progress: ${this.state.dist} Miles`}</h3>);
          }
      }

      class GoalTitle extends React.Component {

        render() {
          return(<h3 className="headder">{`Community Goals - ${goalLimit} Gym Hours`}</h3>);
        }

      }

      class RowingTitle extends React.Component {

        render() {
          return(<h3 className="headder">{`Community Goals - ${rowingLimit} Miles Rowed`}</h3>);
        }

      }

      class RunningTitle extends React.Component {

        render() {
          return(<h3 className="headder">{`Community Goals - ${runningLimit} Treadmill Miles`}</h3>);
        }

      }


      class ChartHolder extends React.Component {

        constructor(props) {
          super(props);

          this.tick = this.tick.bind(this);
          this.tracker = 1;
          this.titles = [<GoalTitle />, <RowingTitle />, <RunningTitle />];
          this.counters = [<TotalHours />, <TotalRowed />, <TotalRan />];

          this.state = {
            title : this.titles[0],
            counter : this.counters[0]
          };
          
        }

        componentDidMount() {
          this.timerID = setInterval(
              () => this.tick(),
              10000
          );
        }

        componentWillUnmount() {
          clearInterval(this.timerID);
        }

        //Swap goal at each interval
        tick() {
          if (Math.floor(Math.random() * 10) > 5) {
            progress = progress + Math.floor(Math.random() * 4);
          }

          this.tracker = this.tracker + 1;

          if (this.tracker >= 4){this.tracker = 1}

          if (this.tracker === 1){
            this.setState({
              title : this.titles[0],
              counter : this.counters[0]
            })
            google.charts.setOnLoadCallback(drawChart);
          } else if (this.tracker === 2) {
            this.setState({
              title : this.titles[1],
              counter : this.counters[1]
            })
            google.charts.setOnLoadCallback(drawRowingChart);
          } else if (this.tracker === 3) {
            this.setState({
              title : this.titles[2],
              counter : this.counters[2]
            })
            google.charts.setOnLoadCallback(drawRunningChart);
          }

          clearInterval(this.timerID);
              this.timerID = setInterval(
              () => this.tick(),
              10000
          );
    
        }

        render() {
          return(
            <div id="inner_cont">
              {this.state.title}
              <div id="chart_goal" className="chart"></div>
              {this.state.counter}
              <button type="button" onClick={this.tick}>Next</button>
            </div>
          );
        }
      }



ReactDOM.render(<ChartHolder />, document.querySelector('#chart_cont'));