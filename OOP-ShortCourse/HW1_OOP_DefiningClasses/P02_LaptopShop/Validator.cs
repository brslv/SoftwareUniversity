using System;

class Validator
{

    /// <summary>
    /// Validate string.
    /// If a string is null or empty, throw an exception.
    /// </summary>
    /// <param name="stringToValidate"></param>
    public static void ValidateString(string stringToValidate)
    {
        if (String.IsNullOrEmpty(stringToValidate))
        {
            throw new ArgumentException("String cannot be empty or null");
        }
    }

    /// <summary>
    /// Validate nullable integer.
    /// If integer is negative, throw new ArgumentOutOfRangeException exception.
    /// </summary>
    /// <param name="intToValidate"></param>
    public static void ValidateNumber(int? intToValidate)
    {
        if (intToValidate < 0)
        {
            throw new ArgumentOutOfRangeException("Value cannot be negative.");
        }
    }

    /// <summary>
    /// Validate nullable double.
    /// If double is negative, throw new ArgumentOutOfRangeException exception.
    /// </summary>
    /// <param name="doubleToValidate"></param>
    public static void ValidateNumber(double? doubleToValidate)
    {
        if (doubleToValidate < 0)
        {
            throw new ArgumentOutOfRangeException("Value cannot be negative.");
        }
    }

}
