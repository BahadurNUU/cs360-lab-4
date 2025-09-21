import { remoteGet, remotePost, remoteDelete } from "./remoteService";
import { StudentID, Transcript, Student, Course, CourseGrade, CourseName, Name  } from "./types";

export async function getStudentIDs(name:string): Promise<StudentID[]> {
    return remoteGet<StudentID[]>(`/students?name=${name}`);
}

export async function getTranscripts(): Promise<Transcript[]> {
    return remoteGet<Transcript[]>(`/transcripts`);
}

export async function postTranscript(name: string): Promise<Transcript> {
    return remotePost<Transcript>(`/transcripts`, { name });
}

export async function getTranscript(id: number): Promise<Transcript> {
    return remoteGet<Transcript>(`/transcripts/${id}`);
}

export async function deleteTranscript(id: number): Promise<void> {
    return remoteDelete(`/transcripts/${id}`);
}

export async function postTranscriptCourseGrade(studentID: number, course: CourseName, grade: number): Promise<void> {
    return remotePost(`/transcripts/${studentID}/${course}`, { grade });
}


export async function getTranscriptCourseGrade(studentID: number, course: CourseName): Promise<CourseGrade> {
    return remoteGet<CourseGrade>(`/transcripts/${studentID}/${course}`);
}