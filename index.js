//1. API url
const url = "https://jsonplaceholder.typicode.com/users";
//2. Fetch users from the API Url
function fetchUsers() {
    // 2.1 Make use of the browser fetch API
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        renderUsers(data);
    });
}


//3. Render the users in the DOM
function renderUsers(usersData) {
    // console.log("from renderUsers");
    console.log(usersData);
    const ul = document.getElementById("user-list-container");
    console.log(ul);

//Render an li tag for each of the users
    usersData.forEach((user, index) => {
        console.log(user, index + 1);
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${index + 1} </span>
        <span>${user.name} </span>
        <span>-</span>
        <span class="username">${user.username} </span>
        `;

        // Append the current user li tag to the UL tag
        ul.appendChild(li);    
    });
}
//4. Add a search function to the DOM
function searchUsersByUsername(){
    const input = document.getElementById("search");
    const ul = document.getElementById("user-list-container");
    const inputValue = input.value.toUpperCase();
    const userList = ul.querySelectorAll("li");
    
    for (let index = 0; index < userList.length; index++) {
        const usernameSpanTag = userList[index].querySelector(".username");
        const usernameSpanTagValue = usernameSpanTag.innerText.toUpperCase();
        const isMatch = usernameSpanTagValue.indexOf(inputValue) > -1;

        if(isMatch) {
            userList[index].style.display = "block";
        } else {
            userList[index].style.display = "none";
        }
    }
}


// Calling the fetch function
fetchUsers();

