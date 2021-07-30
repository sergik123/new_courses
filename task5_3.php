<?php
define('MAX_NUMBER',100);
function resheto($n){
    if($n==0 || $n==1) return false;
    for($i=2; $i*$i<=$n; $i++){
        if($n%$i==0) return false;
    }
    return true;
}
$sum=0;
for ($j=0; $j<MAX_NUMBER;$j++){
    if(resheto($j)){
        echo $j.' ';
        $sum+=$j;
    }
}
echo 'сумма = '.$sum;
