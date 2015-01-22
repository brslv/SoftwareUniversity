package pack;

import java.util.Scanner;

/**
 *
 * @author brslv
 */
public class P03_PrintYourHometown {
    
    public static void main(String[] args) {
        
        Scanner in = new Scanner(System.in);
        
        // Prompt
        System.out.println("Please, enter your hometown: ");
        String hometown = in.nextLine();
        
        System.out.println("Your hometown is " + hometown + ". What a surprise, eh? :)");
        
    }
    
}
