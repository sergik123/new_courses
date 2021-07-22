<?php
function readAllFile($name){
    $fp = fopen($name, 'r+');
    $file_array = file($name);
    fclose($fp);

    return $file_array;
}

function countReadFile($name){
    $result=array();
    foreach($name as $key=>$value){
       $result[$key]=strlen($value);
    }
    return $result;
}
function averageFile($name){
    $result=array();
    $sum=0;
    foreach($name as $value){
        $sum+=$value;
    }
    $average=(int)($sum/count($name));
    foreach($name as $key=>$value2){
        if($value2>$average){
            $result[]=$key;
        }
    }
    $file = fopen('output.txt', 'w+');
    $read_file=readAllFile('readtext.txt');
    foreach($read_file as $key=>$value){
        foreach($result as $value2){
            if($key==$value2){
               fwrite($file,$value);
            }
        }
    }
    fclose($file);
}
$name=readAllFile('readtext.txt');
$count=countReadFile($name);
$average=averageFile($count);
