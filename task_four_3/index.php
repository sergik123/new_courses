<?php
function fizz_buzz($name,$file){

    $res=explode(' ',$name);
    if(count($res)>=3){
        fwrite($file,"\r\n".'исходная строка '.$name."\r\n");
        $fizz=$res[0];
        $buzz=$res[1];
        array_map(function ($n)use($fizz,$buzz,$file){
                if($n%$fizz==0 && $n%$buzz==0){
                    fwrite($file,' FB ');
                }elseif($n%$fizz==0){
                    fwrite($file,' F ');
                }elseif($n%$buzz==0){
                    fwrite($file,' B ');
                }else{
                    fwrite($file,' '.$n.' ');
                }
        },range(1,$res[2]));
        fwrite($file,"\r\n");
    }
}
function readAllFile($name){
    $fp = fopen($name, 'r+');
    $file_array = file($name);
    fclose($fp);

    return $file_array;
}

$arr=readAllFile('input.txt');
$file = fopen('output.txt', 'w+');

foreach($arr as $value){
    fizz_buzz($value,$file);
}
fclose($file);




