import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import ShowData from "./ShowData";
import { getStudent, getDataFaculty, getDataMajor } from '../../service/Student.service';


function MainStudent() {
  const [data, setData] = useState([]);
  const [dataFaculty, setDataFaculty] = useState([]);
  const [dataMajor, setDataMajor] = useState([]);
  const [pagin, setPagin] = useState({
    totalrow: 0,
    pagisize: 10,
    currentpage: 1,
    totalpage: 1
  })

  useEffect(() => {
    get('', 0, 0, 10, 1)
  }, [])

  const get = (_search, _faculty, _major, pagisize, currentpage) => {
    let data = getStudent(_search, _faculty, _major, pagisize, currentpage);
    // console.log(data);
    let faculty = getDataFaculty();
    let major = getDataMajor(0);
    setData(data.data);
    setDataFaculty(faculty);
    setDataMajor(major);
    setPagin(data.pagin);
  }

  const getMajor = (idFac) => {
    let major = getDataMajor(idFac);
    setDataMajor(major)
  }


  return (
    <div className="col-12">
      <Formik
        initialValues={{
          search: "",
          faculty: '',
          major: ''
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form>
            <div className="row">
              <div className="col-12 col-md-4 px-1 mt-1">
                <label>ค้นหา</label>
                <input
                  type="text"
                  className="form-control"
                  value={values.search}
                  onChange={(e) => {
                    console.log(e.target.value);
                    setFieldValue('search', e.target.value)
                  }}
                />
              </div>
              <div className="col-12 col-md-4 px-1 mt-1">
                <label>คณะ</label>
                <select className="form-control form-select"
                  value={values.faculty}
                  onChange={(e) => {
                    getMajor(e.target.value)
                    setFieldValue('faculty', e.target.value)

                  }}>
                  <option value="">Open this select menu</option>
                  {dataFaculty.map((item, index) => (

                    <option value={item.id} key={item.id}>{item.faculty}</option>
                  ))}
                </select>
              </div>
              <div className="col-12 col-md-4 px-1 mt-1">
                <label>สาขา</label>
                <select className="form-control form-select"
                  value={values.major}
                  onChange={(e) => {
                    setFieldValue('major', e.target.value)
                  }}
                >
                  <option value="">Open this select menu</option>
                  {dataMajor.map((item, index) => (

                    <option value={item.id} key={item.id}>{item.major}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className=" d-flex justify-content-center mt-2">
              <button
                type="submit"
                className="btn btn-secondary mx-1"
                onClick={() => {
                  // console.log();
                  get(values.search, values.faculty, values.major)

                }}
              >
                ค้นหา
              </button>
              <button
                type="reset"
                className="btn btn-danger mx-1"
                onClick={() => {
                  get('', 0, 0, 10, 1)
                  getMajor(0)
                  console.log();
                }}
              >
                ล้างค่า
              </button>
            </div>
            <div>
              <ShowData data={data} faculty={dataFaculty} pagin={pagin}
                changePage={(page) => {
                    // console.log("page",page);
                    // setPagin({})
                    get(values.search, values.faculty, values.major,pagin.pagisize,page)
                }}
                changePageSize={(size)=>{
                  console.log("size");
                  // setPagin({size:size});
                  get(values.search, values.faculty, values.major,size,1)
                }} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default MainStudent;
