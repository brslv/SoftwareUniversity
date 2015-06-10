using System;

namespace P04_LearningSystem.Trainers
{
    class SeniorTrainer : Trainer
    {

        public SeniorTrainer(string firstName, string lastName, int? age)
            : base(firstName, lastName, age)
        {

        }

        public SeniorTrainer(string firstName, string lastName) 
            : this(firstName, lastName, null)
        {

        }

        public void DeleteCourse(string courseName)
        {
            Console.WriteLine("The course " + courseName + " has been deleted.");
        }

    }
}
