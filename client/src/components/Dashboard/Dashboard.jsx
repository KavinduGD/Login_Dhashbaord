import React from "react";
import FishPrice from "../GetFishPrice/FishPrice";
import "./Dashboard.css";
import inventoryImg from "./dashboardimage/inventory.png";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ position }) => {
  const navigate = useNavigate();
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        {/* owner */}
        {position === "owner" && (
          <>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name">Fish Price Handling </div>
                <div className="dash-item-button">
                  <button
                    onClick={() => {
                      navigate("/fish-price");
                    }}
                  >
                    Manage
                  </button>
                </div>
              </div>
            </div>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name"> Salary Management</div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name">Boat Trip Management</div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name">Equipment Handling </div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name">Vahicle Management </div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name">Buyer Management </div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name">Cath Log Management</div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name">Fishmen Management </div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Sys admin */}
        {position === "sysadmin" && (
          <>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name">Fish Price Handling </div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name"> Salary Management</div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name">Boat Trip Management</div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name">Equipment Handling </div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name">Vahicle Management </div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name">Buyer Management </div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name">Cath Log Management</div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name">Fishmen Management </div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Transport */}
        {position === "tansportmanager" && (
          <>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name">Boat Trip Management</div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>

            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name">Vahicle Management </div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Inventory*/}
        {position === "iventorymanager" && (
          <>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name">Equipment Handling </div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>

            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name">Cath Log Management</div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>
          </>
        )}
        {/* wirtting person */}
        {position === "writtingperson" && (
          <>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name">Fish Price Handling </div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>
          </>
        )}

        {position === "" && (
          <>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name">Fish Price Handling </div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name"> Salary Management</div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name">Boat Trip Management</div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name">Equipment Handling </div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name">Vahicle Management </div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name">Buyer Management </div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name">Cath Log Management</div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>
            <div className="dash-item">
              <img src={inventoryImg} alt="" />

              <div className="dash-item-bottom">
                <div className="dash-item-name">Fishmen Management </div>
                <div className="dash-item-button">
                  <button>Manage</button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

// <div className="dashboard-container">
// <header className="dashboard-header">
//   <h1>Dashboard</h1>
// </header>
// <nav className="dashboard-nav">
//   <ul className="dashboard-buttons">
//     <li>
//       <Link to="/fishprice">
//         <button className="dashboard-button">
//           <img src="1.jpg" alt="Fish Price Handling" />
//         </button>
//       </Link>
//     </li>
//     <li>
//       <Link to="/employeesalary">
//         <button className="dashboard-button">
//           <img src="../dashboardimage/1.jpg" alt="Employee Salary Management" />
//         </button>
//       </Link>
//     </li>
//     <li>
//       <Link to="/boattrip">
//         <button className="dashboard-button">
//           <img src="./dashboardimage/1.jpg" alt="Boat Trip Management" />
//         </button>
//       </Link>
//     </li>
//     <li>
//       <Link to="/equipment">
//         <button className="dashboard-button">
//           <img src="./dashboardimage/1.jpg" alt="Equipment Sharing" />
//         </button>
//       </Link>
//     </li>
//     <li>
//       <Link to="/vehicle">
//         <button className="dashboard-button">
//           <img src="./dashboardimage/1.jpg" alt="Vehicle Management" />
//         </button>
//       </Link>
//     </li>
//     <li>
//       <Link to="/fishbuyer">
//         <button className="dashboard-button">
//           <img src="./dashboardimage/1.jpg" alt="Fish Buyer Management" />
//         </button>
//       </Link>
//     </li>
//     <li>
//       <Link to="/fishermen">
//         <button className="dashboard-button">
//           <img src="./dashboardimage/1.jpg" alt="Fishermen Profile Management" />
//         </button>
//       </Link>
//     </li>
//     <li>
//       <Link to="/catchlog">
//         <button className="dashboard-button">
//           <img src="./dashboardimage/1.jpg" alt="Catch Log Management System" />
//         </button>
//       </Link>
//     </li>

//   </ul>
// </nav>
// <main className="dashboard-content">
//   {pathname === '/fishprice' && <FishPrice />}

// </main>
// </div>
