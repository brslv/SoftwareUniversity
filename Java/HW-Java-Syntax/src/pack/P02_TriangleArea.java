package pack;

import java.util.Scanner;

public class P02_TriangleArea {
    
    public static void main(String[] args) {
        
        Scanner in = new Scanner(System.in);

        double ax = in.nextDouble();
        double ay = in.nextDouble();
        double bx = in.nextDouble();
        double by = in.nextDouble();
        double cx = in.nextDouble();
        double cy = in.nextDouble();
        
        double area = Math.abs((ax * (by - cy) + bx * (cy - ay) + cx * (ay - by)) / 2);
        
        if(area > 0){
            System.out.println((int)area);
        }else{
            System.out.println(0);
        }
    }
    
}
