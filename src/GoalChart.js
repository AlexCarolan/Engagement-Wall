      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      /* Generate Inital Hours */
      // Monthly goal 20,000
      // Current total generated using day of month 
      // This data is generated due to unavailability of accessable api
      const goalLimit = 20000;
      let date = new Date();
      let progress = (date.getDate() * (500) + Math.floor(Math.random() * 5000));

      function drawChart() {

        //Check that the remaining hours are above zero
        let remainder = (goalLimit-progress);
        if(remainder <= 0){remainder = 0}

        var data = google.visualization.arrayToDataTable([
          ['Status', 'Hours'],
          ['Complete',     progress],
          ['Incomplete',     remainder],
        ]);

        var options = {
          title: 'Community Goal - Total Hours',
          legend:'none',
          pieHole: 0.4,
          colors: ['#19B3A6', '#7d7d7d'],
          chartArea: {width: '100%', height: '100%'},
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
              hours: progress
            }
          }

          componentDidMount() {
            this.timerID = setInterval(
                () => this.tick(),
                2000
            );
          }

          componentWillUnmount() {
            clearInterval(this.timerID);
          }

          tick() {
            if (Math.floor(Math.random() * 10) > 5) {
              progress = progress + Math.floor(Math.random() * 4);
            }

            this.setState({
              hours: progress
            });
          }

          render() {
            return(<h3>{`Current Progress: ${this.state.hours} Hours`}</h3>);
          }
        }

      class GoalTitle extends React.Component {

        render() {
          return(<h3>{`Community Goals - ${goalLimit} Gym Hours`}</h3>);
        }

      }


ReactDOM.render(<GoalTitle />, document.querySelector('#goal_title'));
ReactDOM.render(<TotalHours />, document.querySelector('#total_hours'));