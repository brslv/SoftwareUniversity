using System;
using System.Collections.Generic;
using P04_LearningSystem.Trainers;
using P04_LearningSystem.Students;
using P04_LearningSystem.Students.Current;

namespace P04_LearningSystem.SULS
{
    class SULSTest
    {

        public static void Main(string[] args)
        {
            List<Person> persons = new List<Person>()
            {
                new Trainer("Pesho", "Peshev"),
                new JuniorTrainer("Kircho", "Metodiev", 22),
                new SeniorTrainer("Stojcho", "Kanchev", 23),
                new Student("Kъncho", "Pochti-Otlichnikov", 5.99, "599999"),
                new CurrentStudent("Ivan", "Ivanov", 5.45, "112311", "OOP"),
                new DropoutStudent("Gosho", "Otpochivkov", 2.51, "558192", "On a vacation in Cali Cali baby."),
                new GraduateStudent("Apostol", "Karakudjabaqapostolov", 4.61, "009721"),
                new OnlineStudent("Razvigor", "Popov", 5.43, "R15000", "Databases"),
                new OnsiteStudent("Kichka", "Budurova", 3.95, "K42312", "KichkaScript", 23),
            };

            List<CurrentStudent> currentStudents = GetListOfCurrentStudents(persons);

            PrintCurrentStudents(currentStudents);
        }

        public static List<CurrentStudent> GetListOfCurrentStudents(List<Person> persons)
        {
            List<CurrentStudent> currentStudents = new List<CurrentStudent>();

            foreach (var student in persons)
            {
                if (student is CurrentStudent)
                {
                    currentStudents.Add((CurrentStudent)student);
                }
            }

            return currentStudents;
        }

        public static void PrintCurrentStudents(List<CurrentStudent> currentStudents)
        {
            foreach (var student in currentStudents)
            {
                Console.WriteLine(student.FirstName + " " + student.LastName + " has grade of: " + student.AvgGrade);
            }
        }

    }
}