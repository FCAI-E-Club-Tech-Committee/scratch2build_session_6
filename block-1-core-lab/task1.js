/* =====================================================================
   Block 1 · Dynamic Event Submission
   Scratch2Build Week 3 · FCAI E-Club
   ===================================================================== */

/* ---------------------------------------------------------------------
   STEP 1 · Select the DOM elements
   --------------------------------------------------------------------- */
// TODO 1: Store references to the form, the title input, the category
//         select, the message paragraph and the events container in
//         variables, using the ids listed above.
const eventForm = document.querySelector("#event-form");
const titleInput = document.querySelector("#title-input");
const categoryInput = document.querySelector("#category-input");
const descInput = document.querySelector("#desc-input");
const formMessage = document.querySelector("#form-message");
const eventsContainer = document.querySelector("#events-container");

// TODO 1b: Log one of them to the console to confirm it is not null.
console.log("Loaded event form:", eventForm);

/* ---------------------------------------------------------------------
   STEP 2 · Handle form submission
   --------------------------------------------------------------------- */
// TODO 2: Listen for the form's submit event (not a button click).
//         Why does that cover both clicking the button and pressing Enter?
//         Answer: Listening to the 'submit' event on the form element captures
//         all native submit triggers (clicking <button type="submit"> or hitting Enter).
eventForm.addEventListener("submit", function (event) {
  // TODO 3: Inside the handler, stop the browser from reloading the page.
  event.preventDefault();

  /* ---------------------------------------------------------------------
     STEP 3 · Validate the input
     --------------------------------------------------------------------- */
  // TODO 4: Read the title and the chosen category.
  //         Remove leading and trailing spaces from the title before checking it.
  const title = titleInput.value.trim();
  const category = categoryInput.value;
  const desc = descInput.value;

  // TODO 5 & TODO 6 & TODO 7: Validate inputs and show specific error messages
  if (title.length < 3) {
    formMessage.textContent = "Event title must contain at least 3 characters.";
    formMessage.classList.remove("is-success");
    return;
  }

  if (!category) {
    formMessage.textContent = "Please select a category for the event.";
    formMessage.classList.remove("is-success");
    return;
  }

  if (!category) {
    formMessage.textContent = "Please select a category for the event.";
    formMessage.classList.remove("is-success");
    return;
  }

  /* ---------------------------------------------------------------------
     STEP 4 · Show and clear validation messages
     --------------------------------------------------------------------- */
  // TODO 8: Clear old error messages & set success feedback
  formMessage.textContent = "Event published successfully!";
  formMessage.classList.add("is-success");

  /* ---------------------------------------------------------------------
     STEP 5 · Generate and append event cards
     --------------------------------------------------------------------- */
  // TODO 9 & TODO 10: Create card elements safely using the DOM API.
  // Using textContent guarantees user input is treated as safe plain text
  // rather than executable HTML, preventing Cross-Site Scripting (XSS).
  const card = document.createElement("article");
  card.className = "event-card";
  card.setAttribute("data-category", category);

  // Card Header Structure
  const cardHead = document.createElement("div");
  cardHead.className = "card-head";

  const badge = document.createElement("span");
  badge.className = "badge";

  const categoryNames = {
    tech: "Tech",
    workshop: "Workshop",
    social: "Social",
  };
  badge.textContent = categoryNames[category] || category;

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-button";
  deleteBtn.type = "button";
  deleteBtn.textContent = "Delete";
  deleteBtn.setAttribute("aria-label", `Delete ${title}`);

  cardHead.append(badge, deleteBtn);

  // Card Title
  const cardTitle = document.createElement("h3");
  cardTitle.className = "card-title";
  cardTitle.textContent = title;

  const cardDesc = document.createElement("p");
  cardDesc.className = "card-desc";
  cardDesc.textContent = desc;

  // Assemble finished card
  card.append(cardHead, cardTitle, cardDesc);

  // TODO 11: Append the finished card to the events container.
  eventsContainer.appendChild(card);

  /* ---------------------------------------------------------------------
     STEP 6 · Reset after success
     --------------------------------------------------------------------- */
  // TODO 12: Empty form fields and focus back on title input
  eventForm.reset();
  titleInput.focus();
});

/* ---------------------------------------------------------------------
   STEP 7 · Delete events with event delegation
   --------------------------------------------------------------------- */
// TODO 13 & TODO 14 & TODO 15 & TODO 16:
// Attach a single click listener to eventsContainer using closest() for delegation
eventsContainer.addEventListener("click", function (event) {
  const deleteBtn = event.target.closest(".delete-button");

  // Exit if click did not originate from a delete button
  if (!deleteBtn) return;

  // Locate closest parent event card and remove it from RAM/DOM
  const eventCard = deleteBtn.closest(".event-card");
  if (eventCard) {
    eventCard.remove();
  }
});
