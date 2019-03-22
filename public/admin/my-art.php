<?php
    include("db.php");
    header('Access-Control-Allow-Origin: *');
    $query = "SELECT * FROM images WHERE guest = ".$_GET["guest"];
    $result = dbQuery($query);

    echo json_encode($result);
?>