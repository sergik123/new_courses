<?php
function repeat($s){
    $split=str_split($s);
    $res=[];
    foreach($split as $value){
        if (in_array($value, $split)){
            $A[$value]=1;
        }
    }
        foreach($split as $value2){
            if (array_key_exists($value2, $A)) {
                $res[$value2]+=1;
            }
        }
        return $res;
}
$s="dfsfsfsfgfdg ewerwerw sdfsf";
var_dump(repeat($s));