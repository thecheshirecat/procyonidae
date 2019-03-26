<?php
    include("db.php");
    header('Access-Control-Allow-Origin: *');
    $query = "SELECT * FROM images WHERE id = ".$_GET["id"];
    $result = dbQuery($query);

    echo json_encode($result);
?>