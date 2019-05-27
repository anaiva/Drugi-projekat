
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
// dodavanje novog elementa liste 
function klikFunkcija() {
  var unos = document.createElement("li");
  // var tekst=document.createTextNode("");
  var unetiTekst = document.getElementById("noviToDo").value; // treba mi vrednost sta je upisano u input polju
  var tekst = document.createTextNode(unetiTekst);
  unos.appendChild(tekst); // dodeljuje elementu li tekst koji je kreiran

  //mora biti uneto nesto
  if (unetiTekst === "") {
    alert("Upisite podsetnik");
  } else {
    document.getElementById("Lista").appendChild(unos); //sve zajedno ubacuje kao novi element liste
  }
  document.getElementById("noviToDo").value = ""; // kada je dodat novi to do resetuje na prazno polje za unos

  var znak = document.createElement("span");
  var simbol = document.createTextNode("\u2716"); // x
  znak.className = "zatvori"; // povezuje sa klasom kojom uredujemo znak
  znak.appendChild(simbol); // dodeljujem x u okviru novog elementa
  unos.appendChild(znak); // dodeljujem znak u listu
  var dugmeZatvori = document.getElementsByClassName("zatvori");
  for (let i = 0; i < dugmeZatvori.length; i++) {
    dugmeZatvori[i].onclick = function () {

      var sakrij = this.parentElement;
      //sakrij.style.display="none";
      var potvrda = confirm("Da li stvarno zelite da izbrisete podsetnik")
      if (potvrda == true) {
        sakrij.remove();
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