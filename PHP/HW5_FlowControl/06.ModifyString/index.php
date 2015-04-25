<?php
$output = null;

	if(isset($_POST['submitBtn'])) {
		if(!empty($_POST['input']) && !empty($_POST['option'])) {
			$in = $_POST['input'];
			$opt = $_POST['option'];
			
			if($opt == 'palindrome') {
				$output = isPalindrome($in) ? $in . ' is palindrome.' : $in . ' is not a palindrome.';
			}
			else if($opt == 'reverseString') {
				$output = strrev($in);
			}
			else if($opt == 'split') {
				$output = implode(' ', preg_split('//', $in));
			}
			else if($opt == 'hash') {
				$output = crypt($in);
			}
			else if($opt == 'shuffle') {
				$output = str_shuffle($in);
			}
		}
	}
	
	function isPalindrome($in) {
		$inLen = strlen($in);
		$mid = (int) $inLen / 2;
		$firstHalf = strtolower(substr($in, 0, $mid));
		$secondHalf = ($inLen % 2 == 0) ? strtolower(substr($in, $mid)) : strtolower(substr($in, $mid + 1));
		
		return ($firstHalf == strrev($secondHalf));
	}

?>

<!DOCTYPE html>
<html>
<head>
	<title>Problem 06. Modify String</title>
</head>
<body>

	<section>
		<form action="" method="post">
			<input name="input"><br />
			
			<input type="radio" name="option" value="palindrome" /> Check palindrome.<br />
			<input type="radio" name="option" value="reverseString" /> Reverse string.<br />
			<input type="radio" name="option" value="split" /> Split.<br />
			<input type="radio" name="option" value="hash" /> Hash string.<br />
			<input type="radio" name="option" value="shuffle" /> Shuffle string.<br />
			
			<input type="submit" name="submitBtn" /><br /><br />
		</form>
		
		<?php echo $output; ?>
	</section>

</body>
</html>