      //Get the inital values
      let values = getInitalValues()

      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawOcc);

      //Generate data up to the current time on inital page load
      function getInitalValues()
      {
          let currentDate = new Date()
          let currentHour = currentDate.getHours();
          let occTime = [['Time of Day', 'Occupants']];

          for(i = 0; i <= currentHour; i++) {
            occTime.push([[i,0,0], generateOcc(i)]);
          }

          return occTime;
      }

      //Returns a realistic occupancy value based in the input time
      function generateOcc(time) {
        if (time <= 4 ){
          return 0;
        } else if (time <= 6) {
          return Math.floor(Math.random() * (3 - 0)) + 0;
        } else if (time <= 9) {
          return Math.floor(Math.random() * (40 - 10)) + 10;
        } else if (time <= 12) {
          return Math.floor(Math.random() * (75 - 40 + 1)) + 40;
        } else if (time <= 16) {
          return Math.floor(Math.random() * (45 - 35 + 1)) + 35;
        } else if (time <= 20) {
          return Math.floor(Math.random() * (80 - 45 + 1)) + 45;
        } else if (time <= 22) {
          return Math.floor(Math.random() * (27 - 15 + 1)) + 15;
        }

        else return 0;

      }

      function drawOcc() {
        var data = google.visualization.arrayToDataTable(values);

        var options = {
          backgroundColor: '#e5e7ea',
          chartArea: {
            top: 12,
            right: 14,
            bottom: 40,
            left: 24,
            height: '100%',
            width: '100%'
          },
          legend: { position: 'none' },
          series: {
            0: { color: '#e2431e' }
          },
          hAxis: {title: 'Time of Day',  titleTextStyle: {color: '#000000'}, minValue: [0, 0, 0], maxValue: [23, 0, 0]},
          vAxis: {minValue: 0, maxValue: 100}
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_occ'));
        chart.draw(data, options);
      }