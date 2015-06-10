using System;

//Define a class Laptop that holds the following information about a laptop device: model, manufacturer, processor, RAM, graphics card, HDD, screen, battery, battery life in hours and price.
//•	The model and price are mandatory. All other values are optional.
//•	Define two separate classes: a class Laptop holding an instance of class Battery.
//•	Define several constructors that take different sets of arguments (full laptop + battery information or only part of it). Use proper variable types.
//•	Add a method in the Laptop class that displays information about the given instance
//      o	Tip: override the ToString() method
//•	Put validation in all property setters and constructors. String values cannot be empty, and numeric data cannot be negative. Throw exceptions when improper data is entered.


class MainClass
{
    static void Main(string[] args)
    {
        Laptop simpleLaptop = new Laptop("Macbook Air", 2999);
        Laptop fullLaptop = new Laptop("Acer", 22, "Acer", "Intel i7", 16, "Nvidia", "760GB SSD", "LCD", "Durable", 17);

        Console.WriteLine(simpleLaptop);
        Console.WriteLine(fullLaptop);

    }
}