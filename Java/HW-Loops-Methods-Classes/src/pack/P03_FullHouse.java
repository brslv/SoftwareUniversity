package pack;

import java.util.ArrayList;
import java.util.Scanner;

public class P03_FullHouse {
    
    public static void main(String[] args) {
        
        char[] suits = {'\u2660', '\u2665', '\u2666', '\u2663'};
        String[] faces = {"2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "Q", "K"};
        int fhCounter = 0;
        
        for (int f1 = 0; f1 < faces.length; f1++) {
            for (int f2 = 0; f2 < faces.length; f2++) {
                for (int s1 = 0; s1 < suits.length; s1++) {
                    for (int s2 = s1 + 1; s2 < suits.length; s2++) {
                        for (int s3 = s2 + 1; s3 < suits.length; s3++) {
                            for (int s4 = 0; s4 < suits.length; s4++) {
                                for (int s5 = s4 + 1; s5 < suits.length; s5++) {
                                    
                                    if(f1 == f2) continue;
                                    printFullHouse(f1, f2, s1, s2, s3, s4, s5, faces, suits);
                                    fhCounter++;
                                    
                                }
                            }
                        }
                    }
                }
            }
        }
        
        System.out.println(fhCounter);
        
    }
    
    public static void printFullHouse(int f1, int f2, int s1, int s2, int s3, int s4, int s5, String[] faces, char[] suits) {
        System.out.println(faces[f1] + suits[s1] + faces[f1] + suits[s2] + faces[f1] + suits[s3] + faces[f2] + suits[s4] + faces[f2] + suits[s5]);
    }
    
}