<?php

$sqSum = 0;

echo '<table border=1>';
echo '<thead><th>Number</th><th>Square</th></thead>';
for ($i = 0; $i <= 100; $i += 2) {
	$sq = round(sqrt($i), 2);
	$sqSum += $sq;
	echo '<tr>';
		echo '<td>' . $i . '</td>';
		echo '<td>' . $sq . '</td>';
	echo '</tr>';
}
echo '<tr><td><strong>Total:</strong></td><td>' . $sqSum . '</td></tr>';
echo '</table>';