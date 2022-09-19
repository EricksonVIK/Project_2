//save button pressed
document.getElementById("btnSave").addEventListener("click", async (event) => {
    event.preventDefault();
  document.body.classList.add("waiting");
  const stock = document.querySelector('#companyName').value.trim();
  const ticker = document.querySelector('#ticker').value.trim();
  const shares = document.querySelector('#sharesPurchased').value.trim();
  const cost = document.querySelector('#totalCost').value.trim();

    const response = await fetch("/api/stocks", {
      method: "POST",
      body: JSON.stringify({
        name: stock,
        ticker: ticker,
        shares: shares,
        cost: cost,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to add new stock");
    }
  });
  
  document.getElementById("btnCnl").addEventListener("click", async (event) => {
    document.location.replace("/dashboard");
  });