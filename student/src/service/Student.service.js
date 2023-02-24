import StudentData from "../data/studentsData.json";
import FacultyData from "../data/facultyData.json";
import MajorData from "../data/majorData.json";
import { pagination } from "../helper/Response";

export function getStudent(search =" ", faculty=0, major=0, pagesize = 10, currentpage = 1) {
  let student = StudentData;

  if(search){
    student = student.filter(a => a.name.includes(search))
  }

  if(parseInt(faculty) !== 0){
    student = student.filter(a => a.fac_id === parseInt(faculty))
  }

  if(parseInt(major) !== 0){
    student = student.filter(a => a.major_id === parseInt(major))
  }

  return pagination(pagesize, currentpage, student);
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
