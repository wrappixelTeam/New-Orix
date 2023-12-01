// Activity

var options = {
    series: [{
    name: 'Customers',
    data: [20, 30, 41, 47, 22, 43, 14, 30, 17, 47, 22, 18]
  }, {
    name: 'Orders',
    data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27]
  }],
    chart: {
    type: 'bar',
    height: 267,
    stacked: true,
    toolbar: {
      show: false
    },
    zoom: {
      enabled: true
    }
  },

  colors: ["#763EBD","#95CFD5"],
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'top',
        offsetX: -10,
        offsetY: 0,
        show: false,
      }
    }
  }],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: "27%",
      dataLabels: {
        enabled: false,
        total: {
          enabled: false,
          style: {
            fontSize: '13px',
            fontWeight: 900
          }
        }
      }
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ['jan', ' Feb', ' Mar', ' Apr',
      ' May', ' June','July', ' Aug', ' Sep', ' Oct',
      ' Nov', ' Dec'
    ],
  },
  legend: {
    position: 'right',
    offsetY: 40,
    show:false,
  },
  fill: {
    opacity: 1
  }
  };

  var chart = new ApexCharts(document.querySelector("#activity"), options);
  chart.render();

  //   sales chart

var options = {
    series: [44, 55 ,20],
    labels: ['Direct', 'Affiliate', 'Sponsored'],
    chart: {
    type: 'donut',
    height: 177
  },
  colors: ["#763EBD","#95CFD5","#FD7E50"],
  dataLabels: {
    enabled: false,
  },

  legend: {
    show: false,
  },
  plotOptions: {
    pie: {
      expandOnClick: true,
      donut: {
        size: "73",
        labels: {
          show: true,
          name: {
            show: true,
            offsetY: 10,
          },
          value: {
            show: false,
          },
          total: {
            show: true,
            fontSize: "16px",
            color: "#382E3A",
            label: "$500k",
            fontWeight: "700",
          },
        },
      },
    },
  },
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200,
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#sales"), options);
  chart.render();

    // -----------------------------------------------------------------------
  // world map
  // -----------------------------------------------------------------------
  jQuery("#visitfromworld").vectorMap({
    map: "world_mill_en",
    backgroundColor: "transparent",
    borderColor: "#000",
    borderOpacity: 0,
    borderWidth: 0,
    zoomOnScroll: false,
    color: "#93d5ed",
    regionStyle: {
      initial: {
        fill: "#93d5ed",
        "stroke-width": 1,
        stroke: "#fff",
      },
    },
    markerStyle: {
      initial: {
        r: 5,
        fill: "#93d5ed",
        "fill-opacity": 1,
        stroke: "#93d5ed",
        "stroke-width": 1,
        "stroke-opacity": 1,
      },
    },
    enableZoom: true,
    hoverColor: "#79e580",
    markers: [
      {
        latLng: [21.0, 78.0],
        name: "India : 9347",
        style: { fill: "#2961ff" },
      },
      {
        latLng: [-33.0, 151.0],
        name: "Australia : 250",
        style: { fill: "#ff821c" },
      },
      {
        latLng: [36.77, -119.41],
        name: "USA : 250",
        style: { fill: "#40c4ff" },
      },
      {
        latLng: [55.37, -3.41],
        name: "UK   : 250",
        style: { fill: "#398bf7" },
      },
      {
        latLng: [25.2, 55.27],
        name: "UAE : 250",
        style: { fill: "#6fc826" },
      },
    ],
    hoverOpacity: null,
    normalizeFunction: "linear",
    scaleColors: ["#93d5ed", "#93d5ee"],
    selectedColor: "#c9dfaf",
    selectedRegions: [],
    showTooltip: true,
    onRegionClick: function (element, code, region) {
      var message =
        'You clicked "' +
        region +
        '" which has the code: ' +
        code.toUpperCase();
      alert(message);
    },
  });