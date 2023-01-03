
// onOver
export function onOver() {
  document.getElementById("div").style.transform = "translateY(-20px)";
    document.getElementById("div").style.boxShadow = "10px 10px 10px white";

  const elements = ["price",  "name", "label1", "label2", "btn"];
  for (const element of elements) {
    document.getElementById(element).style.transform = "translateY(-20px)";
    document.getElementById(element).style.boxShadow = "10px 10px 10px white";
  };
//
   if (document.getElementById("label3") && document.getElementById("description")) {
    const elements = ["label3", "description"];
    for (const element of elements) {
    document.getElementById(element).style.transform = "translateY(-20px)";
    document.getElementById(element).style.boxShadow = "10px 10px 10px white";
    } 
   }

};

// OnOut
export function onOut() {
      document.getElementById("div").style.transform = "translateY(0px)";
      //
   const elements = ["name", "label1", "label2", "price", "btn"];
         for (const element of elements) {
  document.getElementById(element).style.transform = "translateY(0px)";
  document.getElementById(element).style.boxShadow = "none";
  };
  //
   if (document.getElementById("label3") && document.getElementById("description")) {
    const elements = ["label3", "description"];
    for (const element of elements) {
      document.getElementById(element).style.transform = "translateY(0px)";
      document.getElementById(element).style.boxShadow = "none";
    } 
   }
 
};

// ClickOut
 export function ClickOut() { document.body.addEventListener("click", function (event) {
    if (!event.target.closest("#div")) {
      document.getElementById("div").style.boxShadow = "none";
    }
  });
};

  //* Now I don't need it 
  //* ClickIn
//  export function ClickIn() { document.body.addEventListener("click", function (event) {
//     if (event.target.closest("#div")) {
//       document.getElementById("div").style.boxShadow = "10px 10px 10px white";
//     }
//   });
// };

