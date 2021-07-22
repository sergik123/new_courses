<?php
function readMyFile($name){
    $file = fopen($name, 'r+');
    $file_array = file($name);
    fclose($file);
    return $file_array;
}

function writeMyFile($write_my_name,$read_my_file){
    $file = fopen($write_my_name, 'w+');
    $read_file=readMyFile($read_my_file);

    foreach($read_file as $key=>$value){
        if($key%2==0){
            fwrite($file,$value);
        }
    }
    fclose($file);
}
//файл input.txt - это файл с которого будут считываться строки
//файл output.txt - это файл в который будут записываться строки
writeMyFile('output.txt','input.txt');
