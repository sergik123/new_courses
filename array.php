<?php
function mostNumber($arr){
$first=$arr[0];
$max=0;
foreach($arr as $value){
    if($first>$value){
               $max=$first;
            }else{
                $first=$value;
            }
}
    return $max;
}
$arr=[1,5,3,76,6,9,12,56,13];
print_r(mostNumber($arr));
