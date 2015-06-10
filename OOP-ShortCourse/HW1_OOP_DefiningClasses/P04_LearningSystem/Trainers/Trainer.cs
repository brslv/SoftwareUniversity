using System;

namespace P04_LearningSystem.Trainers
{
    class Trainer : Person
    {

        public Trainer(string firstName, string lastName, int? age) 
            : base(firstName, lastName, age)
        {

        }

        public Trainer(string firstName, string lastName)
            : this(firstName, lastName, null)
        {

        }

        public void CreateCourse(string courseName)
        {
            Console.WriteLine("The " + courseName + " course has been successfully created.");
        }

    }
}
