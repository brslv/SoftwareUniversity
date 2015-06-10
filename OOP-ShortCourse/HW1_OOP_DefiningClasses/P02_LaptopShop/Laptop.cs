using System;
using System.Text;

class Laptop
{
    private string model;

    private string manufacturer;

    private string processor;

    private int? ram;

    private string graphicsCard;

    private string hdd;

    private string screen;

    private Battery battery;

    private double price;

    /// <summary>
    /// Create a laptop with only the model and price specified.
    /// </summary>
    /// <param name="model"></param>
    /// <param name="price"></param>
    public Laptop(string model, double price)
    {
        this.Model = model;
        this.Price = price;
    }

    /// <summary>
    /// Create a fully-specified laptop.
    /// </summary>
    /// <param name="model"></param>
    /// <param name="price"></param>
    /// <param name="manufacturer"></param>
    /// <param name="processor"></param>
    /// <param name="ram"></param>
    /// <param name="graphicsCard"></param>
    /// <param name="hdd"></param>
    /// <param name="screen"></param>
    /// <param name="batteryModel"></param>
    /// <param name="batteryLife"></param>
    public Laptop(string model, double price, string manufacturer, string processor, int? ram, string graphicsCard, string hdd, string screen, string batteryModel, double? batteryLife)
    {
        this.Model = model;
        this.Price = price;
        this.Manufacturer = manufacturer;
        this.Processor = processor;
        this.Ram = ram;
        this.GraphicsCard = graphicsCard;
        this.Hdd = hdd;
        this.Screen = screen;
        this.Battery = new Battery(batteryModel, batteryLife);
    }

    /// <summary>
    /// Model property.
    /// </summary>
    public string Model
    {
        get
        {
            return this.model;
        }
        set
        {
            Validator.ValidateString(value);
            this.model = value;
        }
    }

    /// <summary>
    /// Manufacturer property.
    /// </summary>
    public string Manufacturer
    {
        get
        {
            return this.manufacturer;
        }
        set
        {
            Validator.ValidateString(value);
            this.manufacturer = value;
        }
    }


    /// <summary>
    /// Processor property.
    /// </summary>
    public string Processor
    {
        get
        {
            return this.processor;
        }
        set
        {
            Validator.ValidateString(value);
            this.processor = value;
        }
    }

    /// <summary>
    /// Ram property.
    /// </summary>
    public int? Ram
    {
        get
        {
            return this.ram;
        }
        set
        {
            Validator.ValidateNumber(value);
            this.ram = value;
        }
    }

    /// <summary>
    /// Graphics card property.
    /// </summary>
    public string GraphicsCard
    {
        get
        {
            return this.graphicsCard;
        }
        set
        {
            Validator.ValidateString(value);
            this.graphicsCard = value;
        }
    }

    /// <summary>
    /// Hdd property.
    /// </summary>
    public string Hdd
    {
        get
        {
            return this.hdd;
        }
        set
        {
            Validator.ValidateString(value);
            this.hdd = value;
        }
    }

    /// <summary>
    /// Screen property.
    /// </summary>
    public string Screen
    {
        get
        {
            return this.screen;
        }
        set
        {
            Validator.ValidateString(value);
            this.screen = value;
        }
    }

    /// <summary>
    /// Battery property.
    /// </summary>
    public Battery Battery { get; set; }

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
            Validator.ValidateNumber(value);
            this.price = value;
        }
    }

    /// <summary>
    /// Overrides the virtual method ToString().
    /// </summary>
    /// <returns></returns>
    public override string ToString()
    {
        StringBuilder result = new StringBuilder();

        result.AppendFormat("Model: {0}\nPrice: {1}\n", this.Model, this.Price);

        if (this.Manufacturer != null)
        {
            result.AppendFormat("Manufacturer: {0}\n", this.Manufacturer);
        }

        if (this.Processor != null)
        {
            result.AppendFormat("Processor: {0}\n", this.Processor);
        }

        if (this.Ram != null)
        {
            result.AppendFormat("RAM: {0}\n", this.Ram);
        }

        if (this.GraphicsCard != null)
        {
            result.AppendFormat("GraphicsCard: {0}\n", this.GraphicsCard);
        }

        if (this.Hdd != null)
        {
            result.AppendFormat("Hdd: {0}\n", this.Hdd);
        }

        if (this.Screen != null)
        {
            result.AppendFormat("Screen: {0}\n", this.Screen);
        }

        if (this.Battery != null)
        {
            result.AppendFormat("{0}{1}", this.Battery.ToString(), Environment.NewLine);
        }

        return result.ToString();
    }

}
