<?php
function brilliant($number){
    for($i=0; $i<=$number; $i++){
        if($i%2==1){
        echo str_repeat('   ',($number-$i)/2);
            echo str_repeat(' * ',$i);
            echo "\n";
        }

    }
    for($j=$number-1; $j>0; $j--){
         if($j%2==1){
           echo str_repeat('   ',($number-$j)/2);
           echo str_repeat(' * ',$j);
           echo "\n";
         }
    }
}
brilliant(3);