const createForm = document.getElementById("createForm");
const usersList = document.getElementById("usersList");

const apiUrl = "/api/users";

async function loadUsers() {
    usersList.innerHTML = "";
    try {
        const res = await fetch(apiUrl);
        const users = await res.json();
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = user.id + ": " + user.username + " (" + user.email + ", " + user.age + ") ";

            const delBtn = document.createElement("button");
            delBtn.textContent = "Delete";
            delBtn.onclick = () => deleteUser(user.id);

            li.appendChild(delBtn);
            usersList.appendChild(li);
        });
    } catch (e) {
        alert("Error loading users");
        console.error(e);
    }
}

createForm.addEventListener("submit", async function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const age = parseInt(document.getElementById("age").value);

    try {
        const res = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: username, email: email, age: age })
        });
        if (!res.ok) throw new Error("Error: " + res.status);
        await loadUsers();
        createForm.reset();
    } catch (err) {
        alert("Failed to create user");
        console.error(err);
    }
});

async function deleteUser(id) {
    try {
        const res = await fetch(apiUrl + "/" + id, { method: "DELETE" });
        if (!res.ok) throw new Error("User not found or cannot delete: " + res.status);
        await loadUsers();
    } catch (err) {
        alert("Failed to delete user: " + err);
        console.error(err);
    }
}

loadUsers();
