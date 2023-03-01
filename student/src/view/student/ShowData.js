
import React from "react";
import Pagination from "react-js-pagination";
<<<<<<< HEAD

function ShowData({ data, faculty, pagin,changePage,changePageSize }) {
  // console.log("faculty", faculty);
  // console.log("DEBUG : ", pagin);
=======

function ShowData({ data, pagin, changePage, changePageSize }) {
  console.log("data", data);
  console.log("pagin", pagin);
  //console.log("changePage",changePage);
  //console.log("changePageSize", changePageSize);

>>>>>>> 07a0f329e0c3514a9abd0d6e6c71a47c0c813e09
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between">
        <div>
<<<<<<< HEAD
          <select className="form-control form-select"
            onChange={(e)=>{
              changePageSize(parseInt(e.target.value))
            }}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
=======
          <select
            value={pagin.pagesize}
            className="form-control form-select"
            onChange={(e) => {
              console.log(e.target.value)
              changePageSize(parseInt(e.target.value));
            }}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
>>>>>>> 07a0f329e0c3514a9abd0d6e6c71a47c0c813e09
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
<<<<<<< HEAD
            <th scope="col">ชื่อ นามสกุล</th>
=======
            <th scope="col">ชื่อ-นามสกุล</th>
>>>>>>> 07a0f329e0c3514a9abd0d6e6c71a47c0c813e09
            <th scope="col">คณะ</th>
            <th scope="col">สาขา</th>
          </tr>
        </thead>
        <tbody>
<<<<<<< HEAD
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


=======
          {data.map((item, index) => (
            <tr key={index}>
              <th scope="row">
                {(pagin.currentpage - 1) * pagin.pagesize + (index + 1)}
              </th>
              <td>{item.name + " " + item.lastname}</td>
              <td>{item.faculty}</td>
              <td>{item.major}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-between">
        <div>จำนวน {pagin.totalrow} รายการ</div>
        <div>
          <Pagination
            activePage={pagin.currentpage}
            itemsCountPerPage={pagin.pagesize}
            totalItemsCount={pagin.totalrow}
            pageRangeDisplayed={pagin.totalpage}
            onChange={(page) => {
              changePage(page);
            }}
          />
        </div>
      </div>
>>>>>>> 07a0f329e0c3514a9abd0d6e6c71a47c0c813e09
    </div>
  );
}

export default ShowData;
