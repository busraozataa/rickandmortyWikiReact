import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import Card from "./components/Cards/Card";
import Filter from "./components/Filters/Filter";
import axios from "axios";
import Pagination from "./components/Pagination/Pagination";
function App() {
  let [pageNumber, setPageNumber] = useState(1);

  console.log(pageNumber);
  let [fetchedData, updateFetchedData] = useState([]);
  let api = `${process.env.REACT_APP_API_URI}/character/?page=${pageNumber}`;

  let { info, results } = fetchedData;

  useEffect(() => {
    (async function () {
      let response = await axios(api);
      updateFetchedData(response.data);
    })();
  }, [api]);

  return (
    <>
      <h1 className="text-center ubuntu my-5">
        Rick & Morty <span className="text-primary">WiKi</span>
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <Filter />
          </div>
          <div className="col-lg-9">
            <div className="row">
              <Card results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </>
  );
}

export default App;
