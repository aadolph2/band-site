const comments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comment:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },
  {
    name: "Emilie Beach",
    date: "01/09/2021",
    comment:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },
  {
    name: "Miles Acosta",
    date: "12/20/2020",
    comment:
      "I can t stop listening. Every time I hear one of their songs the vocals it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can t get enough.",
  },
];

const displayComments = (commentsArray) => {
  for (let i = 0; i < commentsArray.length; i++) {
    const commentsData = commentsArray[i];

    const commentEl = document.createElement("article");
    commentEl.classList.add("commentsSection__article");

    const contentEl = document.createElement("div");
    contentEl.classList.add("commentsSection__content");

    const imgEl = document.createElement("div");
    imgEl.classList.add("commentsSection__img");
    commentEl.appendChild(imgEl);

    const nameDateEl = document.createElement("div");
    nameDateEl.classList.add("commentsSection__nameDate");
    contentEl.appendChild(nameDateEl);

    const nameEl = document.createElement("p");
    nameEl.innerText = commentsData.name;
    nameEl.classList.add("commentsSection__name");
    nameDateEl.appendChild(nameEl);

    const dateEl = document.createElement("p");
    dateEl.innerText = commentsData.date;
    dateEl.classList.add("commentsSection__date");
    nameDateEl.appendChild(dateEl);

    const commentInfoEl = document.createElement("p");
    commentInfoEl.innerText = commentsData.comment;
    commentInfoEl.classList.add("commentsSection__comment");
    contentEl.appendChild(commentInfoEl);

    commentEl.append(contentEl);
    commentsContainer.append(commentEl);
  }
};
const commentsContainer = document.querySelector(".commentsSectionContainer");

displayComments(comments);

const formEl = document.querySelector(".commentsPage");
const commentsSection = document.querySelector(".commentsSection");
const nameEl = document.querySelector(".commentsPage__name");
const commentEl = document.querySelector(".commentsPage__comment");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const date = new Date().toLocaleDateString();
  const name = event.target.name.value;
  const comment = event.target.comment.value;

  if (!name) {
    nameEl.classList.replace("commentsPage__name", "commentsPage__name-error");
    alert("MISSING FIELD: NAME");
    return;
  }
  if (!comment) {
    commentEl.classList.replace(
      "commentsPage__comment",
      "commentsPage__comment-error"
    );
    alert("MISSING FIELD: COMMENT");
    return;
  }

  comments.push({ name, date, comment });
  // commentsSection.innerHTML = ""; CANNOT SET PROPERTIES OF NULL
  displayComments(comments);
});

// Select the comments section via JS
// Run the function above (run the loop)
