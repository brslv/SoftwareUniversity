using System;

namespace P04_LearningSystem.Students
{
    class Student : Person, IComparable<Student>
    {

        private string studentNumber;

        private double avgGrade;

        public Student(string firstName, string lastName, int? age, double avgGrade, string studentNumber)
            : base(firstName, lastName, age)
        {
            this.AvgGrade = avgGrade;
            this.StudentNumber = studentNumber;
        }

        public Student(string firstName, string lastName, double avgGrade, string studentNumber)
            : this(firstName, lastName, null, avgGrade, studentNumber)
        {

        }

        public string StudentNumber
        {
            get
            {
                return this.studentNumber;
            }
            set
            {
                if (String.IsNullOrEmpty(value))
                {
                    throw new ArgumentException("Student number cannot be empty.");
                }

                this.studentNumber = value;
            }
        }

        public double AvgGrade
        {
            get
            {
                return this.avgGrade;
            }
            set
            {
                if (value < 2 || value > 6)
                {
                    throw new ArgumentOutOfRangeException("The average grade must be in range [2...6].");
                }

                this.avgGrade = value;
            }
        }

        public int CompareTo(Student other)
        {
            if (this.AvgGrade < other.AvgGrade)
            {
                return 1;
            }
            else if (this.avgGrade > other.AvgGrade)
            {
                return -1;
            }
            else
            {
                return 0;
            }
        }
    }
}
