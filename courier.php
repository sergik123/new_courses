<?php
function dostavka($room,$stage,$count_room_in_stage){
    $result='';
    $count=1;
    $cnt=0;
     $entrance=$stage*$count_room_in_stage;
     if($room<=$entrance){
        for($i=1;$i<=$stage;$i++){
                    if($room<=$i*$count_room_in_stage){
                        $result='Искомая квартира находится в первом подъезде, на '.$i.' этаже';
                         return $result;
                    }
        }
     }else{
      for($i=1; $i<$room;$i++){
        if($room>$i*($stage*$count_room_in_stage)){
           $count++;
        }else{
           $cur_stage=(($entrance*$count)-$entrance)+1;
            for($k=$cur_stage;$k<=($cur_stage+$entrance);$k+=$count_room_in_stage){
                if($room<$k){
                  $result='Искомая квартира находится в '.$count.' подъезде, на '.($cnt).' этаже';
                  return $result;
                }elseif($room==$k){
                    $result='Искомая квартира находится в '.$count.' подъезде, на '.($cnt+1).' этаже';
                    return $result;

                }else{
                    $cnt++;
                }
            }
        }
      }
     }
}

echo dostavka(56,5,4);
