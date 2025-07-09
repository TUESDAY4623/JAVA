class Student //class helped to get data
{
    int rollno;
    String name;
    int marks;
    public static void main(String[] args) {
        // Entry point of the program
    }
}
class Main //class
{
    public static void main(String args[])
    {
        Student s1 = new Student();// data of students
        s1.rollno = 1;
        s1.name = "Navin";
        s1.marks = (int)(Math.random() * 100);
        Student s2 = new Student();
        s2.rollno = 2;
        s2.name = "Ajay";
        s2.marks = (int)(Math.random() * 100);
        Student s3 = new Student();
        s3.rollno = 3;
        s3.name = "navjeet";
        s3.marks = (int)(Math.random() * 100);
         Student students[] = new Student[3];
        students[0] = s1;
        students[1] = s2;
        students[2] = s3;
        for(int i=0;i<students.length;i++)
        {
                 System.out.println(students[i].rollno + ":" + students[i].name + ":" + students[i].marks);
        }
        for(var stud :students)
        {
            System.out.println(stud.name + " : " + stud.rollno);
        }
    }
}