package pack;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;

public class P09_ListOfProducts {
    public static void main(String[] args){
        String filePathToRead = "resources/file.txt";
        String filePathToWrite = "resources/output.txt";
        
        try{
            ArrayList<Product> allProducts = getProducts(filePathToRead);
            // Sorting the array with compareTo(), by price.
            Collections.sort(allProducts);
            // Writing to output
            writeToFile(allProducts, filePathToWrite); 
        } catch (Exception e){
            System.out.println(e);
        }
    }
    
    public static void writeToFile(ArrayList<Product> allProducts, String outputFile) throws IOException{
        FileWriter fw = new FileWriter(outputFile);
        BufferedWriter writer = new BufferedWriter(fw);
        
        for (Product product : allProducts) {
            writer.write(product.toString() + "\n");
        }
        
        writer.close();
    }
    
    public static ArrayList<Product> getProducts(String filePath) throws IOException{
        FileReader fr = new FileReader(filePath);
        BufferedReader read = new BufferedReader(fr);
        
        ArrayList<Product> allProducts = new ArrayList<>();
        int linesCount = countLines(filePath);
        
        for (int i = 0; i < linesCount; i++) {
            String[] currentLine = read.readLine().split(" ");
            String productName = currentLine[0];
            double productPrice = Double.parseDouble(currentLine[1]);
            
            Product currentProduct = new Product(productName, productPrice);
            
            allProducts.add(currentProduct);
        }
        
        read.close();
        return allProducts;
    }
    
    public static int countLines(String filePath) throws IOException{
        FileReader fr = new FileReader(filePath);
        BufferedReader read = new BufferedReader(fr);
        
        int linesCounter = 0;
        
        while (read.readLine() != null) {
            linesCounter++;
        }
        
        read.close();
        return linesCounter;
    }
}

/**
 * class Product,
 * usually on a separate file.
 */

class Product implements Comparable<Product>{
    private String productName;
    private double productPrice;
    
    public Product(){
        this.productName = null;
        this.productPrice = 0.0;
    }
    
    public Product(String productName, double productPrice){
        this.productName = productName;
        this.productPrice = productPrice;
    }
    
    /// Setters
    
    /**
     * Set productName.
     * @param productName 
     */
    public void setProductName(String productName) {
        this.productName = productName;
    }

    /**
     * Set productPrice
     * @param productPrice 
     */
    public void setProductPrice(double productPrice) {
        this.productPrice = productPrice;
    }

    /// Getters
    
    /**
     * Get productName.
     * @return String
     */
    public String getProductName() {
        return productName;
    }

    /**
     * Get productPrice.
     * @return double
     */
    public double getProductPrice() {
        return productPrice;
    }
    
    @Override
    /**
     * View object's information in a tidy String.
     * @return String
     */
    public String toString(){
        return this.productName + " " + this.productPrice;
    }
    
    /**
     * Using compareTo() from the Comparable interface.
     * @return int
     */
    public int compareTo(Product temp){
        Product otherProduct = temp;
        
        if(getProductPrice() > otherProduct.getProductPrice()){
            return 1;
        }else if(getProductPrice() < otherProduct.getProductPrice()){
            return -1;
        }else{
            return 0;
        }
    }
}