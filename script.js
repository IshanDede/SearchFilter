const filter = document.getElementById("filter");
const result = document.getElementById("result");
const userList = [];

getData();

filter.addEventListener("input", (e) => searchFilter(e.target.value));

async function getData() {
  const dataObject = await fetch("https://randomuser.me/api?results=50");
  const { results } = await dataObject.json();

  result.innerHTML = "";
  //above displays "loading..." till getData() executes completely then removes when the results display.
  results.forEach((user) => {
    const li = document.createElement("li");
    userList.push(li);
    li.innerHTML = `<img src="${user.picture.large}">
    <div class="user-info">
    <h4>${user.name.first} ${user.name.last}</h4>
    <p>${user.location.city},${user.location.country}</p>
    </div>`;

    result.appendChild(li);
  });
}

function searchFilter(search) {
  const check = userList.forEach((user) => {
    if (user.innerText.toLowerCase().includes(search.toLowerCase())) {
      user.classList.remove("hide");
    } else {
      user.classList.add("hide");
    }
  });
}
