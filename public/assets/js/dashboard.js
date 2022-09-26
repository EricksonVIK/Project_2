function openForm() {
  console.log("click open");
  document.getElementById("editForm").style.display = "block";
}

function closeForm() {
  console.log("click close");
  document.getElementById("editForm").style.display = "none";
}

async function editStock() {
  console.log("clicked edit");
  const shares = documentquerySelector("#editShare").value.trim();
  // again how do i link the id

  const response = await fetch(`/api/stocks/2`, {
    method: "PUT",
    body: JSON.stringify({
      shares,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

async function deleteStock() {
  console.log("clicked delete");
  //   event.preventDefault();

  // how do i access the id?
  // hard coding worked
  // const id = ?????

  const response = await fetch(`/api/stocks/${id}`, {
    method: "DELETE",
    // where: {
    //     id: 1,
    //   },
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
