// Text & Submit-----------

let btn = document.getElementById("btn");
var addlist = document.getElementById("add-list");
btn.addEventListener("click", addList);

//------------------------
function cross(e) {
  console.log(e.target);
  e.target.classList.add("done-line");
}
function remove(e) {
  console.log(e.target);
  e.target.classList.remove("done-line");
}

function revv(e) {
  addlist = document.getElementById("add-list");
  console.log(e);
  console.log(addlist)
  addlist.removeChild(e.target.parentNode.parentNode);
}
//btn-funtion-------------

function addList() {
  var val = document.getElementById("inp").value;

  //Div Gen
  if (val) {
    let divGen = document.createElement("div");
    divGen.classList.add("animate__animated", "animate__bounceIn");
    divGen.classList.add("divGen");

    // divGen.innerHTML = `<p style="margin-bottom: 0px !important;" class="val"> ${val} </p>
    //                             <button type="button" class="btn btn-danger" class="remove"><i class="far fa-trash-alt"></i></button>`;

    let para = document.createElement("p");
    para.innerHTML = val;
    divGen.append(para);
    para.addEventListener("click", (e) => cross(e));
    para.addEventListener("dblclick", (e) => remove(e));
    let rev = document.createElement("button");

    rev.addEventListener("click", (e) => revv(e));

    rev.innerHTML = `<i class="far fa-trash-alt"></i>`;
    rev.classList.add('removebtn');
    divGen.append(rev);

    addlist.append(divGen);

    var textVal = document.getElementById("inp");
    textVal.value = "";

    // double click cross

    // let p = document.querySelector(".val");
    // p.addEventListener("click", cross);

    // Remove

    // let rev = document.getElementsByClassName('remove');
    //  rev.addEventListener('click', removeList);
    //   function removeList(){
    //     addlist.removeChild(divGen);
    //   }
  } else {
    alert("Add something to-do");
  }
}
