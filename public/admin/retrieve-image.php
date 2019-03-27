<?php
    header('Access-Control-Allow-Origin: *');
    include("db.php");
    
    $query = "SELECT * FROM images WHERE id = ".$_GET["id"];
    $result = dbQuery($query);

    echo json_encode($result);
?>