// "use client";
// import { useEffect } from "react";
// import { confetti } from "tsparticles-confetti";

// const defaults = {
//   spread: 360,
//   ticks: 100,
//   gravity: 0.5,
//   decay: 0.94,
//   startVelocity: 30,
// };

// export const FireworkConfetti = () => {
//   useEffect(() => {
    
//     function shoot() {
//         // Regular confetti with colors
//         // confetti({
//         //   ...defaults,
//         //   particleCount: 30,
//         //   scalar: 1.2,
//         //   shapes: ["circle", "square"],
//         //   colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
//         // });

//         console.log("Shooting confetti!");

//         // Fire emoji confetti with proper scalar
//         confetti({
//           ...defaults,
//           particleCount: 15,
//           scalar: 1.0,
//           shapes: ["emoji"],
//           shapeOptions: {
//             emoji: {
//               value: ["🔥", "⭐", "✨"],
//             },
//           },
//         });
//       }


//     const interval = setInterval(() => {
//       setTimeout(shoot, 0);
//       setTimeout(shoot, 100);
//       setTimeout(shoot, 200);
//     }, 250);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return <>
//   </>;
// };
