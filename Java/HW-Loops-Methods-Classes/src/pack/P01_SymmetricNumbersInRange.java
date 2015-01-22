package pack;

import java.util.Scanner;

public class P01_SymmetricNumbersInRange {
    
    public static void main(String[] args) {
    
        Scanner in = new Scanner(System.in);
        
        int start = in.nextInt();
        int end = in.nextInt();
        
        for (int currentNum = start; currentNum <= end; currentNum++) {
            int currentNumLen = Integer.toString(currentNum).length();
            
            int firstDigit = currentNum / (int)Math.pow(10, currentNumLen - 1);
            int lastDigit = currentNum % 10;
            
            if(firstDigit == lastDigit){
                System.out.println(currentNum);
            }
        }
        
    }
    
}
