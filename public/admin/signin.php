<?php
    include("db.php");
    header('Access-Control-Allow-Origin: *');
    
    $setUser = array(
        "error" => false,
        "message" => array()
    );

    // Check if inputs are filled and lengths
    $username = urlencode(trim($_POST["username"]));
    if(strlen($username) < 4 || strlen($username) > 16) {
        $setUser["error"] = true;
        array_push($setUser["message"], "Your username must contain between 4 and 16 characters");
    }
    $password = urlencode(trim($_POST["password"]));
    if(strlen($password) < 4 || strlen($password) > 16) {
        $setUser["error"] = true;
        array_push($setUser["message"], "Your password must contain between 4 and 16 characters");
    }
    $email = trim($_POST["email"]);
    if( !filter_var($email, FILTER_VALIDATE_EMAIL )) {
        $setUser["error"] = true;
        array_push($setUser["message"], "The email introduced is not valid");
    }

    if(!$setUser["error"]) {
        // Check if username exists
        $query = "SELECT COUNT(*) as Counts FROM users WHERE username = '".$username."'";
        $result = dbQuery($query);
        if($result[0]["Counts"] == "1") {
            $setUser["error"] = true;
            array_push($setUser["message"], "Username is already in use");
        }
        else {
            $query = "INSERT INTO users(username, password, email) VALUES('".$username."', '".MD5($password)."', '".urlencode($email)."')";
            if( dbUpdate($query) ) {
                array_push($setUser["message"], "You have been registered correctly. You can now log in.");
            }
            else {
                $setUser["error"] = true;
                array_push($setUser["message"], "There has been an error while storing your user. Please try again.");
            }
        }
    }

    echo json_encode($setUser);
?>