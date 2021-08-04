<?php
//функция поиска максимвльной длины элементов массива
function maxArray($ar1, $ar2)
{
    try {
        if (!empty($ar1) && !empty($ar2)) {
            if (count($ar1) == count($ar2)) {
                $res = 0;
                $result_array = [];
                for ($i = 0; $i < count($ar1); $i++) {
                    if (!is_string($ar1[$i]) || !is_string(($ar2[$i]))) {
                        echo 'один из элементов массива не являются строкой';
                        die();
                    }
                    $res = abs(strlen($ar1[$i]) - strlen($ar2[$i]));
                    $result_array[] = $res;
                }
                return $result_array;
            } else {
                echo 'массивы имеют разную длину';
                die();
            }

        } else {
            echo 'один или оба массива пустый';
            die();
        }

    } catch (Exception $ex) {
        echo 'Выброшено исключение: ', $ex->getMessage(), "\n";
        die();
    }


}

//функция поиска максимального элемента результирующего массива
// и вывод строк с маскимальной разницей длины
function maxNumber($res_arr, $ar1, $ar2)
{
    $res = max($res_arr);
    for ($i = 0; $i < count($res_arr); $i++) {
        if ($res == $res_arr[$i]) {
            return 'строка из массива 1 ' . $ar1[$i] . PHP_EOL . 'строка из массива 2 ' . $ar2[$i] . PHP_EOL . 'максимальная разница =' . $res;
        }
    }
}

//наши массивы, которые мы будем сравнивать
$ar1 = ['fgfgfdgdg', 'dfdf', 'erwrwrwwrwerwr', 'ewrwrdsfd'];
$ar2 = ['gfdgdgd', 'aqqrewtyuyu', 'hggjg', 'ijhfdfgeerdfgfjgh'];
$result = maxArray($ar1, $ar2);
//вывод результата
echo maxNumber($result, $ar1, $ar2);
