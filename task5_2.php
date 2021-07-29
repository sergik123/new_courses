<?php
define('CONSTANTA',100);
function sum(){
    $sum=0;
    for($i=0; $i<=CONSTANTA;$i++){
        $cnt=0;
        for($j=1;$j<=$i;$j++){
            if($i % $j==0){

                $cnt++;

            }
        }
        if($cnt == 2){

            print $i.' ';
            $sum+=$i;

        }
    }
    print 'сумма = '.$sum;
}
sum();