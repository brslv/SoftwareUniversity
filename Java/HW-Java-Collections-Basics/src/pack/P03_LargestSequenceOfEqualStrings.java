package pack;

import java.util.Scanner;

public class P03_LargestSequenceOfEqualStrings {

	public static void main(String[] args) {
		
		@SuppressWarnings("resource")
		Scanner in = new Scanner(System.in);
		
		String[] input = in.nextLine().split(" ");
		
		int counter = 0;
		int maxLen = 0;
		int finalIndex = 0;
		
		if(input.length == 1) System.out.println(input[0]);
		
		for (int i = 0; i < input.length - 1; i++) {
			String currentElem = input[i];
			String nextElem = input[i + 1];
			
			if(currentElem.equals(nextElem)){
				counter++;
			}else{
				counter = 0;
			}
			
			if(counter > maxLen){
				maxLen = counter;
				finalIndex = i + 1;
			}
			
		}
		
		if(maxLen == 0){
			if(input.length > 1) System.out.println(input[0]);
		}else{	
			for (int i = finalIndex - maxLen; i <= finalIndex; i++) {
				System.out.println(input[i]);
			}
		}
		

	}
	
}
