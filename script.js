
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    const formData = new FormData();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    formData.append("name", name);
    formData.append("email", email);
    formData.append("age", age);

    fetch("/submit", {
      method: "POST",
      body: formData
    })
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });