<?php

/**
 * Insertion sort
 */

$arr = [2, 3, 1, 5, 6, 5];

for($i = 1; $i < count($arr); $i++) {
	for($j = $i - 1; $j >= 0; $j--) {
		if($arr[$i] < $arr[$j]) {
			$temp = $arr[$i];
			$arr[$i] = $arr[$j];
			$arr[$j] = $temp;
			$i--;
		} else {
			break;
		}
	}
}

print_r($arr); // prints the sorted array => 1, 2, 3, 5, 5, 6