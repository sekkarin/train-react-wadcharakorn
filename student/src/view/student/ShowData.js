import React from "react";
import Pagination from "react-js-pagination";

function ShowData({ data }) {
  console.log("data", data);

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between">
        <div>
          <select className="form-control form-select">
            <option value="{10}">10</option>
            <option value="{20}">20</option>
            <option value="{50}">50</option>
            <option value="{100}">100</option>
          </select>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => {
              console.log();
            }}
          >
            เพิ่ม
          </button>
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ชื่อ-นามสกุล</th>
            <th scope="col">คณะ</th>
            <th scope="col">สาขา</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th scope="row">1</th>
              <td>{item.name+' '+ item.lastname}</td>
              <td>{item.faculty}</td>
              <td>{item.major}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-between">
        <div>จำนวน 10 รายการ</div>
        <div>
          <Pagination
            activePage={1}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            onChange={() => {
              console.log();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ShowData;
