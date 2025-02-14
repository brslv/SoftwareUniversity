package pack;

import java.util.ArrayList;
import java.util.Scanner;

public class P03_BePositive {

	public static void main(String[] args) {
		
		@SuppressWarnings("resource")
		Scanner scn = new Scanner(System.in);
		
		int countSequences = scn.nextInt();
		
		// Added this line to consume the '\n'.
		scn.nextLine();
		
		for (int i = 0; i < countSequences; i++) {
			String[] input = scn.nextLine().trim().split(" ");
			ArrayList<Integer> numbers = new ArrayList<>();
			
			for (int j = 0; j < input.length; j++) {
				if (!input[j].equals("") ) {
					// Changed the element from the 'input' array that has been parsed
					// from input[i] to input[j]
					int num = Integer.parseInt(input[j]);
					numbers.add(num);	
				}							
			}
			
			boolean found = false;
			
			for (int j = 0; j < numbers.size(); j++) {				
				int currentNum = numbers.get(j);
				
				// Changed the conditional statement => zero INCLUSIVE.
				if (currentNum >= 0) {
					// Changed the condition in which the we print empty space or a new line.
					System.out.printf("%d%s", currentNum, j != numbers.size() - 1 ? " " : "\n");
					found = true;
				} else {
					if(j != numbers.size() - 1){
						currentNum += numbers.get(j + 1);
						// Incrementing the main counter.
						j++;	
					}else{
						continue;
					}
					
					// Changed the conditional statement => zero INCLUSIVE.
					if (currentNum >= 0) {
						// Changed the condition in which the we print empty space or a new line.
						System.out.printf("%d%s", currentNum, j != numbers.size() - 1 ? " " : "\n");
						found = true;
					}					
					
				}
			}
			
			if (!found) {
				System.out.println("(empty)");
			} 			
		}

	}

}
