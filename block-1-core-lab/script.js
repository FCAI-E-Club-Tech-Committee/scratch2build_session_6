/* =====================================================================
   Block 1 · Dynamic Event Submission
   Scratch2Build Week 3 · FCAI E-Club

   The HTML and CSS are finished. Your job is to make the page work.
   Work through the steps in order, testing in the browser after each one.
   Keep the console open (F12) so you can see what is happening.

   Ids available in index.html:
     #event-form       the form
     #title-input      the title text field
     #category-input   the category dropdown (empty value = nothing chosen)
     #form-message     the paragraph reserved for feedback messages
     #events-container the parent of every event card

   Classes the CSS already styles:
     .event-card   .card-head   .card-title   .card-desc
     .badge        .delete-button
     .form-message.is-success   (optional green variant for success text)
   ===================================================================== */


/* ---------------------------------------------------------------------
   STEP 1 · Select the DOM elements
   --------------------------------------------------------------------- */
// TODO 1: Store references to the form, the title input, the category
//         select, the message paragraph and the events container in
//         variables, using the ids listed above.
// TODO 1b: Log one of them to the console to confirm it is not null.


/* ---------------------------------------------------------------------
   STEP 2 · Handle form submission
   --------------------------------------------------------------------- */
// TODO 2: Listen for the form's submit event (not a button click).
//         Why does that cover both clicking the button and pressing Enter?

// TODO 3: Inside the handler, stop the browser from reloading the page.


/* ---------------------------------------------------------------------
   STEP 3 · Validate the input
   --------------------------------------------------------------------- */
// TODO 4: Read the title and the chosen category.
//         Remove leading and trailing spaces from the title before checking it.

// TODO 5: The title is valid only if it has at least three characters after
//         trimming. A title made of spaces must be rejected.

// TODO 6: A category must be chosen (the placeholder option has no value).
//         Decide what to do if both fields are wrong: one message, or the
//         first problem only?


/* ---------------------------------------------------------------------
   STEP 4 · Show and clear validation messages
   --------------------------------------------------------------------- */
// TODO 7: When validation fails, write a clear, specific message into the
//         message paragraph and stop the handler from going any further.
//         "Invalid input" is not specific enough. Tell the user what to fix.

// TODO 8: When validation passes, clear any old message so it does not
//         stay on screen next to a successful result.

// Optional: toggle the .is-success class to show a positive confirmation.
//           Make sure a later error does not keep the success styling.


/* ---------------------------------------------------------------------
   STEP 5 · Generate and append event cards
   --------------------------------------------------------------------- */
// TODO 9: Open index.html and study one existing card. A new card must have
//         the same structure and the same class names, otherwise the CSS
//         will not style it:
//           - an element with class "event-card"
//           - a data-category attribute holding the chosen category value
//           - a badge showing the category name
//           - a delete button (type="button")
//           - a title with class "card-title"
//         A short description is optional for new events.

// TODO 10: Create the card element, set its attributes and text, and
//          put the pieces together.
//          Think about how to place the user's typed text on the page safely.
//          What could go wrong if someone types HTML into the title field?

// TODO 11: Append the finished card to the events container.


/* ---------------------------------------------------------------------
   STEP 6 · Reset after success
   --------------------------------------------------------------------- */
// TODO 12: After a successful submission, empty the form fields and put
//          the cursor back in the title input so the next event is quick to add.


/* ---------------------------------------------------------------------
   STEP 7 · Delete events with event delegation
   --------------------------------------------------------------------- */
// TODO 13: Do NOT attach a listener to every delete button. Cards you create
//          later would not have one. Attach a single click listener to the
//          events container instead.

// TODO 14: In the handler, work out whether the click came from a delete
//          button. If it did not, do nothing.

// TODO 15: Find the card that contains the clicked button using
//          closest('.event-card'), then remove that card from the page.

// TODO 16: Test it: delete an original card, add a new card, then delete
//          the new card. Both must work.