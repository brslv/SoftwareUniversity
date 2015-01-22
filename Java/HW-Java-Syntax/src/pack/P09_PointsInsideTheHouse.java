package pack;

import java.util.Scanner;

public class P09_PointsInsideTheHouse {
    
    public static void main(String[] args) {
        
        Scanner in = new Scanner(System.in);
        double xDimension = in.nextDouble();
        double yDimension = in.nextDouble();
        
        // Check IF a point is in the triangle
        // Parameters: the dimensions of the triangle and the given dimensions of the point to be checked
        boolean isInsideTheRoof = isInsideTriangle(12.5, 8.5, 22.5, 8.5, 17.5, 3.5, xDimension, yDimension);
        // Check IF a point is in the square
        // Parameters: the dimensions of the square and the given dimensions of the point to be checked
        boolean isInsideTheSquare = isInsideSquare(12.5, 17.5, 8.5, 13.5, xDimension, yDimension);
        // Check IF a point is in the right rectangle
        // Parameters: the dimensions of the rectangle and the given dimensions of the point to be checked
        boolean isInsideTheRect = isInsideRect(20.0, 22.5, 8.5, 13.5, xDimension, yDimension);
        
        if(isInsideTheRoof || isInsideTheSquare || isInsideTheRect){
            System.out.println("Inside");
        }else{
            System.out.println("Outside");
        }
        
    }
    
    public static double areaOfTriangle(double x1, double y1, double x2, double y2, double x3, double y3){
        
        return Math.abs((x1*(y2-y3) + x2*(y3-y1)+ x3*(y1-y2))/2.0);
        
    }
    
    public static boolean isInsideTriangle(double x1, double y1, double x2, double y2, double x3, double y3, double xDimension, double yDimension){
        
        // Calc the area of the triangle
        double a = areaOfTriangle(x1, y1, x2, y2, x3, y3);
        double a1 = areaOfTriangle(xDimension, yDimension, x2, y2, x3, y3);
        double a2 = areaOfTriangle(x1, y1, xDimension, yDimension, x3, y3);
        double a3 = areaOfTriangle(x1, y1, x2, y2, xDimension, yDimension);
        
        return a == a1 + a2 + a3;
        
    }
    
    public static boolean isInsideSquare(double x1, double x2, double y1, double y2, double xDimension, double yDimension){
        
        boolean isInsideSquare = false;
        
        if(xDimension >= x1 && xDimension <= x2 && yDimension >= y1 && yDimension <= y2) isInsideSquare = true;
        
        return isInsideSquare;
    }
    
    public static boolean isInsideRect(double x1, double x2, double y1, double y2, double xDimension, double yDimension){
        
        boolean isInsideRect = false;
        
        if(xDimension >= x1 && xDimension <= x2 && yDimension >= y1 && yDimension <= y2) isInsideRect = true;
        
        return isInsideRect;
    }
}
