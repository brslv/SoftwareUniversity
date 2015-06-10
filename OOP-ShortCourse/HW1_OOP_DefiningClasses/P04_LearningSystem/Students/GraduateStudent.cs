using System;

namespace P04_LearningSystem.Students
{
    class GraduateStudent : Student
    {
        public GraduateStudent(string firstName, string lastName, int? age, double avgGrade, string studentNumber)
            : base(firstName, lastName, age, avgGrade, studentNumber)
        {

        }

        public GraduateStudent(string firstName, string lastName, double avgGrade, string studentNumber)
            : this(firstName, lastName, null, avgGrade, studentNumber)
        {

        }


    }
}
