<!DOCTYPE html>
<?php
include("funcs.php");
include("db.php");
$form = array(
    "submit" => false,
    "message" => ""
);
$error = array(
    "error" => false,
    "message" => ""
);
if( isset($_POST["author"]) ) {
    if( is_uploaded_file($_FILES["image"]["tmp_name"]) ) {
        // Change image name
        $image = $_FILES["image"];
        $nombre = changeFileName($image["name"]);
        // Absolute path to store image
        $ruta = "./images/";
        $path = $ruta.$nombre;

        if( move_uploaded_file($image["tmp_name"], $path) ) {
            $query = "INSERT INTO images(author, title, path) values('".$_POST['author']."', '".$_POST['title']."', '".$path."')";
            if( dbUpdate($query) ) {
                $form["submit"] = true;
                $form["message"] = "Image ".$image["name"]." has been stored.";
            }
            else {
                $error["error"] = true;
                $error["message"] = "DB error.";
            }
        }
        else {
            $error["error"] = true;
            $error["message"] = $image["name"]." could not be copied to our server.";
        }
    }
    else {
        $error["submit"] = true;
        $error["message"] = "No image has been uploaded.";
    }
}

?>
<html>
    <head>
        <title>Admin - Adding image</title>
        <link rel="stylesheet" type="text/css" href="css/styles.css" />
    </head>
    <body>
        <form action="./" method="POST" enctype="multipart/form-data">
            <input type="text" name="author" placeholder="Artist">
            <input type="text" name="title" placeholder="Title">
            <input type="file" name="image">
            <button type="submit">Add image</button>
            <?php
                if($form["submit"]) {
                    echo "<div class='success'>".$form["message"]."</div>";
                }
                if($error["error"]) {
                    echo "<div class='error'>".$error["message"]."</div>";
                }
            ?>
        </form>
    </body>
</html>