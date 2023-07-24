document.getElementById("fetchData").addEventListener("click", fetchUserData);
document
  .getElementById("fetchDataById")
  .addEventListener("click", fetchUserDataById);
document.getElementById("createUser").addEventListener("click", CreateUser);
document.getElementById("deleteUser").addEventListener("click", deleteUser(id));

function fetchUserData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => console.log(json));
}
function fetchUserDataById() {
  fetch("https://jsonplaceholder.typicode.com/posts/5")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function CreateUser() {
  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify({
      name: "Imeuswe App",
      email: "imeuswe@example.com",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function deleteUser(id) {
  fetch("https://jsonplaceholder.typicode.com/users/2", {
    method: "DELETE",
    headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
   
  
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
    alert('Deleted user ')
}
