import React from "react";
import HeaderMain from "./HeaderMain";
import "./sliderMain.scss";
// import video from "./../../../../../../public/nike-pegasus-39.mp4"

const MainPhoto = () => {
  return (
    <div className="main">
      {/* <img
        className="hidden lg:block xl:block md:block"
        src="https://i.imgur.com/JBJs0fP.png"
        alt="mainphoto"
      />
      <img
        className="lg:hidden xl:hidden md:hidden block"
        src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgsb/w_437,c_limit/3de1514d-116e-4aa2-ab35-9a49e56c72e6/resmi-nike-sitesi.jpg"
        alt="phonephoto"
      /> */}
      <video playsInline autoPlay muted loop width="1600px" height="1200px"  src="nike-pegasus-39.mp4" type="video/mp4">
        {/* <source src="./../../../../../../public/nike-pegasus-39.mp4" type="video/mp4"/>
        <source src="/media/cc0-videos/flower.webm"
            type="video/webm"></source> */}
        Sorry, your browser doesn't support embedded videos.
      </video>
      <HeaderMain />
    </div>
  );
};

export default MainPhoto;
