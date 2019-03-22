<?php
    include("db.php");
    header('Access-Control-Allow-Origin: *');
    $query = "SELECT * FROM images WHERE guest = ".$_GET["guest"]." ORDER BY id DESC";
    $result = dbQuery($query);

    echo json_encode($result);
?>