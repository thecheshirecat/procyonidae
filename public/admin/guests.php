<?php
    header('Access-Control-Allow-Origin: *');  
    $directory = 'guests';

    $foldersNames = array();
    $imageInfo = array();

    function getDirNames($dir){
        $files = preg_grep('/^([^.])/', scandir($dir, 1));

        foreach($files as $key => $value) {
            $path = realpath($dir.DIRECTORY_SEPARATOR.$value);
            if(is_dir($path)) {
                $foldersNames[] = $value;
                $folder = $value;
                $author = file_get_contents($path."/author.txt");
                $title = file_get_contents($path."/title.txt");
                $image = "";
                $supported_format = array('gif','jpg','jpeg','png');
                $images = scandir($path);
                foreach($images as $key => $value) {
                    $ext = strtolower(pathinfo($path."/".$value, PATHINFO_EXTENSION));
                    if (in_array($ext, $supported_format)) {
                        $image = $value;
                    } else {
                        continue;
                    }
                }
                $imageInfo[] = array(
                    "author" => $author,
                    "folder" => $folder,
                    "image" => $image,
                    "title" => $title
                );
            }
        }

        echo json_encode($imageInfo);
    }
    getDirNames($directory)
?>