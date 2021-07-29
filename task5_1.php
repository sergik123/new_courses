<?php
define("CONSTANT", 5);
for ($i=1; $i<=100; $i++){
    if($i%CONSTANT==0){
        echo $i.' ';
    }
}
