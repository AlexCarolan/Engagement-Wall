      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Status', 'Hours'],
          ['Complete',     45],
          ['Incomplete',     5],
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