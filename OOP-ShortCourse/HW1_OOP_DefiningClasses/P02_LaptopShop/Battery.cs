using System;
using System.Text;

class Battery
{
    private string model;

    private double? batteryLife;

    /// <summary>
    /// Battery constructor.
    /// </summary>
    /// <param name="model"></param>
    /// <param name="batteryLife"></param>
    public Battery(string model, double? batteryLife)
    {
        this.Model = model;
        this.BatteryLife = batteryLife;
    }

    /// <summary>
    /// BatteryLife property.
    /// </summary>
    public double? BatteryLife
    {
        get
        {
            return this.batteryLife;
        }
        set
        {
            if (value < 0 && value > 100)
            {
                throw new ArgumentOutOfRangeException("The provided battery life seems impossible.");
            }

            this.batteryLife = value;
        }
    }

    /// <summary>
    /// Batery model property.
    /// </summary>
    public string Model
    {
        get 
        {
            return this.model;
        }
        set 
        {
            this.model = value;
        }
    }

    /// <summary>
    /// Overrides the virtual ToString() method.
    /// </summary>
    /// <returns></returns>
    public override string ToString()
    {
        StringBuilder result = new StringBuilder();

        result.AppendFormat("Battery model: {0}\n", this.Model);
        result.AppendFormat("Battery life: {0}\n", this.BatteryLife);

        return result.ToString();
    }

}
