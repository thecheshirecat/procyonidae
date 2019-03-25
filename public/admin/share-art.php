<?php
    // header('Access-Control-Allow-Origin: *');
    
    $imageSend = array(
        "recieved" => "OK"
    );

    $mailMessage = '
    <html>
        <head></head>
        <body>
            <p>Someone shared an image for the website!</p>
            <br>
            <p>Image Artist: <b>'.$_POST["artist"].'</b></p>
            <p>Image Title: <b>'.$_POST["title"].'</b></p>
            <p>Image: <img src="'.$_POST["image"].'" alt="'.$_POST["title"].'" /></p>
            <p>Image Source: '.$_POST["source"].'</p>
        </body>
    </html>';
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8';

    if(mail ( "shareart@raccoonjunkyard.com" , "New art shared" , $mailMessage, $headers )) {
        $imageSend = array(
            "recieved" => "OK"
        );
    }
    else {
        $imageSend = array(
            "recieved" => "KO"
        );
    }
    echo json_encode($imageSend);
?>