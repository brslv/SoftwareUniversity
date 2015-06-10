using System;

namespace P04_LearningSystem.Students
{
    class CurrentStudent : Student
    {

        private string currentCourse;

        public CurrentStudent(string firstName, string lastName, int? age, double avgGrade, string studentNumber, string currentCourse)
            : base(firstName, lastName, age, avgGrade, studentNumber)
        {
            this.CurrentCourse = currentCourse;
        }

        public CurrentStudent(string firstName, string lastName, double avgGrade, string studentNumber, string currentCourse)
            : this(firstName, lastName, null, avgGrade, studentNumber, currentCourse)
        {

        }


        public string CurrentCourse { get; set; }

    }
}
