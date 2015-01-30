package pack;

import java.util.Scanner;

public class P02_DebuggingInstructions {

	public static void main(String[] args) {
		
		@SuppressWarnings("resource")
		Scanner input = new Scanner(System.in);
        String opCode = input.nextLine();
        
        while (!opCode.equals("END")) {
            String[] codeArgs = opCode.split(" ");

            long result = 0;
            switch (codeArgs[0]) {
                case "INC": {
                	// Changed the type of operandOne from 'int' to 'long'.
                	// Changed the order of operations on the second line => first increment, than assign to result.
	                long operandOne = Long.parseLong(codeArgs[1]);
	                result = ++operandOne;
	                break;
                }
                case "DEC": {
                	// Changed the type of operandOne from 'int' to 'long'.
                	// Changed the order of operations on the second line => first decrement, than assign to result.
                    long operandOne = Integer.parseInt(codeArgs[1]);
                    result = --operandOne;
                    break;
                }
                case "ADD": {
                	// Changed the type of operands One and Two from 'int' to 'long'.
                    long operandOne  = Integer.parseInt(codeArgs[1]);
                    long operandTwo = Integer.parseInt(codeArgs[2]);
                    result = operandOne + operandTwo;
                    break;
                }
                case "MLA": {
                	// Changed the type of operands One and Two from 'int' to 'long'.
                    long operandOne  = Integer.parseInt(codeArgs[1]);
                    long operandTwo = Integer.parseInt(codeArgs[2]);
                    result = (long)(operandOne * operandTwo);
                    break;
                }
                default:
                    break;
            }
            
            System.out.println(result);
            
            // Added new user prompt for another operation to prevent never-ending loop.
            opCode = input.nextLine();
        }
	
	}
}
