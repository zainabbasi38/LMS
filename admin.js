
/* ====== Admin Auth Check ====== */
const currentUser = JSON.parse(localStorage.getItem("CurrentUser"));

if (!currentUser || currentUser.role !== "admin") {
    window.location.href = "login.html";
}

let books = JSON.parse(localStorage.getItem("books")) || [];

function loadBooks() {
    const table = document.getElementById("bookTable");
    table.innerHTML = "";

    books.forEach((book, index) => {
        const row = table.insertRow();
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.url}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="deleteBook(${index})">
                    <i class="bi bi-trash"></i>
                </button>
            </td>
        `;
    });
}

/* ====== Add Book ====== */
function addBook() {
    const title = document.getElementById("bookTitle").value.trim();
    const author = document.getElementById("bookAuthor").value.trim();
    const url = document.getElementById("bookURL").value.trim();

    if (title === "" || author === "" || url === "") {
        alert("Please fill all fields");
        return;
    }

    const newBook = {
        title:title,
        author:author,
        url:url
    };

    books.push(newBook);
    localStorage.setItem("books", JSON.stringify(books));

    loadBooks();

    document.getElementById("bookTitle").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookIURL").value = "";
}

function deleteBook(index) {
    if (confirm("Are you sure you want to delete this book?")) {
        books.splice(index, 1);
        localStorage.setItem("books", JSON.stringify(books));
        loadBooks();
    }
}

function logout() {
    localStorage.removeItem("CurrentUser");
    alert("Logged out successfully");
    window.location.href = "login.html";
}

/* ====== Call on Page Load ====== */
loadBooks();
