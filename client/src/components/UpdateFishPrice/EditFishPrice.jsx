import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../AddFishPrice/AddFishPrice.css";
import toast from "react-hot-toast";

const EditFishPrice = () => {
  const fishprices = {
    name: "",
    species: "",
    grade: "",
    wolesale_price: "",
    retail_price: "",
    average_weight: "",
    availability: "",
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [fishprice, setFishPrice] = useState(fishprices);
  const [errors, setErrors] = useState({});

  const inputChangeHandler = (e) => {
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

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/fish/getonefish/${id}`)
      .then((response) => {
        setFishPrice(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.put(
          `http://localhost:4000/api/fish/updatefish/${id}`,
          fishprice
        );
        if (response.status === 200) {
          toast.success("Fish Details Updated Successfully", {
            position: "top-right",
          });
          navigate("/fishprice");
        } else {
          toast.error("Failed to Updated fish price", {
            position: "top-right",
          });
        }
      } catch (error) {
        toast.error("An error occurred while Updating fish price", {
          position: "top-right",
        });
        console.error("Error Updating fish price: ", error);
      }
    } else {
      toast.error("Please fix the errors before submitting", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="AddFishPrice">
      <button className="back-button">
        <Link to={"/fishprice"}>Back</Link>
      </button>
      <h3>Update Fish Details</h3>
      <form className="AddFishPrice" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            onChange={inputChangeHandler}
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Name of The Fish"
            value={fishprice.name}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="Species">Species</label>
          <input
            type="text"
            onChange={inputChangeHandler}
            id="species"
            name="species"
            autoComplete="off"
            placeholder="Species"
            value={fishprice.species}
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="Grade">Grade</label>
          <select
            id="grade"
            name="grade"
            onChange={(e) =>
              setFishPrice({
                ...fishprice,
                grade: e.target.value.toUpperCase(),
              })
            }
            value={fishprice.grade}
          >
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
            onChange={inputChangeHandler}
            id="wolesale_price"
            name="wolesale_price"
            autoComplete="off"
            placeholder="Wolesale Price per 1kg"
            value={fishprice.wolesale_price}
          />
          {errors.wolesale_price && (
            <span className="error">{errors.wolesale_price}</span>
          )}
        </div>
        <div className="inputGroup">
          <label htmlFor="Retail Price">Retail Price</label>
          <input
            type="text"
            onChange={inputChangeHandler}
            id="retail_price"
            name="retail_price"
            autoComplete="off"
            placeholder="Retail Price per 1kg"
            value={fishprice.retail_price}
          />
          {errors.retail_price && (
            <span className="error">{errors.retail_price}</span>
          )}
        </div>
        <div className="inputGroup">
          <label htmlFor="Average Weight">Average Weight</label>
          <input
            type="text"
            onChange={inputChangeHandler}
            id="average_weight"
            name="average_weight"
            autoComplete="off"
            placeholder="Today Average Weight of One Fish"
            value={fishprice.average_weight}
          />
          {errors.average_weight && (
            <span className="error">{errors.average_weight}</span>
          )}
        </div>
        <div className="inputGroup">
          <label htmlFor="Availability">Availability</label>
          <select
            id="availability"
            name="availability"
            onChange={inputChangeHandler}
            value={fishprice.availability}
          >
            <option value="">Select Availability</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="inputGroup">
          <button type="submit">UPDATE Fish Details</button>
        </div>
      </form>
    </div>
  );
};

export default EditFishPrice;
