<?php

/**
 * Selection sort
 */

$arr = [2, 3, 1, 5, 6, 5];

for($i = 0; $i < count($arr); $i++) {
	$min = $i;

	for($j = $i; $j < count($arr); $j++) {
		if($arr[$j] < $arr[$min]) {
			$min = $j;
		}
	}

	$temp = $arr[$i];
	$arr[$i] = $arr[$min];
	$arr[$min] = $temp;
}

print_r($arr); // Prints the sorted array => 1, 2, 3, 5, 5, 6