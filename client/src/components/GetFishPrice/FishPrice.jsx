import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "./FishPrice.css";
import Select from "react-select";
import "jspdf-autotable";

const FishPrice = () => {
  const [fishprices, setFishPrices] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedGrade, setSelectedGrade] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [confirmDelete, setConfirmDelete] = useState(false); // Track confirmation state
  const [deleteId, setDeleteId] = useState(null); // Track id of fish to delete
  const tableRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:4000/api/fish/getallfish"
      );
      setFishPrices(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleDelete = async () => {
    if (deleteId) {
      await axios
        .delete(`http://localhost:4000/api/fish/deletefish/${deleteId}`)
        .then((response) => {
          setFishPrices((prevFishPrices) =>
            prevFishPrices.filter((fishprice) => fishprice._id !== deleteId)
          );
          toast.success(response.data.msg, { position: "top-right" });
          setDeleteId(null); // Reset deleteId
          setConfirmDelete(false); // Close confirmation dialog
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleGradeChange = (selectedOption) => {
    setSelectedGrade(selectedOption.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const gradeOptions = [
    { value: "", label: "All" },
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
  ];

  const filteredFishPrices = fishprices
    .filter(
      (fishprice) => fishprice.grade === selectedGrade || selectedGrade === ""
    )
    .filter((fishprice) =>
      fishprice.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const downloadPDF = () => {
    const { jsPDF } = require("jspdf");
    const doc = new jsPDF();
    const tableData = filteredFishPrices.map(
      ({
        name,
        species,
        grade,
        wolesale_price,
        retail_price,
        average_weight,
        availability,
      }) => [
        name,
        species,
        grade,
        wolesale_price,
        retail_price,
        average_weight,
        availability,
      ]
    );
    doc.autoTable({
      head: [
        [
          "Name",
          "Species",
          "Grade",
          "Wholesale Price",
          "Retail Price",
          "Average Weight",
          "Availability",
        ],
      ], // Include 'Availability' in the head
      body: tableData,
      startY: 20,
      styles: {
        halign: "center",
        valign: "middle",
        fontSize: 12,
        cellPadding: 4,
        lineWidth: 0.1,
        lineColor: [0, 0, 0],
      },
      columnStyles: {
        0: { cellWidth: 30 },
        1: { cellWidth: 20 },
        2: { cellWidth: 20 },
        3: { cellWidth: 30 },
        4: { cellWidth: 30 },
        5: { cellWidth: 30 },
        6: { cellWidth: 20 },
      },
    });
    doc.text(15, 10, `Fish Price List - ${currentDate.toLocaleDateString()}`);
    doc.save("fish_price_list.pdf");
  };

  return (
    <div className="FishPriceTable">
      <div className="header">
        <div className="buttonGroup">
          <Link to="/dashboard" className="back-button">
            Back To Dashboard
          </Link>
          <div className="searchBar">
            <input
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
        <center>
          <h1 className="date">
            {currentDate.toLocaleDateString()} Fish Price List
          </h1>
        </center>
        <Select
          options={gradeOptions}
          value={gradeOptions.find((option) => option.value === selectedGrade)}
          onChange={handleGradeChange}
          placeholder="Grade"
          className="grade-select"
          classNamePrefix="grade-select"
        />
        <div className="addButton">
          <Link to={"/addfish"} className="link">
            Add A New Fish
          </Link>
        </div>
        <div className="downloadButtonContainer">
          <button onClick={downloadPDF} className="downloadButton">
            Download Fish Price List
          </button>
        </div>
      </div>
      <div id="table-container" ref={tableRef}>
        <table border={1} cellPadding={10} cellSpacing={0}>
          <thead>
            <tr>
              <th className="header2">Name</th>
              <th className="header1">Species</th>
              <th className="header2">Grade</th>
              <th className="header1">Wholesale Price</th>
              <th className="header2">Retail Price</th>
              <th className="header1">Average Weight</th>
              <th className="header1">Today Availability</th>
            </tr>
          </thead>
          <tbody>
            {filteredFishPrices.map((fishprice, index) => {
              return (
                <tr
                  key={fishprice._id}
                  className={index % 2 === 0 ? "evenRow" : "oddRow"}
                >
                  <td>{fishprice.name}</td>
                  <td>{fishprice.species}</td>
                  <td>{fishprice.grade}</td>
                  <td>{fishprice.wolesale_price}</td>
                  <td>{fishprice.retail_price}</td>
                  <td>{fishprice.average_weight}</td>
                  <td>
                    {fishprice.availability === "Yes" ? (
                      <button
                        style={{
                          backgroundColor: "#ffaf54",
                          color: "black",
                          padding: "10px",
                          borderRadius: "5px",
                          border: "none",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        YES
                      </button>
                    ) : (
                      <button
                        style={{
                          backgroundColor: "#4be3f7",
                          color: "black",
                          padding: "10px",
                          borderRadius: "5px",
                          border: "none",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >
                        NO
                      </button>
                    )}
                  </td>
                  <td className="actionButtons">
                    <button
                      onClick={() => {
                        setDeleteId(fishprice._id);
                        setConfirmDelete(true);
                      }}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                    <Link to={`/editfish/${fishprice._id}`}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* Confirmation modal */}
      {confirmDelete && (
        <div className="confirmationModal">
          <div className="confirmationContent">
            <h2>Do You Want Delete This Fish?</h2>
            <div className="confirmationButtons">
              <button onClick={handleDelete}>Yes</button>
              <button onClick={() => setConfirmDelete(false)}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FishPrice;
