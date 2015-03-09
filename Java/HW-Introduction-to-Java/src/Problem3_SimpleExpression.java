
import java.math.BigDecimal;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 *
 * @author brslv
 */
public class Problem3_SimpleExpression {
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        String expression = scanner.nextLine();
        expression = expression.replace(" ", "");
        String[] numbers = expression.split("[^0-9]+");
        String[] operators = expression.split("[0-9]+");
        BigDecimal sum = new BigDecimal(numbers[0]);
        for (int i = 1; i < operators.length; i++) {
                BigDecimal number = new BigDecimal(numbers[i]);
                if (operators[i].equals("+")) {
                        sum = sum.add(number);
                } else if (operators[i].equals("-")) {
                        sum = sum.subtract(number);
                } else {
                        throw new IllegalArgumentException(
                                "Invalid operator: " + operators[i]);
                }
        }
        System.out.println(sum.toPlainString());
    }
}
