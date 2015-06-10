using System;

namespace P04_LearningSystem.Students.Current
{
    class OnlineStudent : CurrentStudent
    {

        public OnlineStudent(string firstName, string lastName, int? age, double avgGrade, string studentNumber, string currentCourse)
            : base(firstName, lastName, age, avgGrade, studentNumber, currentCourse)
        {

        }

        public OnlineStudent(string firstName, string lastName, double avgGrade, string studentNumber, string currentCourse)
            : this(firstName, lastName, null, avgGrade, studentNumber, currentCourse)
        {

        }

    }
}
