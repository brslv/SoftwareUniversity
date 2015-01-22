package pack;

import java.util.Scanner;

public class P08_CountOfEqualBitPairs {

    public static void main(String[] args) {
        
        Scanner in = new Scanner(System.in);
        int num = in.nextInt();
        int numLen = Integer.toBinaryString(num).length();
        String binaryNum = Integer.toBinaryString(num);
        
        int equalBitPairs = 0;
        
        for (int index = 0; index < numLen - 1; index++) {
            int fBit = (num & (1 << index)) >> index;
            int sBit = (num & (1 << index + 1)) >> index + 1;
            
            if(fBit == sBit) equalBitPairs++;
        }
        
        System.out.println(equalBitPairs);
    }
    
}
