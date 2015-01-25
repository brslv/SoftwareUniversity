package pack;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class P08_SumNumbersFromATextFile {

    public static void main(String[] args) {
        /**
         * In order this to work, make a text file somewhere in your computer and specify the full path bellow (in 'filePath').
         * If you're lazy (like me), you can use the file I've prepared for you in the project's folder -> resources/text-file-with-nums.txt (default)
         */
        String filePath = "resources/text-file-with-nums.txt";
        
        try{
            System.out.println("The sum of all the numbers in the given text file is: " + sumNumsInFile(filePath));
        }catch(IOException e){
            System.out.println("Error");
        }
    }
    
    /**
     * Opens a file and calculates the sum.
     * This method ignores text and uses only the numbers in the file.
     * @param filePath
     * @return double the sum of the values in the file
     * @throws IOException 
     */
    public static double sumNumsInFile(String filePath) throws IOException{
        FileReader fr = new FileReader(filePath);
        BufferedReader br = new BufferedReader(fr);
        double sum = 0;
        int numOfLines = countLines(filePath);
        
        for (int i = 0; i < numOfLines; i++) {
            try {
                double currentNum = Double.parseDouble(br.readLine());
                sum += currentNum;
            } catch (NumberFormatException e) {
                continue;
            }
        }
        
        br.close();
        return sum;
    }
    
    /**
     * Counts the lines of a file.
     * @param filePath
     * @return
     * @throws IOException 
     */
    public static int countLines(String filePath) throws IOException{
        FileReader fr = new FileReader(filePath);
        BufferedReader br = new BufferedReader(fr);
        int linesCount = 0;
        
        while(br.readLine() != null){
            linesCount++;
        }
        
        br.close();
        return linesCount;
    }
}