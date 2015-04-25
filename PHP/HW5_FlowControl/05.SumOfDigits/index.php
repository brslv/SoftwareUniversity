<?php

$output = '<table border=1>';

	if(isset($_POST['submitBtn'])) {
		if(!empty($_POST['digits'])) {
			$digits = explode(', ', $_POST['digits']);
			
			foreach ($digits as $d) {
				$sum = getSum($d);
				$output .= '<tr><td>' . $d . '</td><td>' . $sum . '</td></tr>';		
			}
			
		}
	}
	
	
	/**
	 * Returns the result from the sum operation
	 * 
	 * @param string $d
	 * @return boolean
	 */
	function getSum($d) {
		if(!is_numeric($d)) return 'I cannot sum that';
		$sum = array_sum(preg_split('//', $d));
		return $sum;
	}

?>
<!DOCTYPE html>
<html>
<head>
	<title>Problem 5. Sum Of Digits</title>
</head>
<body>

	<section>
		<form action="" method="post">
			<label for"Input string">Input string</label>
			<input name="digits" />
			<input type="submit" value="Submit" name="submitBtn" />
		</form>
		
		<?php echo $output; ?>
	</section>

</body>
</html>