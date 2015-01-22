package pack;

import java.util.Scanner;

public class P01_RectangleArea {
    
    public static void main(String[] args) {
        
        Scanner in = new Scanner(System.in);
        
        int aSide = in.nextInt();
        int bSide = in.nextInt();
        int area = aSide * bSide;
        
        System.out.println("Result: " + area);
    }
    
}
