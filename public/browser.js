console.log("Frontend JS file loaded successfully.");

let createField = document.getElementById("create-field");

function itemTemplate(item){
    return `<li
        class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
      <span class="item-text"> ${item.reja}</span>
      <div>
        <button data-id="${item._id}"
         class="edit-me btn btn-secondary btn-sm mr-1">
          Change          
        </button>
        <button data-id="${item._id}"
          class="btn btn-danger delete-me btn-sm" >
          Remove
          </button>
        </div>
      </li>`;
};



document.getElementById("create-form")
.addEventListener("submit", function(e) {
e.preventDefault();
axios
.post("/create-item",{reja: createField.value})
.then((response)=>{
    document.getElementById("item-list").insertAdjacentHTML("beforeend",itemTemplate(response.data))
    createField.value = "";
    createField.focus();
})
.catch((err)=>{
    console.log("Try again later");
})
});
