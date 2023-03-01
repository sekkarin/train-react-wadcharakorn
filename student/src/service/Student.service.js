<<<<<<< HEAD
import StudentsData from "../data/StudentsData.json"
import faculty from "../data/FacultyData.json"
import major from "../data/MajorData.json"
import { pagination } from "../helper/Respone";

export function getStudent(search = '', faculty = 0, major = 0, pagisize = 10, currentpage = 1,) {
    let student = StudentsData;
    console.log("DEBUG : ", search, faculty, major);
    if (search) {
        student = student.filter((data) => data.name.includes(search))
        // console.log("student search : ", student);
    }
    if (faculty) {

        student = student.filter((data) => data.fac_id === parseInt(faculty))
    }
    if (major) {

        student = student.filter((data) => data.major_id === parseInt(major))
    }
    return pagination(pagisize, currentpage, student);
}
export function getDataFaculty() {
    let facultyData = faculty;
    return facultyData;
}
export function getDataMajor(facId) {
    let majorData = major;
    if (facId !== 0) {
        majorData = majorData.filter((a) => a.fac_id === parseInt(facId));
    }
    return majorData;
}
=======
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
>>>>>>> 07a0f329e0c3514a9abd0d6e6c71a47c0c813e09
