package pack;

import java.util.Scanner;

public class P02_SequencesOfEqualStrings {

	public static void main(String[] args) {
		
		@SuppressWarnings("resource")
		Scanner in = new Scanner(System.in);

		String[] input = in.nextLine().split(" ");
		int inputLen = input.length;
		
		// If only one element submitted by the user, print it.
		if(inputLen == 1) System.out.println(input[0]);
		
		for (int index = 0; index < inputLen - 1; index++) {
			if(input[index].equals(input[index + 1])){
				if(index == inputLen - 2){
					System.out.print(input[index] + " " + input[index + 1]);
				}else{
					System.out.print(input[index] + " ");
				}
			}else{
				if(index == inputLen - 2){
					System.out.println(input[index] + "\n" + input[index + 1]);
				}else{
					System.out.print(input[index] + "\n");
				}
			}
		}
		
	}

}