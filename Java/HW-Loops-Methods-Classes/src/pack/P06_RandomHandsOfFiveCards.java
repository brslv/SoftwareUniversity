package pack;

import java.util.ArrayList;
import java.util.Random;
import java.util.Scanner;

public class P06_RandomHandsOfFiveCards {
    
    public static void main(String[] args) {
    
        Scanner in = new Scanner(System.in);
        int n = Integer.parseInt(in.nextLine());
        
        char[] suits = {'\u2660', '\u2665', '\u2666', '\u2663'};
        String[] faces = {"2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "Q", "K"};
        
        Random rand = new Random();
        
        for (int i = 0; i < n; i++) {
            ArrayList<String> hand = generateRandomHand(rand, suits, faces);
            printHand(hand);
        }
    }
    
    public static ArrayList<String> generateRandomHand(Random rand, char[] suits, String[] faces){
        boolean isHandFull = false;
        ArrayList<String> hand = new ArrayList<>();
        int combosCounter = 0;
        
        while(isHandFull == false){
            int randomSuitsIndex = rand.nextInt(4);
            int randomFacesIndex = rand.nextInt(12);
            String currentCombo = faces[randomFacesIndex] + suits[randomSuitsIndex];
            
            // To ensure there will be no repeated combinations
            if(combosCounter < 5){
                if(hand.contains(currentCombo)){
                    continue;
                }else{
                    combosCounter++;
                    hand.add(currentCombo);
                }
            }else{
                isHandFull = true;
            }
        }
        
        return hand;
    }

    private static void printHand(ArrayList<String> hands) {
        String line = "";
        
        for (int combo = 0; combo < hands.size(); combo++) {
            line += hands.get(combo);
        }
        
        System.out.println(line);
    }
    
}
