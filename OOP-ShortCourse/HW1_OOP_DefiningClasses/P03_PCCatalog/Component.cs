using System;
class Component
{
    private string name;

    private string details;

    private double price;

    /// <summary>
    /// Constructor.
    /// </summary>
    /// <param name="name"></param>
    /// <param name="details"></param>
    /// <param name="price"></param>
    public Component(string name, string details, double price)
    {
        this.Name = name;
        this.Details = details;
        this.Price = price;
    }

    /// <summary>
    /// Constructor.
    /// </summary>
    /// <param name="name"></param>
    /// <param name="price"></param>
    public Component(string name, double price) 
        : this(name, null, price)
    {

    }

    /// <summary>
    /// Name property
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
                throw new ArgumentException("Component name cannot be empty.");
            }

            this.name = value;
        }
    }

    /// <summary>
    /// Details property.
    /// </summary>
    public string Details
    {
        get
        {
            return this.details ?? "No details for this component.";
        }
        set
        {
            this.details = value;
        }
    }

    /// <summary>
    /// Price property.
    /// </summary>
    public double Price
    {
        get
        {
            return this.price;
        }
        set
        {
            if (value < 0)
            {
                throw new ArgumentException("Price cannot be negative.");
            }

            this.price = value;
        }
    }

}