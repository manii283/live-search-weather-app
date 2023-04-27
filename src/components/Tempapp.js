// import React, { useState, useEffect } from "react";
// import "./css/style.css";

// const Tempapp = () => {
//   const [city, setCity] = useState(null);
//   const [search, setSearch] = useState('mumbai');

//   useEffect(() => {
//     const fetchApi = async () => {
//       const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9a78c082b841677834a407dfd103fbb2`;
//       const response = await fetch(url);
//       const resJson = await response.json();
//       setCity(resJson.main);
//       console.log(resJson)
//     };
//     fetchApi();
//   }, [search]);
//   return (
//     <>
//       <div className="box">
//         <div className="inputData">
//           <input
//             type="search"
//             className="inputField"
//             onChange={(event) => {
//               setSearch(event.target.value);
//             }}
//           />
//         </div>

//         {!city ? (
//           <p> No Data Found </p>
//         ) : (
//           <div>
//             <div className="info">
//               <h2 className="location">
//                 <i className="fa-solid fa-street-view"></i>
//                 {search}
//               </h2>
//               <h1 className="temp">{city.temp}</h1>
//               <h3 className="tempmin_max"> Min : {city.main.temp} | Max : {city.main.temp} </h3>
//             </div>
//             <div className="wave1"></div>
//             <div className="wave2"></div>
//             <div className="wave3"></div>
//           </div>
//          )} 
//       </div>
//     </>
//   );
// };

// export default Tempapp;


import React, { useState, useEffect } from 'react';
import './css/style.css';
const TempApp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('Mumbai');
    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9a78c082b841677834a407dfd103fbb2`;
            const response = await fetch(url);
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);
        }
        fetchApi();
    }, [search]);
    return (
        <div className='container'>
        <div className='box'>
            <div className='inputData'>
                <input type='search' className='inputField' placeholder='Search temperature'
                    onChange={(event) => {
                        setSearch(event.target.value);
                    }}
                />
            </div>
            {
                !city ? (
                    <p>No data found</p>
                ) : (
                  <>
                    <div className='info'>
                        <h2 className='location'>
                        <i className="fas fa-street-view"/>{search}
                        </h2>
                        <h1 className='temp'>{city.temp}°C</h1>
                        <h3 className='tempmin_max'>Min : {city.temp_min}°C | Max : {city.temp_max}°C</h3>
                    </div>
                     <div className="wave1"></div>
                    <div className="wave2"></div>
                    <div className="wave3"></div>
                    </>
                )}
        </div>
        </div>
    )
}
export default TempApp