const objectArray = [
  { name: "Pepe", lastname: "Gomez", age: 32 },
  { name: "Juan", lastname: "Andres", age: 44 },
  { name: "Nicolas", lastname: "Garcia", age: 22 },
  { name: "Pepe", lastname: "Amigo", age: 15 },
  { name: "Alfredo", lastname: "Franco", age: 255 },
];

function addRow(element) {
const tbody = document.getElementById("data");
tbody.innerHTML += `<tr>
<td>${element.name}</td>
<td>${element.lastname}</td>
<td>${element.age}</td>
</tr>`;
}
document.addEventListener("DOMContentLoaded", () =>{
objectArray.sort((a,b)=>a.name.localeCompare(b.name));

for(let item of objectArray){
  addRow(item);
}
});