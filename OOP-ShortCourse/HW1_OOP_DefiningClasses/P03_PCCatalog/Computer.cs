using System;
using System.Collections.Generic;

class Computer : IComparable<Computer>
{
    private string name;

    private List<Component> components;

    private double price;

    /// <summary>
    /// Constructor.
    /// </summary>
    /// <param name="name"></param>
    /// <param name="components"></param>
    public Computer(string name, List<Component> components)
    {
        this.Name = name;
        this.Components = components;
    }

    /// <summary>
    /// Name property.
    /// </summary>
    public string Name
    {
        get
        {
            return this.name;
        }
        set
        {
            if (String.IsNullOrEmpty(value))
            {
                throw new ArgumentException("Computer name cannot be empty string nor null");
            }

            this.name = value;
        }
    }

    /// <summary>
    /// Components property.
    /// </summary>
    public List<Component> Components
    {
        get
        {
            return this.components;
        }
        set
        {
            if (value.Count < 1)
            {
                throw new ArgumentException("Components list cannot be empty.");
            }

            this.components = value;
        }
    }

    /// <summary>
    /// Price property.
    /// </summary>
    public double Price
    {
        get
        {
            double finalPrice = 0;

            foreach (var component in this.Components)
            {
                finalPrice += component.Price;
            }

            return finalPrice;
        }
    }

    /// <summary>
    /// IComparable.CompareTo method for sorting Computer objects.
    /// </summary>
    /// <param name="other"></param>
    /// <returns></returns>
    public int CompareTo(Computer other)
    {
        #region first approach sorting

        //return this.Price.CompareTo(other.Price);

        #endregion

        #region second approach on sorting

        if (this.Price > other.Price) return 1;
        if (this.Price < other.Price) return -1;
        if (this.Price == other.Price) return 0;

        #endregion

        return 0;
    }
}