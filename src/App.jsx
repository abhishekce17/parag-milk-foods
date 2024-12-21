import { useId, useState } from "react";
import UserForm from "./components/user-form";
import Summary from "./components/summary-section";

function App() {

  return (
    <div className="app" >
      <div className='section' >
        <Summary />
        <UserForm />
      </div>
    </div>
  )
}

export default App;





































// const [shouldMove, setShouldMove] = useState(true);
//   const [normal, setNormal] = useState(0);
//   const [throtll, setThrotll] = useState(0);



//   const handleMouseMove = (e) => {
//     //Debouncing
//     // if (mousemoveTime) clearTimeout(mousemoveTime);
//     // const time = setTimeout(() => {
//     //   const circle = document.getElementById("circle");
//     //   const rect = e.target.getBoundingClientRect();
//     //   console.log(rect)
//     //   const offsetX = e.clientX - rect.left;
//     //   const offsetY = e.clientY - rect.top;
//     //   // const radius = circle.offsetWidth / 2;
//     //   circle.style.transform = `translate(${offsetX - 50}px, ${offsetY - 50}px)`;
//     // }, 100);
//     // setMouseMoveTime(time);


//     //Throttling
//     // let shouldMove = true;
//     setNormal(prev => ++prev)
//     if (shouldMove) {
//       setThrotll(prev => ++prev)
//       console.log("throtlling")
//       const circle = document.getElementById("circle");
//       const rect = e.target.getBoundingClientRect();
//       // console.log(rect)
//       const offsetX = e.clientX - rect.left;
//       const offsetY = e.clientY - rect.top;
//       // const radius = circle.offsetWidth / 2;
//       circle.style.transform = `translate(${offsetX - 50}px, ${offsetY - 50}px)`;
//       setShouldMove(false);
//       setTimeout(() => setShouldMove(true), 100);
//     }
//   };

//   // useEffect(() => {
//   //   const container = document.getElementById("container");
//   //   container.addEventListener("mousemove", handleMouseMove);
//   //   return () => container.removeEventListener("mousemove", handleMouseMove);
//   // }, []);

//   return (
//     <>
//       <h1>normal - {normal} </h1>
//       <h1>throtll - {throtll} </h1>
//       <div
//         onMouseMove={handleMouseMove}
//         id="container"
//         style={{ height: "80vh", width: "80vw", backgroundColor: "green", position: "relative" }}
//       >
//         <div
//           id="circle"
//           style={{
//             height: "100px",
//             width: "100px",
//             borderRadius: "50%",
//             backgroundColor: "white",
//             position: "absolute",
//             top: 0,
//             left: 0,
//             pointerEvents: "none",
//             transition: "all",
//             transitionDuration: "0.2s"
//           }}
//         ></div>
//       </div>
//     </>
//   );