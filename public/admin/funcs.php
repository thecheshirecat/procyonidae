<?php
function changeFileName($file) {
    $tmpnombre = explode(".", $file);
    $name = round(microtime(true)).".".end($tmpnombre);
    
    return $name;
}
?>