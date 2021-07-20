<?php
$one=fopen("php://stdin","r");
$fizz=fgets($one);
$buzz=fgets($one);
$next=fgets($one);

for ($i=1; $i <=$next; $i++) {
    if($i<=$next){
        echo ($i%$fizz==0 && $i%$buzz==0) ? ' FB ' :
            (($i%$fizz==0) ? ' F ' :
                (($i%$buzz==0) ? ' B ' : ' '.$i.' '));
    }
}