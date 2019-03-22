<?php
    header('Access-Control-Allow-Origin: *');
    
    $imageSend = array(
        "recieved" => "OK"
    );

    $mailMessage = 'Someone shared an image for the website!
    <br>
    Image Artist: '.$_POST["artist"].'
    <br>
    Image Title: '.$_POST["title"].'
    <br>
    Image URL: '.$_POST["image"].'
    <br>
    Image Source: '.$_POST["source"];

    $headers = 'Content-type: text/html; charset=utf-8' . "\r\n";

    if(mail ( "sergi.codina@movetia.com" , "Shared art" , $mailMessage, $headers )) {
        $imageSend = array(
            "recieved" => "OK"
        );
    }
    else {
        $imageSend = array(
            "recieved" => "KO"
        );
    }
?>