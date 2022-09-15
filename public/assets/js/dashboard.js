// let current = new Date();
// let cTime = current.toLocaleString();
// console.log(cTime);
//
// let time = document.getElementById("time")
// time.append('append() current.toLocaleString()');

// document.querySelector("#data-table").addEventListener("click", async (event) => {
//     event.preventDefault();
//     document.body.classList.add("waiting");
//     if (event.target.matches("td.delBtn *")) {
//       const target = event.target.closest("td.delBtn");
//       const log_id = target.getAttribute("data-id");
//       const response = await fetch(`/api/logData/${log_id}`, {
//         method: "DELETE",
//       });
  
//       if (response.ok) {
//         document.location.replace("/");
//       } else {
//         alert("Failed to delete log");
//         return;
//       }
//     } else if (event.target.matches("td.editBtn *")) {
//       const target = event.target.closest("td.editBtn");
//       const log_id = target.getAttribute("data-id");
//       document.location.replace(`/logs/${log_id}`);
//     }
//   });


  