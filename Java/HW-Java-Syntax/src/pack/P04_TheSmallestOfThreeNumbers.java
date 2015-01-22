package pack;

import java.util.Scanner;

public class P04_TheSmallestOfThreeNumbers {

    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);
        System.out.println("How many numbers do you want to compare?");
        int numbersWanted = in.nextInt();
        double[] allNumbers = new double[numbersWanted];

        // Fill the array
        for (int i = 0; i < numbersWanted; i++) {
            allNumbers[i] = in.nextDouble();
        }

        // Get the smallest number and print it
        double smallestNum = allNumbers[0];
        int currentIndex = 0;

        while (currentIndex <= allNumbers.length - 1) {
            double currentNum = allNumbers[currentIndex];
            smallestNum = smallestNum > currentNum ? currentNum : smallestNum;
            currentIndex++;
        }
        
        System.out.println("Ths smallest number in the sequence is: " + (int)smallestNum);
        
    }

}