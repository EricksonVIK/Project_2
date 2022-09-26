function openForm() {
  console.log("click open");
  document.getElementById("editForm").style.display = "block";
}

function closeForm() {
  console.log("click close");
  document.getElementById("editForm").style.display = "none";
}

function editStock() {
  console.log("clicked edit");
}

async function deleteStock() {
  console.log("clicked delete");
//   event.preventDefault();

//   const id = window.location.toString().split("/")[
//     window.location.toString().split("/").length - 1
//   ];

  const response = await fetch(`/api/stocks/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

// plotly works with below
const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
const yArray = [55, 49, 44, 24, 15];

const layout = { title: "World Wide Wine Production" };

const data = [{ labels: xArray, values: yArray, type: "pie" }];

Plotly.newPlot("myPlot", data, layout);
