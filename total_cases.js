$(document).ready(function () {
    // Get json data from url
    $.getJSON("https://api.covid19india.org/data.json", function (data) {
        // var states = [];
        var total_confirmed_chart = [];
        var total_active_chart = [];
        var total_active_cases = [];
        var total_recovered_chart = [];
        var total_deceased_chart = [];
        var total_vaccine_administered_chart=[];
        var date = [];
        var tested_date=[];
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
            total_confirmed_chart.push(obj.totalconfirmed);
            total_recovered_chart.push(obj.totalrecovered);
            total_deceased_chart.push(obj.totaldeceased);
            total_active_cases = obj.totalconfirmed - obj.totalrecovered - obj.totaldeceased;
            // console.log( total_active_cases);
            total_active_chart.push(total_active_cases);
           
            date.push(obj.date);
            // recovered.push(obj.recovered);
            // deaths.push(obj.deaths);
        });

        $.each(data.tested, function (id, obj) {
           if(id>310){
               total_vaccine_administered_chart.push(obj.totaldosesadministered);
               tested_date.push(obj.updatetimestamp);
           }
           
          
        });
        // console.log(total_vaccine_administered_chart)  ;
        // states.shift();
        // confirmed.shift();
        // recovered.shift();
        // deaths.shift();

        // Total confirmed chart initialisaton

        var totalconfirmed = document.getElementById("totalconfirmed").getContext('2d');
        var chart = new Chart(totalconfirmed, {
            type: "line",
            data: {
                labels: date,
                datasets: [
                    {
                        label: "Confirmed",
                        data: total_confirmed_chart,
                        backgroundColor: '#f1f6fa',
                        borderColor: '#6c757d',
                        borderWidth: 5.5,
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
                        text: 'Total Confirmed Cases',
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

        // Total Recovered chart initialisaton
        var totalrecovered = document.getElementById("totalrecovered").getContext('2d');
        var chart = new Chart(totalrecovered, {
            type: "line",
            data: {
                labels: date,
                datasets: [
                    {
                        label: "Recovered",
                        data: total_recovered_chart,
                        backgroundColor: '#a8f6b8',
                        borderColor: '#188205',
                        fill: true,
                        borderWidth: 5.5,
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
                        text: 'Total Recovered Cases',
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

        // Total Deaceased chart initialisaton
        var totaldeceased = document.getElementById("totaldeceased").getContext('2d');
        var chart = new Chart(totaldeceased, {
            type: "line",
            data: {
                labels: date,
                datasets: [
                    {
                        label: "Deceased",
                        data: total_deceased_chart,
                        backgroundColor: '#fec8ce',
                        borderColor: '#dc3545',
                        fill: true,
                        borderWidth: 5.5,
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
        // Total Active chart initialisaton
        var totalactive = document.getElementById("totalactive").getContext('2d');
        var chart = new Chart(totalactive, {
            type: "line",
            data: {
                labels: date,
                datasets: [

                    {
                        label: "Active",
                        data: total_active_chart,
                        backgroundColor: '#d3f2f8',
                        borderColor: '#0dcaf0',
                        fill: true,
                        borderWidth: 5.5,
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
        // Total Vaccine Doses Administered
        var totaldosesadministered = document.getElementById("totaldosesadministered").getContext('2d');
        var chart = new Chart(totaldosesadministered, {
            type: "line",
            data: {
                labels: tested_date,
                datasets: [

                    {
                        label: "Vaccine Doses Administered",
                        data:total_vaccine_administered_chart ,
                        backgroundColor: '#d6c2f9',
                        borderColor: '#753aa2',
                        fill: true,
                        borderWidth: 5.5,
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
                        text: 'Total Vaccine Doses Administered',
                        color:'#753aa2',
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

                            color: '#753aa2',
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