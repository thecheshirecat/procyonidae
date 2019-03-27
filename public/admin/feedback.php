<?php
    header('Access-Control-Allow-Origin: *');
    
    $bugSend = array(
        "recieved" => "OK"
    );

    $mailMessage = '
    <html>
        <head></head>
        <body>
            <p>'.$_POST["username"].' has sent some feedback!</p>
            <br>
            <p>'.$_POST["feedback"].'</p>
        </body>
    </html>';
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8';

    if(mail ( "bughunter@raccoonjunkyard.com" , "Bug / Feedback" , $mailMessage, $headers )) {
        $bugSend = array(
            "recieved" => "OK"
        );
    }
    else {
        $bugSend = array(
            "recieved" => "KO"
        );
    }
    echo json_encode($bugSend);
?>