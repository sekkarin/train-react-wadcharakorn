import StudentData from "../data/studentsData.json";
import FacultyData from "../data/facultyData.json";
import MajorData from "../data/majorData.json";

export function getStudent() {
  let student = StudentData;

  return student;
}

export function getFaculty() {
  let faculty = FacultyData;

  return faculty;
}

export function getMajor(facultyId) {
  console.log(facultyId);
  let major = MajorData;

  if (parseInt(facultyId) !== 0) {
    major = major.filter((a) => a.fac_id === parseInt(facultyId));
  }

  return major;
}
