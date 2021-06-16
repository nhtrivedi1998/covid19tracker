<?php
include "covid_19_tracker_logic.php";
?>


<!doctype html>
<html lang="en">

<head>
    <!-- jquery  -->
    <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
    <script src="daily_cases.js"></script>
    <script src="total_cases.js"></script>
    

    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">

    <!-- Include Font -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@700&display=swap" rel="stylesheet">

    <!-- include css file -->
    <link rel="stylesheet" href="style.css">

    <!-- insert arrow -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- chart js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.3.2/chart.min.js"></script>

    <!-- Daily confirmed and Total confirmed -->
    <script>
    $(function() {
        $('#total_Confirmed').click(function() {
            $('#cumulative').collapse('show');
        })

        $('#daily_Confirmed').click(function() {
            $('#daily').collapse('show');
        })
    })
    </script>

<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.5.0/mdb.min.js"
></script>

    <title>Covid-19 Tracker</title>
</head>

<body>
    

   

    <div class="container-fluid" id="home">
        <div class="container-fluid text-center text-white  py-3" style="background-color:black">
            <h1>Covid-19 Tracker</h1>
            <h4>Get accurate data on this Website</h4>
        </div>

        <div class="container ">
            <div class="row row-cols-2 row-cols-lg-4 g-2 g-lg-3 text-center  my-4 ">
                <div class="col ">
                    <div class=" text-secondary py-4 clickable shadow" id="confirmed">
                        <h5>Confirmed</h5>

                        <div style="justify-content:center,align-items:center">
                            <i class="fa fa-arrow-up"></i>
                            <small class="text-secondary  counter"
                                data-target="<?php echo $data['cases_time_series'][$days_count]['dailyconfirmed'];?>">
                                0
                            </small>
                        </div>
                        <h2 class="counter" data-target="<?php  echo $data['statewise'][0]['confirmed'];?>">0</h2>
                    </div>
                </div>

                <div class="col ">
                    <div class=" text-info py-4 clickable shadow" id="active">
                        <h5>Active</h5>
                        <small>&nbsp;</small>
                        <h2 class="counter" data-target="<?php  echo $data['statewise'][0]['active'];?>">0</h2>
                    </div>
                </div>

                <div class="col ">
                    <div class="text-success py-4 clickable shadow" id="recovered">
                        <h5>Recovered</h5>
                        <div style="justify-content:center,align-items:center">
                            <i class="fa fa-arrow-up"></i>
                            <small class="text-success counter"
                                data-target="<?php echo $data['cases_time_series'][$days_count]['dailyrecovered'];?>">
                                0
                            </small>
                        </div>
                        <h2 class="counter" data-target="<?php  echo $data['statewise'][0]['recovered'];?>">0</h2>
                    </div>
                </div>

                <div class="col ">
                    <div class="col text-danger py-4 clickable shadow" id="deaths">
                        <h5>Deceased</h5>
                        <div style="justify-content:center,align-items:center">
                            <i class="fa fa-arrow-up"></i>
                            <small class="text-danger counter"
                                data-target="<?php echo $data['cases_time_series'][$days_count]['dailydeceased'];?>">
                                0
                            </small>
                        </div>
                        <h2 class="counter" data-target="<?php  echo $data['statewise'][0]['deaths'];?>">0</h2>
                    </div>
                </div>

            </div>
        </div>
        <div class="container ">
            <div class="row row-cols-1 row-cols-lg-2 g-5 g-lg-5 text-center">
                <div class=" col  ">

                    <div class="container py-4 text-center" style="color:black">
                        <h3>Statewise Covid-19 Data Table</h3>
                    </div>
                    <table class="table table-striped table-hover ">
                        <thead class="bg-dark text-light">
                            <tr class="border border-light">
                                <th scope="col" class="w-25">States</th>
                                <th scope="col">Confirmed</th>
                                <th scope="col">Active</th>
                                <th scope="col">Recovered</th>
                                <th scope="col">Deceased</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php    
                    $i=1;                    
                    while($i<$states_count){                                      
                    ?>
                            <tr style="cursor:pointer">
                                <th class="border border-light"><?php $states= $data['statewise'][$i]['state'];
                            echo $states; 
                        ?>
                                </th>
                                <td class="border border-light"><?php $confirmed= $data['statewise'][$i]['confirmed'];
                             echo $confirmed;
                             
                        ?>

                                </td>
                                <td class="border border-light"><?php $active= $data['statewise'][$i]['active'];
                          echo $active;
                        ?>
                                </td>
                                <td class="border border-light"><?php $recovered= $data['statewise'][$i]['recovered'];;
                          echo $recovered;
                        ?>
                                </td>
                                <td class="border border-light"><?php $deaths= $data['statewise'][$i]['deaths'];;
                          echo  $deaths;
                        ?>
                                </td>

                                <?php  $i++;
                        }                     
                  ?>
                            </tr>

                        </tbody>

                    </table>
                </div>

                <div class="col">
                    <div class=" container d-flex justify-content-between pt-4  px-1" style="height:110px">
                        <div>
                            <h2 style="color:black">India</h2>
                            <p style="color:#928080d1">Last Updated At:<?php $current_time_stamp=$data['tested'][$last_entry]['updatetimestamp'];
                                echo ' '.substr($current_time_stamp,1,15);
                                 ?>
                            </p>
                        </div>
                        <div>
                            <h5 class="mb-0 mt-1" style="color: #152681"> Tested :</h5>
                            <h5 class="mb-0" style="color:#99a4e4"><?php $total_testing=$data['tested'][$last_entry]['totalsamplestested'];
                                echo $total_testing;
                                 ?>
                            </h5>
                            <p style="color:#99a4e4">As of <?php echo  ' '.substr($current_time_stamp,1,10); ?> </p>
                        </div>
                    </div>
                    <div class="container text-danger my-4 rounded " style="background-color:#ffa9a96b">
                        <img class="d-inline" src="shield-check.svg" alt="Bootstrap" width="25" height="25">
                        <h5 class="px-2 d-inline"> <?php $vaccine_doses=$data['tested'][$last_entry]['totaldosesadministered']; 
                       echo $vaccine_doses;
                       ?> Vaccine Doses Administered
                        </h5>

                    </div>
                    <div id="container">
                        <h3 class="text-center my-3 " style="color: #940606;">Spread Trends</h3>
                        <div class=" d-flex container justify-content-center my-4">
                            <a id="total_Confirmed" class="btn  w-25 mx-2 p-2 shadow"
                                style="background-color: #ff6e0891" href="#chart" role="button">
                                Cumulative
                            </a>
                            <a id="daily_Confirmed" class="btn  w-25 mx-2 p-2 shadow"
                                style="background-color: #ffc10791" href="#chart1" role="button">
                                Daily
                            </a>
                        </div>
                        <div id="cumulative" class=" container collapse show px-0" data-bs-parent="#container">

                            <canvas id="totalconfirmed" class="my-4 "></canvas>
                            <canvas id="totalactive" class="my-4"></canvas>
                            <canvas id="totalrecovered" class="my-4"></canvas>
                            <canvas id="totaldeceased" class="my-4"></canvas>
                            <canvas id="totaldosesadministered" class="my-4"></canvas>


                        </div>


                        <div id="daily" class=" container collapse px-0 " data-bs-parent="#container">

                            <canvas id="dailyconfirmed" class="my-4"></canvas>
                            <canvas id="dailyactive" class="my-4"></canvas>
                            <canvas id="dailyrecovered" class="my-4"></canvas>
                            <canvas id="dailydeceased" class="my-4"></canvas>
                        </div>


                    </div>



                </div>
            </div>
        </div>
    </div>

    
    <!-- Java script for counters -->
    <script src="counter.js"></script>


    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous">
    </script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>
    -->
</body>

</html>