package pack;

import java.util.Scanner;

public class P04_DebuggingSubstring {

	public static void main(String[] args) {

		@SuppressWarnings("resource")
        Scanner input = new Scanner(System.in);
        String text = input.nextLine();
        int jump = Integer.parseInt(input.nextLine());

        // char search = 'р'; // We don't need this variable
        boolean hasMatch = false;

        for (int i = 0; i < text.length(); i++) {

        	// Edited the conditional statement. Changed the 'search' variable with 'p'.
            if (text.charAt(i) == 'p') {
                hasMatch = true;
                
                // Edited the endIndex value.
                int endIndex = i + jump + 1;
                
                if (endIndex > text.length()) {
                    endIndex = text.length();
                }

                String matchedString = text.substring(i, endIndex);
                System.out.println(matchedString);
                i += jump;
            }
        }

        if (!hasMatch) {
            System.out.println("no");
        }
    }
	
}
