import React from "react";

function ShowData() {
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
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ShowData;
