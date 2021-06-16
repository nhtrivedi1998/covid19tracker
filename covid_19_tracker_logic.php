<?php

$jsondata=  file_get_contents("https://api.covid19india.org/data.json");
$data=json_decode($jsondata,true);
$states_count=count($data['statewise']);

$days_count =  count($data['cases_time_series'])-1;
$days_count_previous=  $days_count-1;

$cases_time_series=count($data['tested']);
$last_entry=$cases_time_series-1; 

// echo "<pre>";
// echo print_r($data);
// echo  "</pre>";


?>