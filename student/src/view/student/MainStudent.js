import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import ShowData from "./ShowData";
import {
  getStudent,
  getFaculty,
  getMajor,
} from "../../service/Student.service";

function MainStudent() {
  const [data, setData] = useState([]);
  const [dataFaculty, setDataFaculty] = useState([]);
  const [dataMajor, setDataMajor] = useState([]);

  useEffect(() => {
    get();
    getFacultys();
    getMajors(0);
  }, []);

  function get() {
    let res = getStudent();
    setData(res);
  }

  function getFacultys() {
    let res = getFaculty();
    setDataFaculty(res);
  }

  function getMajors(faculty) {
    let res = getMajor(faculty);
    console.log("getMajors", res);
    setDataMajor(res);
  }

  return (
    <div className="col-12">
      <Formik
        initialValues={{
          email: "boom0928754237@gmail.com",
          password: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log();
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
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                />
              </div>
              <div className="col-12 col-md-4 px-1 mt-1">
                <label>คณะ</label>
                <select
                  className="form-control form-select"
                  onChange={(e) => {
                    getMajors(e.target.value);
                  }}
                >
                  <option value={0}>--เลือกคณะ--</option>
                  {dataFaculty.map((item, index) => (
                    <option key={item.id} value={item.id}>
                      {item.faculty}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-12 col-md-4 px-1 mt-1">
                <label>สาขา</label>
                <select className="form-control form-select">
                  <option value={0}>--เลือกสาขา--</option>
                  {dataMajor.map((item, index) => (
                    <option key={item.id} value={item.id}>
                      {item.major}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className=" d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-secondary mx-1"
                onClick={() => {
                  console.log();
                }}
              >
                ค้นหา
              </button>
              <button
                type="button"
                className="btn btn-danger mx-1"
                onClick={() => {
                  console.log();
                }}
              >
                ล้างค่า
              </button>
            </div>
            <div>
              <ShowData data={data} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default MainStudent;
