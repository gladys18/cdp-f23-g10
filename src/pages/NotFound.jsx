import React from "react";
import bgimg from '../../src/assets/all-images/boats-img/8892821_20230606024603764_1_XLARGE.jpg'
const NotFound = () => {
  return (
  <div style={{ width: "222vh", height: "100vh", backgroundSize:"cover", backgroundImage: `url(${bgimg})`}} >
<h1 style={{position:"absolute", top:480, left:450, color:'white', fontWeight:"bolder", fontSize:80}}>404 Not Found</h1>
  </div>
  );
};

export default NotFound;
