<?php
function readAllFile($name){
    $fp = fopen($name, 'r+');
    $file_array = file($name);
    fclose($fp);

    return $file_array;
}

function averageNumber($ar){

    $result2=explode(';',$ar);
    $result=explode(' ', $result2[0]);
    $result3=explode(' ', $result2[1]);
    $sum=0;
    $str='';
    foreach ($result as $value) {
        $sum+=$value;
        $str.=$value.'+';
    }

    $average=(int)($sum/count($result));
    $av_num=(int)($sum%count($result));

    if($average==$result3[0] && $av_num==$result3[1]){
       $str.='/'.count($result).' = '.$average.', в остатке '.$av_num.' true';
    }else{
        $str.='/'.count($result).' = '.$result3[0].', в остатке '.$result3[1].' false';
    }
   return $str;
}

$read=readAllFile('input.txt');
foreach ($read as $value){
    $res=averageNumber($value);
    var_dump($res);
}



