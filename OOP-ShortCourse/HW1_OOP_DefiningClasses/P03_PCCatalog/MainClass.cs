using System;
using System.Linq;
using System.Collections.Generic;

class MainClass
{
    static void Main(string[] args)
    {
        var computers = new List<Computer>()
        {
            new Computer("Mac", new List<Component>() 
            { 
                new Component("Component 1", 250),
                new Component("Component 2", 50.00),
                new Component("Component 3", 300.00),
            }),

            new Computer("Acer", new List<Component>() 
            { 
                new Component("Component 1", 220),
                new Component("Component 2", 40.00),
                new Component("Component 3", 190.00),
            }),
        };

        // Sorting the List<Computer> using IComparable.
        computers.Sort();

        // Printing the sorted list.
        computers.ForEach(computer => Console.WriteLine(computer.Name + " ~~> " + computer.Price));
    }
}