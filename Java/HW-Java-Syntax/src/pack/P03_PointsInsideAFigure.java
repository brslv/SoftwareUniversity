package pack;

import java.util.Scanner;

public class P03_PointsInsideAFigure {
    
    public static void main(String[] args) {
        
        Scanner in = new Scanner(System.in);
        double x = in.nextDouble();
        double y = in.nextDouble();
        boolean isInside = false;
        
        // Is the point in the square
        if(x >= 12.5  && x <= 17.5 && y >= 8.5 && y <= 13.5){
            isInside = true;
        }
        
        // Is the point in the top rect
        if(x >= 12.5 && x <= 22.5 && y >= 6 && y <= 8.5){
            isInside = true;
        }
        
        // Is the point in the right
        if(x >= 20 && x <= 22.5 && y >= 8.5 && y <= 13.5){
            isInside = true;
        }
        
        System.out.println(isInside ? "Inside" : "Outside");
    }
    
}
