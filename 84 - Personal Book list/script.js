const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const bookList = document.getElementById("book-list");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  if (title.value == "" && author.value == "" && year.value == "") {
    alert("Please fill in all the fields");
  } else {
    const newRow = document.createElement("section");

    /* Append the new Title */
    const newTitle = document.createElement("div");
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    /* Append the new Author */
    const newAuthor = document.createElement("div");
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);

    /* Append the new Year */
    const newYear = document.createElement("div");
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);

    /* Append the new Row to the Book List */
    bookList.appendChild(newRow);
  }
});
