<?php
$currYear = (int) date('Y') - 1;
$output = '';

$output .= '<table border=1>';
$output .= '<thead>';
$output .= '<th>Year</th>';
$output .= '<th>January</th><th>February</th><th>March</th><th>April</th><th>May</th><th>June</th><th>July</th><th>August</th><th>September</th><th>Octomber</th><th>November</th><th>December</th><th>Total</th>';

if (isset ( $_POST ['submitBtn'] )) {
	
	if (! empty ( $_POST ['inputYears'] )) {
		
		$y = $_POST ['inputYears'];
		$yearCount = 1;
		
		while($yearCount <= $y) {
			
			$yearExpenses = 0;
			$output .= '<tr><td>' . $currYear . '</td>';		
			
			for($month = 1; $month <= 12; $month++) {
				$randExpense = rand(0, 999);
				$output .= '<td>' . $randExpense . '</td>';
				$yearExpenses += $randExpense;
			} 
			
			$output .= '<td>' . $yearExpenses . '</td>';
			$output .= '</tr>';
			
			// last
			$currYear--;
			$yearCount++;
		}
	} else {
		$output = 'Please, provide a how many years to process.';
	}
}

echo '</table>';

?>
<!DOCTYPE html>
<html>
<head>
<title>Problem 3. Show Annual Expenses</title>
</head>
<body>

	<section>
		<form action="" method="post">
			<label for="input">Enter number of years</label> <input type="text"
				name="inputYears" /> <input type="submit" name="submitBtn"
				value="Show costs" />
		</form>
		
		<?php echo $output; ?>
	</section>

</body>
</html>