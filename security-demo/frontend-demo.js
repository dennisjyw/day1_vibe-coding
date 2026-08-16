// CLASSROOM-ONLY INSECURE EXAMPLE
// This key is fake and must never be used for any service.
const DEMO_FRONTEND_KEY = "DEMO_NOT_A_REAL_KEY_20260817";

export async function loadStudentSummary(studentId) {
  const response = await fetch(`/api/student-summary?student_id=${studentId}`, {
    headers: {
      // Intentionally unsafe: a browser user can inspect this value.
      "X-Demo-Key": DEMO_FRONTEND_KEY,
    },
  });

  if (!response.ok) {
    throw new Error("Student summary request failed");
  }

  return response.json();
}
