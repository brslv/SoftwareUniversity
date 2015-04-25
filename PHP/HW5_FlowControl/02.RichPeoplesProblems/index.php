<?php

	$colors = ['yellow', 'blue', 'red', 'bloody red', 'poo-like'];
	$output = [];
	
	if(isset($_POST['submitBtn']) && !empty($_POST['cars'])) {
		$cars = explode(', ', filter_input(INPUT_POST, 'cars'));
		
		foreach($cars as $car) {
			$randColor = rand(0, count($colors) - 1);
			$randCount = rand(1, 10);

			$output[] = [
					'car' => $car, 
					'color' => $colors[$randColor], 
					'count' => $randCount
			];
		}
	}

?>

<!DOCTYPE html>
<html>
<head>
	<title>Problem 2. Rich People's problems</title>
</head>
<body>
	
	<section>
		<form action="" method="POST">
			<input type="text" name="cars" placeholder="Enter some cars" />
			<input type="submit" name="submitBtn" value="Submit cars" />	
		</form>
		
		<div class="output">
			<?php if(!empty($output)) : ?>
			
				<table border="1">
					<thead>
						<th>Car</th>
						<th>Color</th>
						<th>Count</th>
					</thead>
					<?php foreach($output as $car) : ?>
						<tr>
							<td>
								<?php echo $car['car']; ?>
							</td>
							<td>
								<?php echo $car['color']; ?>
							</td>
							<td>
								<?php echo $car['count']; ?>
							</td>
						</tr>
					<?php endforeach;?>
				</table>
				
			<?php elseif(isset($_POST['submitBtn']) && empty($output)) : ?>
			
				<p>Please, provide some cars to process.</p>
			
			<?php endif;?>
		</div>
	</section>

</body>
</html>