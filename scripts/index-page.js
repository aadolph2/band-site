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
    const imgEl = document.createElement("div");
    const nameDateEl = document.createElement("div");
    const contentEl = document.createElement("div");
    const commentInfoEl = document.createElement("p");
    const nameEl = document.createElement("p");
    const dateEl = document.createElement("p");

    nameEl.innerText = commentsData.name;
    dateEl.innerText = commentsData.date;
    commentInfoEl.innerText = commentsData.comment;
  }
};
const commentsContainer = document.querySelector(".commentsContainer");

displayComments(comments);

//commentsEl wraps everything, name and date wrapped by nameDateEl,
//flex-direction column nameDateCommentWrapper
//article
///imgDiv
////contentDiv
/////nameDateWrapper
/////----name+date
/////commentinfo

// Put the comment text

// Invoke the displayComments()

// ---

// Select the form element via JS

// Select the comments section via JS

// Add an event listener

// prevent default (don't refresh the page)

// Get the name
// const name = event.target.name.value

// Get the comment

// Validate that the user provided a name + comment
// if(!name || !comment) {

// If name was empty
// Get the name input element
// Add a class to it (form__input--error)

// If comment was empty
// Get the comment input element
// Add a class to it (form__input--error)

// return;
// }

// Get rid of the error class on the inputs

// Genreate the date for today "21/11/2022"
// const date = new Date().toLocaleDateString()

// add (comments.push()) a new object to the comment array

// comments.push({name: name, comment: comment, date: date })

// Clear the existing comments on the page
// commentsSection.innerHTML = "";

// Run the function above (run the loop)
