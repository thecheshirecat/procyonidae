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
    $author = $_POST["author"];
    $title = $_POST["title"];
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
            if( isset($_POST["guest"]) ) {
                $source = $_POST["source"];
                if( strlen($source) <= 0) {
                    $error["error"] = true;
                    $error["message"] = "Source must be specified.<br>";
                }
                else {
                    $query = "INSERT INTO images(author, title, path, guest, source) values('".$_POST['author']."', '".$_POST['title']."', '".$path."', 1, '".$_POST["source"]."')";
                }
            }
            else {
                $query = "INSERT INTO images(author, title, path) values('".$_POST['author']."', '".$_POST['title']."', '".$path."')";
            }
            if( !$error["error"] ) {
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

?>
<html>
    <head>
        <title>Admin - Adding image</title>
        <link rel="stylesheet" type="text/css" href="css/styles.css" />
    </head>
    <body>
        <form action="./" method="POST" enctype="multipart/form-data">
            <input type="text" name="author" value="<?= $_POST["author"]?>" placeholder="Artist">
            <input type="text" name="title" value="<?= $_POST["title"]?>" placeholder="Title">
            <input type="file" name="image">
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
    </body>
</html>