var list = document.querySelector('ul');
list.addEventListener('click', function (ev) { // na klik dodaj klasu cekiran
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    
    
  }
  
}, false);

// brise oznacene
function obrisiVise() {
  
  var elementsChecked = document.querySelectorAll('ul > li.checked');
  var i;
  for (i = 0; i < elementsChecked.length; i++) {
    elementsChecked[i].remove();
  }
}

var listaDodatih = [];
var novi = document.getElementById("noviToDo");
// dodavanje novog elementa liste 
function klikFunkcija() {
  var unos = document.createElement("li");
  var unetiTekst = novi.value; // treba mi vrednost sta je upisano u input polju  
 
  var tekst = document.createTextNode(unetiTekst);
 
  unos.appendChild(tekst); // dodeljuje elementu li tekst koji je kreiran
 
  //mora biti uneto nesto
  if (unetiTekst === "") {
    alert("Upisite podsetnik");
  } else {
    document.getElementById("listaToDo").appendChild(unos); //sve zajedno ubacuje kao novi element liste           
  }
  novi.value = ""; // kada je dodat novi to do resetuje na prazno polje za unos

  var znak = document.createElement("span");
  var simbol = document.createTextNode("\u2716"); // x
  znak.className = "zatvori"; // povezuje sa klasom kojom uredujemo znak
  znak.appendChild(simbol); // dodeljujem x u okviru novog elementa
  unos.appendChild(znak); // dodeljujem znak u listu
  var dugmeZatvori = document.getElementsByClassName("zatvori");
  for (let i = 0; i < dugmeZatvori.length; i++) {
    dugmeZatvori[i].onclick = function () {

      var oznacenBrisi = this.parentElement;
      //sakrij.style.display="none";
      var potvrda = confirm("Da li stvarno zelite da izbrisete podsetnik")
      if (potvrda == true) {
        oznacenBrisi.remove();
      }
    }
  }
}
 
  // za svaki ponaosob dugme za brisanje
 /* var dugmeZatvori = document.getElementsByClassName("zatvori");
  for (let i = 0; i < dugmeZatvori.length; i++) {
    dugmeZatvori[i].onclick = function () {
      var sakrij = this.parentElement;
      //sakrij.style.display="none";
      var potvrda = confirm("Da li stvarno zelite da izbrisete podsetnik")
      if (potvrda == true) {
      sakrij.remove();
      }
    }
  }*/
  // overlay
  // function on() {
  //   document.getElementById("overlay").style.display = "block";
  // }

  // function off() {
  //   document.getElementById("overlay").style.display = "none";
  // }

//   var a= document.querySelector('ul');
// a.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'li') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);
/* var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false); */

// function myFunction() {
//   var txt;
//   var r = confirm("Press a button!");
//   if (r == true) {
//     txt = "You pressed OK!";
//   } else {
//     txt = "You pressed Cancel!";
//   }
//   document.getElementById("demo").innerHTML = txt;
// }
// function myFunction() {
//   var node = document.createElement("LI");
//   var textnode = document.createTextNode("Water");
//   node.appendChild(textnode);
//   document.getElementById("myList").appendChild(node);
// }

// var highlightedItems = userList.querySelectorAll(".highlighted");

// highlightedItems.forEach(function(userItem) {
//   deleteUser(userItem);
// });

// Find out how many elements with class="child" there are inside of a <div> element (using the length property of the NodeList object):

/* <body>

<div id="myDIV">
  <p class="child">A p element with class="child" in a div.</p>
  <p class="child">Another p element with class="child" in a div.</p>
  <p class="child">A third p element with class="child" in a div.</p>
</div>

<p>Click the button to find out how many elements with class "child" there are inside the div element.</p>

<button onclick="myFunction()">Try it</button>

<p><strong>Note:</strong> The getElementsByClassName() method is not supported in Internet Explorer 8 and earlier versions.</p>

<p id="demo"></p>

<script>
function myFunction() {
  var x = document.getElementById("myDIV").getElementsByClassName("child");
  document.getElementById("demo").innerHTML = x.length;
}
</script> */


// Change the background color of all elements with class="child" inside of a <div> element:

/* <body>

<div id="myDIV">
  <p class="child">A p element with class="child" in a div.</p>
  <p class="child">Another p element with class="child" in a div.</p>
  <p>A p element in div with a <span class="child">span element with class="child"</span> inside of it.</p>
</div>

<p>Click the button to add a background color to all elements with class="child" inside the div element with id="myDIV".</p>

<button onclick="myFunction()">Try it</button>

<p><strong>Note:</strong> The getElementsByClassName() method is not supported in Internet Explorer 8 and earlier versions.</p>

<script>
function myFunction() {
  var x = document.getElementById("myDIV");
  var y = x.getElementsByClassName("child");
  var i;
  for (i = 0; i < y.length; i++) {
    y[i].style.backgroundColor = "red";
  }
}
</script> */

//lical storage

/* <script>
function clickCounter() {
  if(typeof(Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}
</script> */

