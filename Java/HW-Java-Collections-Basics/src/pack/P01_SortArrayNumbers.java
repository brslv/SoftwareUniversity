package pack;

import java.util.Arrays;
import java.util.Scanner;

public class P01_SortArrayNumbers {

	public static void main(String[] args) {
		
		@SuppressWarnings("resource")
		Scanner in = new Scanner(System.in);
		
		int itterations = in.nextInt();
		in.nextLine();
		int[] array = new int[itterations];
		
		// Filling up the array
		for (int i = 0; i < itterations; i++) {
			array[i] = in.nextInt();
		}
		
		// Sorting the array
		Arrays.sort(array);
		
		// Printing the array
		for (int i = 0; i < array.length; i++) {
			System.out.println(array[i]);
		}
		
	}

}