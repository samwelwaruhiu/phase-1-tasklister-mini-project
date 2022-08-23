


document.addEventListener("DOMContentLoaded", () => {
let form = document.querySelector(`form`)
form.addEventListener(`submit`, (e) => {
e.preventDefault()
const texts = document.getElementById(`newtask-description`).value;
buildToDo(texts)
  form.reset();
})
  //your code here...
 
 function buildToDo(todo){
  let p = document.createElement(`p`);
    let btn = document.createElement (`button`);
    btn.addEventListener(`click`,handleDelete);
  btn.textContent = `   Delete `
    p.textContent = ` ${todo}`;
    p.appendChild(btn);
    console.log(p);
    document.querySelector(`#list`).appendChild(p)
  }

  function handleDelete(e){
    e.target.parentNode.remove();
  }
})
