/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package brslv.pack;

import java.time.LocalDateTime;
import java.time.Month;
import java.util.Scanner;

/**
 *
 * @author brslv
 */
public class P05_PrintDateAndTime {
    
    public static void main(String[] args) {
        
        Scanner in = new Scanner(System.in);
        
        
        LocalDateTime dateAndTime = LocalDateTime.now();
        String date = dateAndTime.getDayOfMonth() + "-th " 
                      + dateAndTime.getMonth()  + ", " 
                      + dateAndTime.getYear();
        String time = dateAndTime.getHour() + ":" + dateAndTime.getMinute();
        
        System.out.println("Today is " + date + ". The current time is " + time + ".");
        
    }
    
}
