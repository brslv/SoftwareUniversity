using System;

namespace P04_LearningSystem.Trainers
{
    class JuniorTrainer : Trainer
    {

        public JuniorTrainer(string firstName, string lastName, int? age)
            : base(firstName, lastName, age)
        {

        }

        public JuniorTrainer(string firstName, string lastName)
            : this(firstName, lastName, null)
        {

        }

    }
}
