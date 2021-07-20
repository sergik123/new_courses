<?php
$one=fopen("php://stdin","r");
$fizz=fgets($one);
$buzz=fgets($one);
$next=fgets($one);

for ($i=1; $i <=$next; $i++) { 
	if($i<=$next){
		if($i%$fizz==0 && $i%$buzz==0){
			echo ' FB ';
		}elseif($i%$fizz==0){
			echo ' F ';
		}elseif($i%$buzz==0){
			echo ' B ';
		}else{
			echo ' '.$i.' ';
		}
	}
}