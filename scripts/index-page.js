const BASE_API_URL = "https://project-1-api.herokuapp.com/";
const API_KEY = "?api_key=13e6724b-7a76-4de9-b366-c2be24ae7e0f";

const commentsURL = `${BASE_API_URL}comments${API_KEY}`;

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

    dateEl.innetText = commentsData.timestamp;
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

axios
  .get(commentsURL)
  .then((result) => {
    displayComments(result.data);
  })
  .catch((error) => {
    console.log(error);
  });

const formEl = document.querySelector(".commentsPage");
const nameEl = document.querySelector(".commentsPage__name");
const commentEl = document.querySelector(".commentsPage__comment");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

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

  commentsContainer.innerHTML = "";

  axios
    .post(commentsURL, {
      name: name,
      comment: comment,
    })
    .then((result) => {
      console.log(result);
    });

  axios
    .get(commentsURL)
    .then((result) => {
      displayComments(result.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

// axios
//   .get(commentsURL)
//   .then((result) => {
//     displayComments(result.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
