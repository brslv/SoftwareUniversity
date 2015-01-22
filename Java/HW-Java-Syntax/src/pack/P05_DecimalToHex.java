package pack;

import java.util.Scanner;

public class P05_DecimalToHex {

    public static void main(String[] args) {
        
        Scanner in = new Scanner(System.in);
        int num = in.nextInt();
        String numHex = Integer.toHexString(num);
        
        System.out.println("The number " + num + " in hexadecimal is: " + numHex.toUpperCase());
        
    }
    
}
