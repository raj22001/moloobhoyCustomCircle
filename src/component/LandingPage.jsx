import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import centerLogo from "../assets/centerlogo.png";
import { useState } from "react";
import NumberCountDown from "./NumberCountDown";

const LandingPage = () => {
  const [hoveredDiv, setHoveredDiv] = useState(null);
  const [displayerath, setDisplayerath] = useState(false);

  const getTextContent = () => {
    switch (hoveredDiv) {
      case 1:
        return "Text for A.S Moloobhoy & Sons Pvt Ltd";
      case 2:
        return "Text for About";
      case 3:
        return "Text for EMME";
      case 4:
        return "Text for A.S Moloobhoy & Sons Pvt Ltd";
      case 5:
        return "Text for Molobhoy Marine Services LLC";
    }
  };

  const getLogoSource = () => {
    switch (hoveredDiv) {
      case 1:
        return logo4;
      case 2:
        return logo2;
      case 3:
        return logo3;
      case 4:
        return logo4;
      case 5:
        return logo4;
      default:
        return null;
    }
  };

  return (
    <>
    {
        displayerath ? (
            <div className="body overflow-hidden">
        {/* Text OutSide Circle  */}
        <div className="w-[900px] h-[800px]">
          <div className="sm:hidden mobile:hidden md:block w-[100%] h-full mx-auto">
            <div className=" flex w-[100%] -mt-[8%] h-[20%]   justify-center items-center cursor-pointer">
              <h1
                onMouseEnter={() => setHoveredDiv(1)}
                onMouseLeave={() => setHoveredDiv(null)}
                className=" text-white text-xl pt-2 h-11 px-4 z-50 bg-[#8025F3] rounded-2xl font-optima font-normal ml-1.5"
              >
                A.S Moloobhoy Pvt Ltd
              </h1>
              <p className="target"></p>
            </div>

            <div className="position-2 w-[87%] mx-auto mt-[10%] h-[20%] text-white flex  cursor-pointer">
              <Link to={"/about"}>
                <h1
                  onMouseEnter={() => setHoveredDiv(2)}
                  onMouseLeave={() => setHoveredDiv(null)}
                  className=" text-xl  rounded-2xl h-11 pt-2 px-4 bg-[#8025F3]  font-optima font-normal"
                >
                  About
                </h1>
              </Link>
            </div>

            <div className="w-[123%] h-[20%] -mt-[5%] flex justify-end text-white  cursor-pointer">
              <h1
                onMouseEnter={() => setHoveredDiv(3)}
                onMouseLeave={() => setHoveredDiv(null)}
                className="ml-1.5 font-optima pt-2 h-11 px-4 bg-[#8025F3]  rounded-2xl text-xl font-normal"
              >
                A.S Moloobhoy & Sons Pvt Ltd
              </h1>
            </div>
            <li className="-mt-7"></li>
            <div className="w-[100%] -mr-[10%] h-[20%] text-white flex justify-start items-start cursor-pointer">
              <h1
                onMouseEnter={() => setHoveredDiv(4)}
                onMouseLeave={() => setHoveredDiv(null)}
                className=" pt-2 h-11 px-4 bg-[#8025F3] z-30 rounded-2xl font-optima text-xl font-normal text-white"
              >
                EMME
              </h1>
              <li></li>
            </div>

            <div className="h-[20%] w-[110%]  -mt-[7%]  flex justify-end items-end  text-white  cursor-pointer">
              <h1
                onMouseEnter={() => setHoveredDiv(5)}
                onMouseLeave={() => setHoveredDiv(null)}
                className=" pt-2 h-11 px-4 bg-[#8025F3]  rounded-2xl font-optima  text-xl  relative font-normal text-white"
              >
                Molobhoy Marine Services LLC
              </h1>
            </div>
          </div>
        </div>

        {/* Dot  */}
        <div className="container">
          <div className="w-[90%] ">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </div>
          <div className="barContainer w-[100%] h-[90%]  flex justify-center items-center">
            {hoveredDiv && (
              <div className="h-[100%] w-[100%] bg-black rounded-full z-30  inset-0 flex justify-center items-center flex-col  my-auto  ">
                <img
                  src={getLogoSource()}
                  alt=""
                  className="w-[80%] h-[50%] mb-6 z-50  object-contain animated fadeInUp"
                />
                <p className="text-white font-optima font-normal z-50  w-[40%] mt-[3%] text-center relative animated slideInLeft">
                  {getTextContent()}
                </p>
              </div>
            )}
          </div>

          <div className="lightContainer">
            <div className="light"></div>
          </div>

          <div className="circle " style={{ "--wh": "560px" }}></div>
          <div className="circle " style={{ "--wh": "400px" }}></div>
          <div className="circle " style={{ "--wh": "250px" }}></div>
          <div className="circle z-20 " style={{ "--wh": "90px" }}>
            <img
              src={centerLogo}
              className="w-full h-full object-contain rotate-animation"
              alt=""
            />
          </div>

          <div className="center"></div>

          <div className="lines z-10">
            <div className="line z-10"></div>
            <div className="line z-10"></div>
          </div>
          <div className="lines lines2 z-10">
            <div className="line z-10"></div>
            <div className="line z-10"></div>
          </div>
          <div className="lines lines3 z-10">
            <div className="line z-10"></div>
            <div className="line z-10"></div>
          </div>

          <div className="lines lines4 z-10">
            <div className="line z-10"></div>
            <div className="line z-10"></div>
          </div>
        </div>
      </div>
        ) : (
            <NumberCountDown setDisplayerath={setDisplayerath}/>
        )
    }
      
    </>
  );
};

export default LandingPage;
