import { remoteGet, remotePost, remoteDelete } from "./remoteService.js";
export async function getStudentIDs(name) {
    return remoteGet(`/students?name=${name}`);
}
export async function getTranscripts() {
    return remoteGet(`/transcripts`);
}
export async function postTranscript(name) {
    return remotePost(`/transcripts`, { name });
}
export async function getTranscript(id) {
    return remoteGet(`/transcripts/${id}`);
}
export async function deleteTranscript(id) {
    return remoteDelete(`/transcripts/${id}`);
}
export async function postTranscriptCourseGrade(studentID, course, grade) {
    return remotePost(`/transcripts/${studentID}/${course}`, { grade });
}
export async function getTranscriptCourseGrade(studentID, course) {
    return remoteGet(`/transcripts/${studentID}/${course}`);
}
