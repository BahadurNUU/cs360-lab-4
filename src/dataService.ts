import { remoteGet } from "./remoteService";
import { StudentID } from "./types";

export async function getStudentIDs(name:string): Promise<StudentID[]> {
    return remoteGet<StudentID[]>(`/students?name=${name}`);
}