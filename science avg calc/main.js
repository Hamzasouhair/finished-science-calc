



// Button click listener 
document.getElementById("btn").addEventListener("click", finalGrade);


function finalGrade() {
  console.log("page is running");
    //Input
    let First = +document.getElementById("one").value;
    let Second = +document.getElementById("two").value;
    let Third = +document.getElementById("three").value;


      //Proccess 
      let avg = Math.sqrt(one + two + three)/3;
      let msg = `grade = ${avg}`;
  
   // Output 
   document.getElementById("out").innerHTML = (avg);

}

