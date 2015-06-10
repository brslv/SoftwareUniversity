using System;

namespace P04_LearningSystem
{
    class Person
    {

        private string firstName;

        private string lastName;

        private int? age;

        public Person(string firstName, string lastName)
        {
            this.FirstName = firstName;
            this.LastName = lastName;
        }

        public Person(string firstName, string lastName, int? age) : this(firstName, lastName)
        {
            this.Age = age;
        }

        public string FirstName
        {
            get
            {
                return this.firstName;
            }
            set
            {
                if (String.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("The first name cannot be empty.");
                }

                this.firstName = value;
            }
        }

        public string LastName
        {
            get
            {
                return this.lastName;
            }
            set
            {
                if (String.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("The last name cannot be empty.");
                }
            }
        }

        public int? Age
        {
            get
            {
                return this.age;
            }
            set
            {
                if (value < 0 || value > 100)
                {
                    throw new ArgumentOutOfRangeException("The age seems out of range([1...100])");
                }

                this.age = value;
            }
        }

    }
}
