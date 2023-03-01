<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import ShowData from "./ShowData";
import { getStudent, getDataFaculty, getDataMajor } from '../../service/Student.service';

=======
import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import ShowData from "./ShowData";
import {
  getStudent,
  getFaculty,
  getMajor,
} from "../../service/Student.service";
>>>>>>> 07a0f329e0c3514a9abd0d6e6c71a47c0c813e09

function MainStudent() {
  const [data, setData] = useState([]);
  const [dataFaculty, setDataFaculty] = useState([]);
  const [dataMajor, setDataMajor] = useState([]);
  const [pagin, setPagin] = useState({
    totalrow: 0,
<<<<<<< HEAD
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

=======
    pagesize: 10,
    currentpage: 1,
    totalpage: 1,
  });

  useEffect(() => {
    get("", 0, 0, 10, 1);
    getFacultys();
    getMajors(0);
  }, []);

  function get(search, faculty, major, pagesize, currentpage) {
    let res = getStudent(search, faculty, major, pagesize, currentpage);
    console.log(res);
    setData(res.data);
    setPagin(res.pagin);
  }

  function getFacultys() {
    let res = getFaculty();
    setDataFaculty(res);
  }

  function getMajors(faculty) {
    let res = getMajor(faculty);
    //console.log("getMajors", res);
    setDataMajor(res);
  }
>>>>>>> 07a0f329e0c3514a9abd0d6e6c71a47c0c813e09

  return (
    <div className="col-12">
      <Formik
        initialValues={{
          search: "",
<<<<<<< HEAD
          faculty: '',
          major: ''
        }}
        onSubmit={(values) => {
          console.log(values);
=======
          faculty: 0,
          major: 0,
        }}
        onSubmit={(values) => {
          get(values.search, values.faculty, values.major);
>>>>>>> 07a0f329e0c3514a9abd0d6e6c71a47c0c813e09
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form>
            <div className="row">
              <div className="col-12 col-md-4 px-1 mt-1">
                <label>ค้นหา</label>
                <input
                  value={values.search}
                  type="text"
                  className="form-control"
                  value={values.search}
                  onChange={(e) => {
<<<<<<< HEAD
                    console.log(e.target.value);
                    setFieldValue('search', e.target.value)
=======
                    setFieldValue("search", e.target.value);
>>>>>>> 07a0f329e0c3514a9abd0d6e6c71a47c0c813e09
                  }}
                />
              </div>
              <div className="col-12 col-md-4 px-1 mt-1">
                <label>คณะ</label>
<<<<<<< HEAD
                <select className="form-control form-select"
                  value={values.faculty}
                  onChange={(e) => {
                    getMajor(e.target.value)
                    setFieldValue('faculty', e.target.value)

                  }}>
                  <option value="">Open this select menu</option>
                  {dataFaculty.map((item, index) => (

                    <option value={item.id} key={item.id}>{item.faculty}</option>
=======
                <select
                  value={values.faculty}
                  className="form-control form-select"
                  onChange={(e) => {
                    getMajors(e.target.value);
                    setFieldValue("faculty", e.target.value);
                  }}
                >
                  <option value={0}>--เลือกคณะ--</option>
                  {dataFaculty.map((item, index) => (
                    <option key={item.id} value={item.id}>
                      {item.faculty}
                    </option>
>>>>>>> 07a0f329e0c3514a9abd0d6e6c71a47c0c813e09
                  ))}
                </select>
              </div>
              <div className="col-12 col-md-4 px-1 mt-1">
                <label>สาขา</label>
<<<<<<< HEAD
                <select className="form-control form-select"
                  value={values.major}
                  onChange={(e) => {
                    setFieldValue('major', e.target.value)
                  }}
                >
                  <option value="">Open this select menu</option>
                  {dataMajor.map((item, index) => (

                    <option value={item.id} key={item.id}>{item.major}</option>
=======
                <select
                  value={values.major}
                  className="form-control form-select"
                  onChange={(e) => {
                    setFieldValue("major", e.target.value);
                  }}
                >
                  <option value={0}>--เลือกสาขา--</option>
                  {dataMajor.map((item, index) => (
                    <option key={item.id} value={item.id}>
                      {item.major}
                    </option>
>>>>>>> 07a0f329e0c3514a9abd0d6e6c71a47c0c813e09
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
<<<<<<< HEAD
                  get('', 0, 0, 10, 1)
                  getMajor(0)
                  console.log();
=======
                  get("", 0, 0, 10, 1);
                  getMajors(0);
>>>>>>> 07a0f329e0c3514a9abd0d6e6c71a47c0c813e09
                }}
              >
                ล้างค่า
              </button>
            </div>
            <div>
<<<<<<< HEAD
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
=======
              <ShowData
                data={data}
                pagin={pagin}
                changePage={(page) => {
                  get(values.search, values.faculty, values.major, pagin.pagesize, page);
                }}
                changePageSize={(pagesize) => {
                  get(values.search, values.faculty, values.major, pagesize, 1);
                }}
              />
>>>>>>> 07a0f329e0c3514a9abd0d6e6c71a47c0c813e09
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default MainStudent;
