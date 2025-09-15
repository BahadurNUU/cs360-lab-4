export type StudentID = number
export type Name = {firstName: string, lastName: string}
export type Student = {studentID: StudentID, studentName: Name}
export type CourseName = string
export type Course = {courseName: CourseName, courseCredits: number}
export type CourseGrade = {course:Course, grade:number}
export type Transcript = {student:Student, grades:CourseGrade[]}