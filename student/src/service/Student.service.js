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