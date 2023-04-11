<?php
//Configure vlucas package
require_once('../vendor/autoload.php');

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable("../");
$dotenv->load();

// Fetch data from Edanam
$data = file_get_contents("https://api.edamam.com/api/food-database/v2/parser?app_id=" . $_ENV["APP_ID"] . "&app_key=" . $_ENV["APP_KEY"] . "&ingr=" . $_GET["food"] . "&nutrition-type=cooking&category=generic-foods&category=generic-meals");
echo $data;
