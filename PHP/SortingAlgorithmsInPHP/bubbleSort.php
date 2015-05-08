<?php

/**
 * Bubble sort
 */

$arr = [2, 3, 1, 5, 6, 5];
$swapped = true;

while($swapped) {
	$swapped = false;
	
	for($i = 0; $i < count($arr) - 1; $i++) {
		if($arr[$i] > $arr[$i + 1]) {
			$temp = $arr[$i];
			$arr[$i] = $arr[$i + 1];
			$arr[$i + 1] = $temp;
			$swapped = true;
		}
	}
}

print_r($arr); // Prints the sorted array => 1, 2, 3, 5, 5, 6