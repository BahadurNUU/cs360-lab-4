import { getTranscripts } from "./dataService.js";
async function loadTranscripts() {
    try {
        const transcripts = await getTranscripts();
        const container = document.getElementById("students-container");
        if (container) {
            container.innerHTML = ""; // Clear existing content
            transcripts.forEach(transcript => {
                const transcriptDiv = document.createElement("div");
                transcriptDiv.className = "card mb-3";
                transcriptDiv.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">ID: ${transcript.student.studentID} ${transcript.student.studentName}</h5>
                        <p class="card-text">Courses:</p>
                        <ul>
                            ${transcript.grades.map(grade => `<li>${grade.course.courseName}: ${grade.grade}</li>`).join("")}
                        </ul>
                    </div>
                `;
                container.appendChild(transcriptDiv);
            });
        }
    }
    catch (error) {
        console.error("Error loading transcripts:", error);
    }
}
loadTranscripts();
