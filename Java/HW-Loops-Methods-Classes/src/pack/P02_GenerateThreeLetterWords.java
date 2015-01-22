package pack;

import java.util.Scanner;

public class P02_GenerateThreeLetterWords {

    public static void main(String[] args) {
        
        Scanner in = new Scanner(System.in);
        
        char[] chars = in.nextLine().toCharArray();
        
        for (int i = 0; i < chars.length; i++) {
            for (int j = 0; j < chars.length; j++) {
                for (int k = 0; k < chars.length; k++) {
                    System.out.println("" + (char)chars[i] + (char)chars[j] + (char)chars[k]);
                }
            }
        }
        
    }
    
}
