<?php

function maxArray($ar1,$ar2){
    $res=0;
    $result_array=[];
    for($i=0;$i<count($ar1);$i++){
        $res=abs(strlen($ar1[$i])-strlen($ar2[$i]));
        $result_array[]=$res;
    }
    return $result_array;
}

function maxNumber($res_arr,$ar1,$ar2){
   $res=max($res_arr);
   for($i=0;$i<count($res_arr);$i++){
       if($res==$res_arr[$i]){
           return 'строка из массива 1 '.$ar1[$i].PHP_EOL.'строка из массива 2 '.$ar2[$i].PHP_EOL.'максимальная разница ='.$res;
       }
   }
}
$ar1=['fgfgfdgdg','fddfg','erwrwrwwrwerwr','ewrwrdsfd'];
$ar2=['gfdgdgd','aqqrewtyuyu','hggjg','ijhfdfgeerdfgfjgh'];
$result=maxArray($ar1,$ar2);
echo maxNumber($result,$ar1,$ar2);
