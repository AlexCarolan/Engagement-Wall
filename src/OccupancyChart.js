      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawOcc);

      function drawOcc() {
        var data = google.visualization.arrayToDataTable([
          ['Time of Day', 'Occupants'],
          [1,  1],
          [2,  20],
          [3,  25],
          [4,  15]
        ]);

        var options = {
          backgroundColor: '#e5e7ea',
          chartArea: {
            top: 12,
            right: 12,
            bottom: 40,
            left: 24,
            height: '100%',
            width: '100%'
          },
          legend: { position: 'none' },
          series: {
            0: { color: '#e2431e' }
          },
          hAxis: {title: 'Time of Day',  titleTextStyle: {color: '#000000'}, minValue: 0, maxValue: 24},
          vAxis: {minValue:0, maxValue: 24}
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_occ'));
        chart.draw(data, options);
      }