<?php
if(!isset($_GET['number'])){
    echo json_encode(["error" => "NUMBER_REQUIRED"]);
    exit;
}

$number = $_GET['number'];
$url = "https://shadowscriptz.xyz/public_apis/simdetailsapi.php?number=$number";

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

echo file_get_contents($url);
