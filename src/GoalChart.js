      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      /* Generate Inital Hours */
      // Monthly goal 20,000
      // Current total generated using day of month 
      // This data is generated due to unavailability of accessable api
      const goalLimit = 20000;
      let date = new Date();
      let progress = (date.getDate() * (500) + Math.floor(Math.random() * 5000));

      //Draws the 
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
          legend:'none',
          pieHole: 0.4,
          colors: ['#D33B42', '#7d7d7d'],
          chartArea: {width: '100%', height: '100%'},
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
        let remainder = (goalLimit-(progress+2500));
        if(remainder <= 0){remainder = 0}

        var data = google.visualization.arrayToDataTable([
          ['Status', 'Distance'],
          ['Complete',     (progress+2500)],
          ['Incomplete',     remainder],
        ]);

        var options = {
          legend:'none',
          pieHole: 0.4,
          colors: ['#266DD3', '#7d7d7d'],
          chartArea: {width: '100%', height: '100%'},
          backgroundColor: '#c1c5c9',
          titlePosition: 'none'
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_goal'));
        chart.draw(data, options);
      }
      
      class TotalHours extends React.Component {

          render() {
            return(<h3>{`Current Progress: ${progress} Hours`}</h3>);
          }
        }

      class GoalTitle extends React.Component {

        render() {
          return(<h3>{`Community Goals - ${goalLimit} Gym Hours`}</h3>);
        }

      }


      class ChartHolder extends React.Component {

        constructor(props) {
          super(props);

          this.tracker = 1;
          
        }

        componentDidMount() {
          this.timerID = setInterval(
              () => this.tick(),
              5000
          );
        }

        componentWillUnmount() {
          clearInterval(this.timerID);
        }

        tick() {
          if (Math.floor(Math.random() * 10) > 5) {
            progress = progress + Math.floor(Math.random() * 4);
          }

          this.tracker = this.tracker + 1;

          if (this.tracker >= 3){this.tracker = 1}

          if (this.tracker === 1){
            google.charts.setOnLoadCallback(drawChart);
          } else if (this.tracker === 2) {
            google.charts.setOnLoadCallback(drawRowingChart);
          }
    
        }

        render() {
          return(
            <div>
              <GoalTitle />
              <div id="chart_goal" className="chart"></div>
              <TotalHours />
            </div>
          );
        }
      }





ReactDOM.render(<ChartHolder />, document.querySelector('#chart_cont'));