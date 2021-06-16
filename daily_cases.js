$(document).ready(function () {
    // Get json data from url
    $.getJSON("https://api.covid19india.org/data.json", function (data) {
        // var states = [];
        var daily_confirmed_chart = [];
        var daily_active_chart = [];
        var daily_active_cases = [];
        var daily_recovered_chart = [];
        var daily_deceased_chart = [];
        var date = [];
        // var confirmed = [];
        // var recovered = [];
        // var deaths = [];

        // var total_confirmed;
        // var total_active;
        // var total_recovered;
        // var total_deaths;

        // total_confirmed = data.statewise[0].confirmed;
        // total_active = data.statewise[0].active;
        // total_recovered = data.statewise[0].recovered;
        // total_deaths = data.statewise[0].deaths;




        // console.log(data.statewise);
        $.each(data.cases_time_series, function (id, obj) {
            // states.push(obj.state);
            daily_confirmed_chart.push(obj.dailyconfirmed);
            daily_recovered_chart.push(obj.dailyrecovered);
            daily_deceased_chart.push(obj.dailydeceased);
            daily_active_cases = obj.dailyconfirmed - obj.dailyrecovered - obj.dailydeceased;           
            daily_active_chart.push(daily_active_cases);
            date.push(obj.date);
            // recovered.push(obj.recovered);
            // deaths.push(obj.deaths);

        });
        // states.shift();
        // confirmed.shift();
        // recovered.shift();
        // deaths.shift();

        // Daily confirmed chart initialisaton

        var dailyconfirmed = document.getElementById("dailyconfirmed").getContext('2d');
        var chart = new Chart(dailyconfirmed, {
            type: "line",
            data: {
                labels: date,
                datasets: [
                    {
                        label: " Confirmed",
                        data: daily_confirmed_chart,
                        backgroundColor: '#f1f6fa',
                        borderColor: '#6c757d',
                        borderWidth: 3,
                        fill: true,
                        pointRadius: 0,
                        pointHoverRadius: 8,
                        hoverBorderWidth: 2,
                    }
                ]
            },
            options: {
                responsive: true,
                animation: false,

                interaction: {
                    intersect: false,
                    axis: 'x'
                },

                plugins: {
                    legend: {
                        display: false,
                    },
                    title: {
                        display: true,
                        text: 'Daily Confirmed Cases',
                        padding:18,
                        font: {
                            size: '25',
                            family: "'Baloo Bhai 2', cursive",
                           
                        }
                    },

                    tooltip: {
                        enabled: true,
                        usePointStyle: true,
                        padding: 10,
                        caretSize: 10,
                        caretPadding: 30,
                        displayColors: true,
                    }
                },
                scales: {
                    xaxis: {
                        display: false,
                        
                    },
                    yaxis: {
                        display: true,
                        grid:{
                            borderColor:'black',
                            borderWidth:2,
                            lineWidth:1,
                            tickLength:10,
                        },
                        ticks: {

                            color: 'black',
                            font: {
                                family: "'Baloo Bhai 2', cursive",
                                size: 15,
                            }
                        }
                    }
                }
            }
        });

        // Daily Recovered chart initialisaton
        var dailyrecovered = document.getElementById("dailyrecovered").getContext('2d');
        var chart = new Chart(dailyrecovered, {
            type: "line",
            data: {
                labels: date,
                datasets: [
                    {
                        label: " Recovered",
                        data: daily_recovered_chart,
                        backgroundColor: '#a8f6b8',
                        borderColor: '#188205',
                        fill: true,
                        borderWidth: 3,
                        pointRadius: 0,
                        pointHoverRadius: 8,
                        hoverBorderWidth: 2,
                    }
                ]
            },
            options: {
                responsive: true,
                animation: false,

                interaction: {
                    intersect: false,
                    axis: 'x'
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    title: {
                        display: true,
                        text: 'Daily Recovered Cases',
                        color:'#188205',
                        padding:18,
                        font: {
                            size: '25',
                            family: "'Baloo Bhai 2', cursive"
                        }
                    },

                    tooltip: {
                        enabled: true,
                        usePointStyle: true,
                        padding: 10,
                        caretSize: 10,
                        caretPadding: 30,
                        displayColors: true,
                    }
                },

                scales: {
                    xaxis: {
                        display: false,

                    },
                    yaxis: {
                        display: true,
                        grid:{
                            borderColor:'black',
                            borderWidth:2,
                            lineWidth:1,
                            tickLength:10,
                        },
                        ticks: {

                            color: '#188205',
                            font: {
                                family: "'Baloo Bhai 2', cursive",
                                size: 15,
                            }
                        }
                    }
                }
            }
        });

        // Daily Deaceased chart initialisaton
        var dailydeceased = document.getElementById("dailydeceased").getContext('2d');
        var chart = new Chart(dailydeceased, {
            type: "line",
            data: {
                labels: date,
                datasets: [
                    {
                        label: "Deceased",
                        data: daily_deceased_chart,
                        backgroundColor: '#fec8ce',
                        borderColor: '#dc3545',
                        fill: true,
                        borderWidth: 3,
                        pointRadius: 0,
                        pointHoverRadius: 8,
                        hoverBorderWidth: 2,
                    }
                ]
            },
            options: {
                responsive: true,
                animation: false,

                interaction: {
                    intersect: false,
                    axis: 'x'
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    title: {
                        display: true,
                        text: 'Total Deceased Cases',
                        color:'#dc3545',
                        padding:18,
                        font: {
                            size: '25',
                            family: "'Baloo Bhai 2', cursive"
                        }
                    },

                    tooltip: {
                        enabled: true,
                        usePointStyle: true,
                        padding: 10,
                        caretSize: 10,
                        caretPadding: 30,
                        displayColors: true,
                    }
                },

                scales: {
                    xaxis: {
                        display: false,

                    },
                    yaxis: {
                        display: true,
                        grid:{
                            borderColor:'black',
                            borderWidth:2,
                            lineWidth:1,
                            tickLength:10,
                        },
                        ticks: {

                            color: '#dc3545',
                            font: {
                                family: "'Baloo Bhai 2', cursive",
                                size: 15,
                            }
                        }
                    }
                }
            }
        });

        // Daily Active chart initialisaton
        var dailyactive = document.getElementById("dailyactive").getContext('2d');
        var chart = new Chart(dailyactive, {
            type: "line",
            data: {
                labels: date,
                datasets: [

                    {
                        label: " Active ",
                        data: daily_active_chart,
                        backgroundColor: '#d3f2f8',
                        borderColor: '#0dcaf0',
                        fill: true,
                        borderWidth: 3,
                        pointRadius: 0,
                        pointHoverRadius: 8,
                        hoverBorderWidth: 2,
                    }
                ]
            },
            options: {
                responsive: true,
                animation: false,

                interaction: {
                    intersect: false,
                    axis: 'x'
                },
                animations: false,
                plugins: {
                    legend: {
                        display: false,
                    },
                    title: {
                        display: true,
                        text: 'Total active Cases',
                        color:'#083ac7',
                        padding:18,
                        font: {
                            size: '25',
                            family: "'Baloo Bhai 2', cursive",
                            
                        }
                    },

                    tooltip: {
                        enabled: true,
                        usePointStyle: true,
                        padding: 10,
                        caretSize: 10,
                        caretPadding: 30,
                        displayColors: true,
                    }
                },

                scales: {
                    xaxis: {
                        display: false,

                    },
                    yaxis: {
                        display: true,
                        grid:{
                            borderColor:'black',
                            borderWidth:2,
                            lineWidth:1,                            
                            tickLength:10,
                        },
                        ticks: {

                            color: '#0dcaf0',
                            font: {
                                family: "'Baloo Bhai 2', cursive",
                                size: 15,
                            }
                        }
                    }
                }
            }
        });
        
      

    });
});