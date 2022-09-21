// file for future API - Used to test 

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "34d605bdbfmshdb4d8ce3a3b8001p173564jsnd4d167075ad7",
//     "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
//   },
// };

// fetch(
//   `https://alpha-vantage.p.rapidapi.com/query?function=GLOBAL_QUOTE&symbol=ABBV&datatype=json`,
//   options
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));


function openForm() {
    // console.log("click")
    document.getElementById('editForm').style.display = 'block';
}

function closeForm() {
    // console.log('click')
    document.getElementById('editForm').style.display = 'none';
}