<?php
function fizz_buzz($name,$file){

    $res=explode(' ',$name);
    if(count($res)>=3){
        fwrite($file,"\r\n".'исходная строка '.$name."\r\n");
        $i=0;
        array_map(function ($n)use($i,$file){
            $fizz=$n[0];
            $buzz=$n[1];
            $next=$n[2];

         while($i<$next){
                $i++;
                if($i%$fizz==0 && $i%$buzz==0){
                    fwrite($file,' FB ');
                }elseif($i%$fizz==0){
                    fwrite($file,' F ');
                }elseif($i%$buzz==0){
                    fwrite($file,' B ');
                }else{
                    fwrite($file,' '.$i.' ');
                }
        }
        },array($res));
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




