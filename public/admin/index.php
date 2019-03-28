<?php
session_start();
include("funcs.php");
include("db.php");

/*
    TODO: upload thumbnail
*/

$form = array(
    "submit" => false,
    "message" => ""
);
$error = array(
    "error" => false,
    "message" => ""
);
if( isset($_POST["author"]) ) {
    $author = $_POST["author"];
    $title = $_POST["title"];
    $guest = false;
    if( strlen($author) <= 0 || strlen($title) <= 0) {
        $error["error"] = true;
        $error["message"] = "Author and title must be specified.<br>";
    }
    if( is_uploaded_file($_FILES["image"]["tmp_name"]) ) {
        // Change image name
        $image = $_FILES["image"];
        $nombre = changeFileName($image["name"]);
        // Path to store image
        $ruta = "images/";
        $path = $ruta.$nombre;

        if( move_uploaded_file($image["tmp_name"], $path) ) {
            if( is_uploaded_file($_FILES["thumbnail"]["tmp_name"]) ) {
                $thumbnail = $_FILES["thumbnail"];
                $thumb = changeFileName($thumbnail["name"]);
                $rutaThumbnails = "thumbnails/";
                $pathThumbnails = $rutaThumbnails.$thumb;
                if( !move_uploaded_file($thumbnail["tmp_name"], $pathThumbnails) ) {
                    $error["error"] = true;
                    $error["message"] = "The thumbnail ".$thumbnail["name"]." couldn't be copied to our server.";
                }
            }
            else {
                $pathThumbnails = '';
            }
            if( isset($_POST["guest"]) ) {
                $source = $_POST["source"];
                $guest = true;
                if( strlen($source) <= 0) {
                    $error["error"] = true;
                    $error["message"] = "Source must be specified.<br>";
                }
            }
            if( !$error["error"] ) {
                if( !$guest ) {
                    $query = "INSERT INTO images(author, title, path, thumbnail) values('".$_POST['author']."', '".$_POST['title']."', '".$path."', '".$pathThumbnails."')";
                }
                else {
                    $query = "INSERT INTO images(author, title, path, thumbnail, guest, source) values('".$_POST['author']."', '".$_POST['title']."', '".$path."', '".$pathThumbnails."', 1, '".$_POST["source"]."')";
                }
                if( dbUpdate($query) ) {
                    $form["submit"] = true;
                    $form["message"] = "Image ".$image["name"]." has been stored.";
                }
                else {
                    $error["error"] = true;
                    $error["message"] .= "DB error.";
                }
            }
        }
        else {
            $error["error"] = true;
            $error["message"] .= $image["name"]." could not be copied to our server.";
        }
    }
    else {
        $error["error"] = true;
        $error["message"] .= "No image has been uploaded.";
    }
}
if(!isset($_SESSION["admin"])) {
    $_SESSION["admin"] = false;
}
if( isset($_POST["admin"]) ) {
    if( $_POST["admin"] == "admin" && $_POST["password"] == "Temporal2019") {
        $_SESSION["admin"] = true;
    }
    else {
        $error["error"] = true;
        $error["message"] = "Usuario incorrecto";
    }
}
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Admin - Adding image</title>
        <link rel="stylesheet" type="text/css" href="css/styles.css" />
    </head>
    <body>
        <?php
        if( $_SESSION["admin"] ) {
        ?>
        <form action="./" method="POST" enctype="multipart/form-data">
            <div class="logo">
                <a href="/">
                    Raccoon<br/>
                    <span>Junkyard</span>
                </a>
            </div>
            <input type="text" name="author" value="<?= $_POST["author"]?>" placeholder="Artist">
            <input type="text" name="title" value="<?= $_POST["title"]?>" placeholder="Title">
            <p>Main image:</p>
            <input type="file" name="image">
            <p>Thumbnail:</p>
            <input type="file" name="thumbnail">
            <div class="guest">
                <p>Guest?</p>
                <input type="checkbox" name="guest" value="1" <?php
                    if( isset($_POST["guest"]) )
                        echo "checked";
                ?> />
            </div>
            <input type="text" name="source" value="<?= $_POST["source"]?>" placeholder="Source">
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
        <?php
        }
        else {
            ?>
        <form method="post">
            <input type="text" name="admin" placeholder="Admin" />
            <input type="password" name="password" placeholder="Password" />
            <button type="submit">Log in</button>
            <?php
                if($error["error"]) {
                    echo "<div class='error'>".$error["message"]."</div>";
                }
            ?>
        </form>
            <?php
        }
        ?>
    </body>
</html>