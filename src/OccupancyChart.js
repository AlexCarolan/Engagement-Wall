      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawOcc);

      function getInitalValues()
      {
          let currentDate = new Date()
          let currentHour = currentDate.getHour();
      }

      function drawOcc() {
        var data = google.visualization.arrayToDataTable([
          ['Time of Day', 'Occupants'],
          [[8, 30, 45], 5],
          [[9, 0, 0], 10],
          [[10, 0, 0, 0], 12],
          [[10, 45, 0, 0], 13],
          [[11, 0, 0, 0], 15],
          [[12, 15, 45, 0], 20],
          [[13, 0, 0, 0], 22],
          [[14, 30, 0, 0], 25],
          [[15, 12, 0, 0], 30],
          [[16, 45, 0], 32],
          [[16, 59, 0], 42]
        ]);

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