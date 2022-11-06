const editBEl = document.querySelector(".editB");
let id;

function openForm() {
  console.log("click open");
  document.getElementById("editForm").style.display = "block";
  id = editBEl.getAttribute("data-id");
}

function closeForm() {
  console.log("click close");
  document.getElementById("editForm").style.display = "none";
}

async function editStock() {
  //   event.preventDefault();
  console.log("clicked edit");

  const shares = document.querySelector("#editShare").value.trim();
  const cost = document.querySelector("#editCost").value.trim();
  // again how do i link the id
  console.log(id);
  const response = await fetch(`/api/stocks/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      shares,
      cost,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

    if (response.ok) {
    //   add logic to ammend total value and net gl?
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

async function deleteStock() {
  console.log("clicked delete");
  id = editBEl.getAttribute("data-id");

  console.log("deleted stock with" + id);

  const response = await fetch(`/api/stocks/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

// // get all fetch
// async function getUserStocks() {
//     if (req.session) {
//         const getStocks = await fetch("/api/stocks/", {
//             method: "GET",

//         });
//         if (getStocks.ok) {
//             getStocks.json(getStocks);

//             console.log(getStocks);
//         }
//         else {
//             alert.statusText;
//         }
//     }
// }
// getUserStocks();
// plotly works with below
const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
const yArray = [55, 49, 44, 24, 15];

const layout = { title: "World Wide Wine Production" };

const data = [{ labels: xArray, values: yArray, type: "pie" }];

Plotly.newPlot("myPlot", data, layout);

// editBEl.addEventListener("click", editStock);
