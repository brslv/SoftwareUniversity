using System;

namespace P04_LearningSystem.Students.Current
{
    class OnsiteStudent : CurrentStudent
    {

        private int numberOfVisits;

        public OnsiteStudent(string firstName, string lastName, int? age, double avgGrade, string studentNumber, string currentCourse, int numberOfVisits)
            : base(firstName, lastName, age, avgGrade, studentNumber, currentCourse)
        {
            this.NumberOfVisits = numberOfVisits;
        }

        public OnsiteStudent(string firstName, string lastName, double avgGrade, string studentNumber, string currentCourse, int numberOfVisits)
            : this(firstName, lastName, null, avgGrade, studentNumber, currentCourse, numberOfVisits)
        {

        }

        public int NumberOfVisits
        {
            get
            {
                return this.numberOfVisits;
            }
            set
            {
                if (value < 0)
                {
                    throw new ArgumentOutOfRangeException("The number of visits cannot be negative");
                }

                this.numberOfVisits = value;
            }
        }

    }
}
