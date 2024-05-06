// let arr= ["junvary, febery, March, April"]
// console.log(arr.splice(3,0,"Decmber"));
// console.log(arr);

// let arr= [5, 65, 48, 42, 43, 189]
// console.log(arr.reduce(a,b,c,d));

let burgerg = document.querySelector(".Pizza");
let rightnav = document.querySelector(".rightNav");
let navlist = document.querySelector(".nav-list");
let navbar = document.querySelector(".navbar");

burgerg.addEventListener("click", (Pizza) => {
  rightnav.classlist.toggle("v-class-resp");
  navlist.classlist.toggle("'v-class-resp'");
  navbar.classlist.toggle("h-nav-resp");
});

a = 20;
