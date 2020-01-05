import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const NavEcom = () => {

  const [navEcom, setNavEcom] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:3000/navecom`);
        const json = await response.json();
        console.log(json[0].submenu);
        setNavEcom(json.map(item => {
          return (
            <li key={item.id}>
              <Link to="#">{item.name}</Link>
              <ul>
                <li>{console.log(item)}</li>
              </ul>
            </li>
          )
        }

        ));

        setLoading(false);
      } catch (error) { console.log(error) }
    }

    fetchData();
  }, [])



  return (
    <>
      <div className="ref">NavEcom.js</div>
      <div className="navecom">
        <ul>
          {loading
            ? <h3 className="danger">Loading... or Error: Fail to fetch</h3>
            : navEcom
          }
        </ul>
      </div>
    </>
  );
};

export default NavEcom;
