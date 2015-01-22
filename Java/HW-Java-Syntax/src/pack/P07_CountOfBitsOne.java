package pack;

import java.util.Scanner;

public class P07_CountOfBitsOne {
    
    public static void main(String[] args) {
        
        Scanner in = new Scanner(System.in);
        int num = in.nextInt();
        int numLen = Integer.toBinaryString(num).length();
        System.out.println("num = " + Integer.toBinaryString(num));
        
        int bitOneCounter = 0;
        
        for (int index = 0; index < numLen; index++) {
            int bit = (num & (1 << index)) >> index;
            bitOneCounter += bit == 1 ? 1 : 0;
        }
        
        System.out.println(bitOneCounter);
    }
    
}
