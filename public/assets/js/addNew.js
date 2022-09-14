//save button pressed
document.getElementById("btnSave").addEventListener("click", async (event) => {
    event.preventDefault();
    document.body.classList.add("waiting");
    const newStock = {
      stock: document.getElementById("companyName").value,
      share: document.getElementById("sharesPurchased").value,
      cost: document.getElementById("totalCost").value,
    };
    const response = await fetch("/api/stock", {
      method: "POST",
      body: JSON.stringify(newStock),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to add new stock");
    }
  });
  
  document.getElementById("btnCnl").addEventListener("click", async (event) => {
    document.location.replace("/");
  });