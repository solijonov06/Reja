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
  if(createField.value === ""){
    alert("iltimos, reja qo'shing");
  }else{
    document.getElementById("item-list").insertAdjacentHTML("beforeend",itemTemplate(response.data))
    createField.value = "";
    createField.focus();
    }
})
.catch((err)=>{
    console.log("Try again later");
    
})
});

document.addEventListener("click", function(e) {
  console.log(e.target);
   if(e.target.classList.contains("delete-me")){
    if(confirm("Aniq o'chirmoqchimisiz?")){
      axios.post("/delete-item",{id: e.target.getAttribute("data-id")})
      .then((response) => {
        console.log(response.data);
        e.target.parentElement.parentElement.remove();
      })
      .catch((err) => {
        console.log("Something went wrong, try again later.");
      });
    }
  }
    // else{
    //   alert("No deb javob berildi.")
    // }
 
  //  { alert("You pressed delete button")}


 //edit oper 
  if(e.target.classList.contains("edit-me")){
    let userInput = prompt(
      "Make changes",
      e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
    if(userInput){
      axios.post("/edit-item",{
        id: e.target.getAttribute("data-id"),
        new_input: userInput,        
      })
      .then((response)=>{
        console.log(response.data);
        e.target.parentElement.parentElement.querySelector(
          ".item-text")
          .innerHTML = userInput;
      })
      .catch((err)=>{
        console.log("Something went wrong, try again later.");
      })
    }
  }
});


 document.getElementById("clean-all").addEventListener("click", function() {
  if(confirm("Hammasini o'chirmoqchimiz?")){
  
   axios.post("/delete-all",{delete_all: true})
   .then(response=>{
     console.log(response.data);
     document.location.reload();
  
   })
  }
 });


  

