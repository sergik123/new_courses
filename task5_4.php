<?php
define('MAX_NUMBER',10000);
function sum(){
    $sum=0;
    for($i=0; $i<=MAX_NUMBER;$i++){
        $cnt=0;
        for($j=1;$j<=$i;$j++){
            if($i % $j==0){

                $cnt++;

            }
        }
        if($cnt == 2){

          //  print $i.' ';
            $sum+=$i;

        }
    }
    print 'сумма = '.$sum."\n";
}
$mtime = microtime();        //Считываем текущее время
$mtime = explode(" ",$mtime);    //Разделяем секунды и миллисекунды
// Составляем одно число из секунд и миллисекунд
// и записываем стартовое время в переменную
$tstart = $mtime[1] + $mtime[0];
sum();

// Делаем все то же самое, чтобы получить текущее время
$mtime = microtime();
$mtime = explode(" ",$mtime);
$mtime = $mtime[1] + $mtime[0];
$totaltime = ($mtime - $tstart);//Вычисляем разницу
// Выводим не экран
printf ("Моя функция сгенерирована за %f секунд !", $totaltime);
echo "\n";

function resheto($n){
    if($n==0 || $n==1) return false;
    for($i=2; $i*$i<=$n; $i++){
        if($n%$i==0) return false;
    }
    return true;
}

$mtime = microtime();        //Считываем текущее время
$mtime = explode(" ",$mtime);    //Разделяем секунды и миллисекунды
// Составляем одно число из секунд и миллисекунд
// и записываем стартовое время в переменную
$tstart = $mtime[1] + $mtime[0];
$sum=0;
for ($j=0; $j<MAX_NUMBER;$j++){
    if(resheto($j)){
       // echo $j.' ';
        $sum+=$j;
    }
}
echo 'сумма = '.$sum."\n";

// Делаем все то же самое, чтобы получить текущее время
$mtime = microtime();
$mtime = explode(" ",$mtime);
$mtime = $mtime[1] + $mtime[0];
$totaltime = ($mtime - $tstart);//Вычисляем разницу
// Выводим не экран
printf ("Решето Эратосфена сгенерирована за %f секунд !", $totaltime);
