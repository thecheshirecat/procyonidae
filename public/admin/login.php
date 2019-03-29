<?php
    include("db.php");
    //header('Access-Control-Allow-Origin: *');
    
    $setUser = array(
        "error" => false,
        "message" => array()
    );
    $username = urlencode(trim($_POST["username"]));
    $password = urldecode(trim($_POST["password"]));

    $query = "SELECT * FROM users WHERE username = '".$username."' and password = '".MD5($password)."'";
    $result = dbQuery($query);

    echo json_encode($result);
?>