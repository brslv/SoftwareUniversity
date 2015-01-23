package pack;

import java.util.Scanner;

public class P05_AngleUnitConverter {
    
    public static void main(String[] args) {
        
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        in.nextLine(); // to consume the left 'new line' from nextInt()
        double[] convertedUnits = new double[n];
        
        for (int i = 0; i < n; i++) {
            System.out.println("Enter angle and unit: ");
            String input = in.nextLine();
            String[] inputArr = input.split(" ");
            
            double angle = Double.parseDouble(inputArr[0]);
            String unit = inputArr[1];
            
            if(unit.equals("rad")) convertedUnits[i] = radToDeg(angle);
            if(unit.equals("deg")) convertedUnits[i] = degToRad(angle);
        }
        
        for (double convertedUnit : convertedUnits) {
            System.out.printf("%.6f\n", convertedUnit);
        }
    }
    
    public static double radToDeg(double angle) {
        return angle * (180 / Math.PI);
    }
    
    public static double degToRad(double angle) {
        return angle * (Math.PI / 180);
    }
}
