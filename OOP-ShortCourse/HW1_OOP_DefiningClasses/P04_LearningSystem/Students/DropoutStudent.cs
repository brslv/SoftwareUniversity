using System;
using System.Text;

namespace P04_LearningSystem.Students
{
    class DropoutStudent : Student
    {

        private string dropoutReason;
        public DropoutStudent(string firstName, string lastName, int? age, double avgGrade, string studentNumber, string dropoutReason) 
            : base(firstName, lastName, age, avgGrade, studentNumber)
        {
            this.DropoutReason = dropoutReason;
        }

        public DropoutStudent(string firstName, string lastName, double avgGrade, string studentNumber, string dropoutReason)
            : this(firstName, lastName, null, avgGrade, studentNumber, dropoutReason)
        {

        }


        public string Reapply()
        {
            StringBuilder output = new StringBuilder();

            output.Append("Information about the student:\n");
            output.AppendFormat("First name: {0}\n", this.FirstName);
            output.AppendFormat("Last name: {0}\n", this.LastName);
            output.AppendFormat("Age: {0}\n", this.Age);
            output.AppendFormat("Student number: {0}\n", this.StudentNumber);
            output.AppendFormat("Average grade: {0}\n", this.AvgGrade);
            output.AppendFormat("Reason for dropout: {0}{1}", this.DropoutReason, Environment.NewLine);


            return "";
        }

        public string DropoutReason { get; set; }

    }
}
