const itemArray = [];
const getButtonAdd = document.querySelector("#btn-add");
getButtonAdd.addEventListener("click", addItem);

function addItem() {
  // e.preventDefault();
  const getItem = document.getElementById("todoitem").value;
  if (getItem === "") return;
  const eachItem = {
    id: itemArray.length + 1,
    name: getItem.trim(),
  };
  itemArray.push(eachItem);
  localStorage.setItem("todo", JSON.stringify(itemArray));
  const getList = JSON.parse(localStorage.getItem("todo"));
  const getDiv = document.querySelector(".item-list");

  getDiv.insertAdjacentHTML ('afterbegin', `
    <div class="view">
    <h2>${getList[getList.length - 1].name}</h2>
    
    <i class="bx bxs-edit bx-sm "style="width:40%" onclick="editFunc(event)"></i>
    <i class="bx bx-trash bx-sm " style="width:40%" onclick="deleteFunc(event)"></i>
    
    </div>`);
    
        let getVal= document.getElementById("todoitem");
            if (getVal.value !="") {
                getVal.value = "";
            }      

}



function editFunc(event) {
  const getItem = document.querySelector(".item");
  getItem.style.display = "block";
  const getItem2 = document.querySelector("#todoitem");
  getItem2.style.display = "none";
  const getDetail = event.target.previousElementSibling.textContent;
  let change = localStorage.setItem('change',getDetail);
  getItem.setAttribute("value", getDetail);
  const getButtonAdd = document.querySelector("#btn-add");
  getButtonAdd.style.display = "none";
  const getButtonEdit = document.querySelector("#btn-edit");
  getButtonEdit.style.display = "block";
  console.log(event.target);
}

function edititem(id) {
  const getList = JSON.parse(localStorage.getItem("todo"));
  console.log(getList)
  const getChange = localStorage.getItem('change');
  const getItem = document.querySelector(".item").value;

 for (let each of getList)
if (getChange === each.name){
    each.name = getItem;
}
  
}

function deleteFunc(event) {
  const getDetail = event.target.parentElement;
  getDetail.remove();
}

