let employees = [
  {
    id: "1",
    name: "Vani",
    email: "vani00712@gmail.com",
  },
  {
    id: "2",
    name: "Meenaraj",
    email: "smeenaraj12@gmail.com",
  },
  {
    id: "3",
    name: "Abimanyu",
    email: "tarunabimanyu2042023@gmail.com",
  },
  {
    id: "4",
    name: "Arumuganainar",
    email: "vaniarumugam17@gmail.com",
  },
  {
    id: "5",
    name: "Suba",
    email: "subanainar1980@gmail.com",
  },
  {
    id: "6",
    name: "shunmugasundari",
    email: "shunmugasundari@gmail.com",
  },
  {
    id: "7",
    name: "manju",
    email: "mankaisekar14@gmail.com",
  },
  {
    id: "8",
    name: "kavitha",
    email: "kavithakavi19@gmail.com",
  },
  {
    id: "9",
    name: "Ananthi",
    email: "Ananthivigneshwari16@gmail.com",
  },
  {
    id: "10",
    name: "maries",
    email: "maries14032000@gmail.com",
  },
  {
    id: "11",
    name: "Gayathri",
    email: "gayathri0510@gmail.com",
  },
  {
    id: "12",
    name: "Kanimozhi",
    email: "kani1000@yahoo.com",
  },
  {
    id: "13",
    name: "Tarun",
    email: "tarun200420203@gmail.com",
  },
  {
    id: "14",
    name: "Atharva",
    email: "atharva26052020@gmail.com",
  },
  {
    id: "15",
    name: "Usha",
    email: "usharukmani150195@gmail.com",
  },
  {
    id: "16",
    name: "Praveen",
    email: "praveen18122000@gmail.com",
  },
  {
    id: "17",
    name: "Ponnamma",
    email: "ponnamma123@yahoo.com",
  },
  {
    id: "18",
    name: "Ramya",
    email: "ramya2042000@gmail.com",
  },
  {
    id: "19",
    name: "Glara",
    email: "glara3032000@gmail.com",
  },
  {
    id: "20",
    name: "Sowmiya",
    email: "sowmisuresh2000@gmail.com",
  },
  {
    id: "21",
    name: "Keerthana",
    email: "keerthana14042000@gmail.com",
  },
  {
    id: "22",
    name: "Malathy",
    email: "malathy30052000@gmail.com",
  },
  {
    id: "23",
    name: "Subalakshmi",
    email: "suba29101999@gmail.com",
  },
  {
    id: "24",
    name: "Mala",
    email: "mala14041998@gmail.com",
  },
  {
    id: "25",
    name: "Arunachalam",
    email: "arunachalam09042000@gmail.com",
  },
];
//---------------------------------------------------------------------------------------------

const firstBtn = document.querySelector(".firstBtn");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const lastBtn = document.querySelector(".lastBtn");

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");

//to set value for page
let page = document.getElementsByClassName("changes")[0];

//set starging item position with 0
let currentItem = 0;
let curPage = 0 / 5 + 1;

//Try to load the data for first page when page load
window.addEventListener("DOMContentLoaded", () => {
  displayEmployees(currentItem);
  page.innerHTML = currentItem / 5 + 1;
});

//Logic for previous user when user click on button
prevBtn.addEventListener("click", () => {
  //decreament current postion to 5.
  if (0 < currentItem) {
    currentItem -= 5;
    page.innerHTML = currentItem / 5 + 1;
    displayEmployees(currentItem);
  } else {
    alert("You are already in first page.");
  }
});

//Logic for next page when user click on next button
nextBtn.addEventListener("click", () => {
  //increase current position to 5.
  if (employees.length - 10 > currentItem) {
    currentItem += 5;
    page.innerHTML = currentItem / 5 + 1;
    displayEmployees(currentItem);
  } else {
    alert("You are already in last page");
  }
});

//logic for first button
firstBtn.addEventListener("click", () => {
  if (currentItem > 0) {
    currentItem = 0;
    page.innerHTML = currentItem / 5 + 1;
    displayEmployees(currentItem);
  } else {
    alert("You are alread in First page");
  }
});

//logic for last button
lastBtn.addEventListener("click", () => {
  if (currentItem < employees.length - 5) {
    currentItem = employees.length - 5;
    page.innerHTML = currentItem / 5 + 1;
    displayEmployees(currentItem);
  } else {
    alert("You are already in last page");
  }
});

//button from 1 to 5 code are below:
btn1.addEventListener("click", () => {
  currentItem = 0;
  page.innerHTML = currentItem / 5 + 1;
  displayEmployees(currentItem);
});
btn2.addEventListener("click", () => {
  currentItem = 5;
  page.innerHTML = currentItem / 5 + 1;
  displayEmployees(currentItem);
});
btn3.addEventListener("click", () => {
  currentItem = 10;
  page.innerHTML = currentItem / 5 + 1;
  displayEmployees(currentItem);
});
btn4.addEventListener("click", () => {
  currentItem = 15;
  page.innerHTML = currentItem / 5 + 1;
  displayEmployees(currentItem);
});
btn5.addEventListener("click", () => {
  currentItem = 20;
  page.innerHTML = currentItem / 5 + 1;
  displayEmployees(currentItem);
});

function displayEmployees(start) {
  let addTo = document.querySelector(".table-responsive");

  let dum = "";
  for (let i = start; i < start + 5; i++) {
    dum += `
    <div id="k">
    <div >
       <label>Id:</lable>
       <p id="para">${employees[i].id}</p>
    </div>
    <div>
       <label>Name:</lable>
       <p id="name">${employees[i].name}</p>
    </div>
    <div>
       <label >email:</lable>
       <p id="email">${employees[i].email}</p>
    </div>
    </div >
  `;
    addTo.innerHTML = dum;
  }
}
