package pack;

import java.util.Scanner;

public class P03_LargestSequenceOfEqualStrings {

	public static void main(String[] args) {
		
		@SuppressWarnings("resource")
		Scanner in = new Scanner(System.in);
		
		String[] input = in.nextLine().split(" ");
		
		int finalIndex = 0;
		int counter = 1;
		int maxLen = 0;
		
		for (int index = 0; index < input.length - 1; index++) {
			String currentElem = input[index];
			String nextElem = input[index + 1];
			
			if(currentElem.equals(nextElem)){
				counter++;
			}else{
				if(counter > maxLen){
					maxLen = counter;
					finalIndex = index;
					counter = 1;
				}else{
					counter = 1;
				}
			}	
		}
		
		for (int i = finalIndex - maxLen + 1; i <= finalIndex; i++) {
			System.out.println(input[i]);
		}
		
	}

}
