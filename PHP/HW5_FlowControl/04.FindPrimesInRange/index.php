<?php

$output = '';

	if(isset($_POST['submitBtn'])) {
		if(!empty($_POST['start']) && !empty('end')) {
			$start = $_POST['start'];
			$end = $_POST['end'];
			
			for($i = $start; $i <= $end; $i++) {
				if(isPrime($i)) {
					$output .= '<strong>' . $i . ', </strong>';
				} else {
					$output .= $i . ', ';
				}
			}
			
		} else {
			$output = 'Please provide a start and end points.';
		}
	}
	
	function isPrime($num) {
		$isPrime = true;
		
		for($i = 2; $i <= sqrt($num); $i++) {
			if($num % $i == 0) {
				$isPrime = false;
				break;
			}
		}
		
		return $isPrime;
	}

?>
<!DOCTYPE html>
<html>
<head>
	<title>Problem 4. Find Primes In Range</title>
</head>
<body>

	<section>
		<form action="" method="post">
			<label for="start">Starting index</label>
			<input type="text" name="start" />
			
			<label for="start">End</label>
			<input type="text" name="end" />
			
			<input type="submit" name="submitBtn" value="Submit" />
		</form>
		
		<?php echo rtrim($output, ', '); ?>
	</section>

</body>
</html>