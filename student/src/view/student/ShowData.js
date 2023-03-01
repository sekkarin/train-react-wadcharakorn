
import React from "react";
import Pagination from "react-js-pagination";

function ShowData({ data, faculty, pagin,changePage,changePageSize }) {
  // console.log("faculty", faculty);
  // console.log("DEBUG : ", pagin);
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between">
        <div>
          <select className="form-control form-select"
            onChange={(e)=>{
              changePageSize(parseInt(e.target.value))
            }}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
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
            <th scope="col">ชื่อ นามสกุล</th>
            <th scope="col">คณะ</th>
            <th scope="col">สาขา</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, index) => (
            <tr>
              <th scope="row">{(pagin.currentpage-1)*pagin.pagisize+(index+1)}</th>
              <td>{data.name} {data.lastname}</td>
              <td>{data.faculty}</td>
              <td>{data.major}</td>
            </tr>
          ))}


        </tbody>
      </table>
      <div className="d-flex justify-content-between">
        <div>จำนวน {data.length} รายการ</div>
        <div>
          <Pagination
            activePage={pagin.currentpage}
            itemsCountPerPage={pagin.pagisize}
            totalItemsCount={pagin.totalrow}
            pageRangeDisplayed={pagin.totalpage}
            onChange={
              (page) => {
                changePage(page)
                

              }
            }
          />
        </div>
      </div>


    </div>
  );
}

export default ShowData;
