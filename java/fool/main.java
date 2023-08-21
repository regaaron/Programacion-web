package fool;

import java.util.Scanner;

public class FunctionCalculator {
    int numberOne;
    int numberTwo;
    int result;
    public FunctionCalculator() {
        System.out.println("Calculator");
        System.out.println("""
                1.Add
                2.Subtraction
                3.Multiply
                4.Division
                5.Exit
                """);
    }

    public void setNumbers() {
        Scanner scanner = new Scanner(System.in);
     
            System.out.print("Number one: ");
            numberOne = Integer.parseInt(scanner.nextLine());
            System.out.print("Number two: ");
            numberTwo = Integer.parseInt(scanner.nextLine());
    }

    public int selectOp(){
      
        do{
            int option = Integer.parseInt();
                
             this.setNumbers();
        
        switch (option){
            case 1:
                System.out.printf("Add:" + ejemplo1.add());
                break;
            case 2:
                System.out.printf("Subtract: " + ejemplo1.subtract());
                break;
            case 3:
                System.out.printf("Multiply: " + ejemplo1.multiply());
                break;
            case 4:
                System.out.print("Divide: " + ejemplo1.divide());
                break;
            case 5:
                System.out.print("Good bye.");
                delay(10);
                exit(0);
                break;
            default:
                System.out.print("Please select a correct operation");
                delay(10);
                
                break;
        }

    }while(!(opcion>=1 && opcion<=5));
    }
    public int add(){
        return result = numberOne + numberTwo;
    }

    public int subtract(){
        return numberOne - numberTwo;
    }

    public int multiply(){
        return numberOne * numberTwo;
    }

    public int divide(){
        return numberOne / numberTwo;
    }

}