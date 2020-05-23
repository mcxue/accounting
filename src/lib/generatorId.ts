// 1,2,3,3,4
let id: number = parseInt(window.localStorage.getItem('_idMax')|| '0') ||0;

function generatorId() {
  id++;
  window.localStorage.setItem('_idMax',JSON.stringify(id));
  return id;
}

export default generatorId