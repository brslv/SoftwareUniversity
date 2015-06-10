using System;
using System.Text;
using System.Text.RegularExpressions;

class Person
{
    private string name;

    private int age;

    private string email;

    /// <summary>
    /// Create new person.
    /// </summary>
    /// <param name="name">Person's name.</param>
    /// <param name="age">Person's age.</param>
    /// <param name="email">Person's email.</param>
    public Person(string name, int age, string email)
    {
        this.Name = name;
        this.Age = age;
        this.Email = email;
    }

    /// <summary>
    /// Create new person.
    /// </summary>
    /// <param name="name">Person's name.</param>
    /// <param name="age">Person's age.</param>
    public Person(string name, int age) : this(name, age, null)
    {

    }

    /// <summary>
    /// Name property.
    /// Name should be non-empty string.
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
                throw new ArgumentNullException("The name cannot be null or empty string.");
            }

            this.name = value;
        }
    }

    /// <summary>
    /// Age property.
    /// Age should be in the range [1...100].
    /// </summary>
    public int Age
    {
        get
        {
            return this.age;
        }
        set
        {
            if (value < 1 || value > 100)
            {
                throw new ArgumentOutOfRangeException("The age should be in the range [1...100].");
            }

            this.age = value;
        }
    }

    /// <summary>
    /// Email property.
    /// Email sould contain @ symbol.
    /// </summary>
    public string Email
    {
        get
        {
            return this.email ?? "This person has no email.";
        }
        set
        {
            if (value != null && !Regex.IsMatch(value, @"@"))
            {
                throw new ArgumentException("Invalid email - doesn't contain [@] symbol.");
            }

            this.email = value;
        }
    }

    public override string ToString()
    {
        StringBuilder result = new StringBuilder();

        result.AppendFormat("Person name: {0}\nPerson age: {1}\nPerson email: {2}{3}",
            this.Name, this.Age, this.Email, Environment.NewLine);

        return result.ToString();
    }
}
