<?php
function mostString($arr){
$first=strlen($arr[0]);

$max=0;
$str='';
foreach($arr as $value){
$val=strlen($value);
    if($first>$val){
               $max=$first;

            }else{
                $first=strlen($value);
                $str=$value;
            }
}
    return $max.', строка '.$str;
}

$arr=['dfdfdfdf','dfdfdsaaqqqqqqqqqqqqqqqqqqqqq','dfdfdfdfdfdfdf','dfsdd'];
print_r(mostString($arr));