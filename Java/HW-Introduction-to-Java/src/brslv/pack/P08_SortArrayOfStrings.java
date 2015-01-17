package brslv.pack;

import java.util.ArrayList;
import java.util.Scanner;

/**
 *
 * @author brslv
 */
public class P08_SortArrayOfStrings {
    
    public static void main(String[] args) {
        
        Scanner in = new Scanner(System.in);
        
        // Prompt
        System.out.println("Enter how many strings you want to sort: ");
        int input = Integer.parseInt(in.nextLine());
        
        // Init list
        ArrayList<String> list = new ArrayList<String>();
        
        // Fill the list
        for (int i = 0; i < input; i++) {
            list.add(in.nextLine());
        }
        
        // Sort
        for (int check = 0; check < list.size() - 1; check++) {
            
            for (int city = 0; city < list.size() - 1; city++) {
                String currentCity = list.get(city).toLowerCase();
                String nextCity = list.get(city + 1).toLowerCase();
                
                for (int letter = 0; letter < list.get(city).length(); letter++) {
                    String shorterWord = getShorterWord(currentCity, nextCity);
                    
                    if(letter < shorterWord.length()){
                        
                        if(currentCity.charAt(letter) < nextCity.charAt(letter)){
                            break;
                        }

                        if(currentCity.charAt(letter) > nextCity.charAt(letter)){
                            String tempCity = currentCity;
                            list.set(city, nextCity);
                            list.set(city + 1, tempCity);
                        }

                        if(currentCity.charAt(letter) == nextCity.charAt(letter)){
                            continue;
                        }
                    }
                }
            }
        }
        
        // Print the sorted list
        System.out.println("===");
        System.out.println("Your sorted list of Strings looks something like this: ");
        System.out.println("===");
        
        for (int i = 0; i < list.size(); i++) {
            String city = list.get(i);
            String cityFirstUpper = city.substring(0, 1).toUpperCase() + city.substring(1);
            System.out.println(cityFirstUpper);
        }
    }
    
    public static String getShorterWord(String first, String second){
        int firstWordLength = first.length();
        int secondWordLength = second.length();
        
        return firstWordLength < secondWordLength ? first : second;
    }
}
