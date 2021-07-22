<?php
function fizz_buzz($name,$file){

    $res=explode(' ',$name);
    if(count($res)>=3){
        fwrite($file,"\r\n".'исходная строка '.$name."\r\n");
        $fizz=$res[0];
            $buzz=$res[1];
            $next=$res[2];

            for ($i=1; $i <=$next; $i++) {
            	if($i<=$next){
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

            }
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


