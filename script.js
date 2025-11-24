function fetchUsers() {
    let container = document.getElementById("users");
    container.innerHTML = "<p>Loading users...</p>";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            container.innerHTML = "";

            data.forEach(user => {
                container.innerHTML += `
                    <div class="card">
                        <h3>${user.name}</h3>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>City:</strong> ${user.address.city}</p>
                        <p><strong>Street:</strong> ${user.address.street}</p>
                    </div>
                `;
            });
        })
        .catch(error => {
            container.innerHTML = "<p style='color:red;'>Failed to load users. Check your internet.</p>";
            console.error("Error:", error);
        });
}

// Auto-fetch when page loads
fetchUsers();
