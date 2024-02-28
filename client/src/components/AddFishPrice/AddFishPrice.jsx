import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddFishPrice.css";
import toast from "react-hot-toast";

const AddFishPrice = () => {
  const fishprices = {
    name: "",
    species: "",
    grade: "",
    wolesale_price: "",
    retail_price: "",
    average_weight: "",
    availability: "",
  };

  const [fishprice, setFishPrice] = useState(fishprices);
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const inputHandler = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };
    if (
      name === "wolesale_price" ||
      name === "retail_price" ||
      name === "average_weight"
    ) {
      if (!/^\d+(\.\d+)?$/.test(value)) {
        newErrors[name] =
          "You can only Insert Positive Integer or Decimal Number";
      } else {
        delete newErrors[name];
      }
    }
    setErrors(newErrors);
    setFishPrice({
      ...fishprice,
      [name]: name === "grade" ? value.toUpperCase() : value,
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/fish/createfish",
          fishprice
        );
        if (response.status === 200) {
          toast.success("Fish Details Added Successfully", {
            position: "top-right",
          });
          navigate("/fishprice"); // Navigate to FishPrice page after successful response
        } else {
          toast.error("Failed to add fish price", { position: "top-right" });
        }
      } catch (error) {
        toast.error("An error occurred while adding fish price", {
          position: "top-right",
        });
        console.error("Error adding fish price: ", error);
      }
    } else {
      toast.error("Please fix the errors before submitting", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="AddFishPrice">
      <button class="back-button">
        <Link to={"/fishprice"}>Back</Link>
      </button>
      <h3>Add A New Fish</h3>
      <form className="AddFishPrice" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            onChange={inputHandler}
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Name of The Fish"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="Species">Species</label>
          <input
            type="text"
            onChange={inputHandler}
            id="species"
            name="species"
            autoComplete="off"
            placeholder="Species"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="Grade">Grade</label>
          <select id="grade" name="grade" onChange={inputHandler}>
            <option value="">Select a Grade</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>
        <div className="inputGroup">
          <label htmlFor="Wolesale Price">Wolesale Price</label>
          <input
            type="text"
            onChange={inputHandler}
            id="wolesale_price"
            name="wolesale_price"
            autoComplete="off"
            placeholder="Wolesale Price per 1kg"
          />
          {errors.wolesale_price && (
            <span className="error">{errors.wolesale_price}</span>
          )}
        </div>
        <div className="inputGroup">
          <label htmlFor="Retail Price">Retail Price</label>
          <input
            type="text"
            onChange={inputHandler}
            id="retail_price"
            name="retail_price"
            autoComplete="off"
            placeholder="Retail Price per 1kg"
          />
          {errors.retail_price && (
            <span className="error">{errors.retail_price}</span>
          )}
        </div>
        <div className="inputGroup">
          <label htmlFor="Average Weight">Average Weight</label>
          <input
            type="text"
            onChange={inputHandler}
            id="average_weight"
            name="average_weight"
            autoComplete="off"
            placeholder="Today Average Weight of One Fish"
          />
          {errors.average_weight && (
            <span className="error">{errors.average_weight}</span>
          )}
        </div>
        <div className="inputGroup">
          <label htmlFor="Availability">Availability</label>
          <select id="availability" name="availability" onChange={inputHandler}>
            <option value="">Select Availability</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="inputGroup">
          <button type="submit" className="submitButton">
            ADD A Fish
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFishPrice;
