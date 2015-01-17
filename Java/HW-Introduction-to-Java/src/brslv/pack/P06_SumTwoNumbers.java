/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package brslv.pack;

import java.util.Scanner;

/**
 *
 * @author brslv
 */
public class P06_SumTwoNumbers {
    
    public static void main(String[] args) {
        
        Scanner in = new Scanner(System.in);
        
        System.out.println("Enter two numbers to calculate their sum");
        
        double fNum = in.nextDouble();
        double sNum = in.nextDouble();
        double sum = fNum + sNum;
        
        System.out.println(fNum + " + " + sNum + " = " + sum);
    }
    
}
