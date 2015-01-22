package pack;

import java.util.Scanner;

public class P06_FormattingNumbers {
    
    public static void main(String[] args) {
       
        Scanner in = new Scanner(System.in);
        
        int fNum = in.nextInt();
        double sNum = in.nextDouble();
        double tNum = in.nextDouble();
        
        String fNumBinaryStr = Integer.toBinaryString(fNum);
        int fNumBinary = Integer.parseInt(fNumBinaryStr);
        
        System.out.printf("|%-10X|%010d|%10.2f|%-10.3f|", fNum, fNumBinary, sNum, tNum);
        
    }
    
}
