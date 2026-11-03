/* =====================================================================
   Block 2 · Search & Category Filtering
   Scratch2Build Week 3 · FCAI E-Club

   The HTML and CSS are finished. Your job is to make the filters work.
   Work through the steps in order, testing in the browser after each one.

   Ids available in index.html:
     #search-input     the search field
     #category-select  the category dropdown (all / tech / workshop / social)
     #active-counter   the results counter text
     #empty-state      the "no matches" message (hidden to begin with)

   Each event has:
     .event-card       the whole card
     .card-title       the event title
     data-category     "tech", "workshop" or "social" (read from the card)

   The CSS hides any element that has the "hidden" attribute,
   so you can show and hide cards and the empty state with it.
   ===================================================================== */

/* ---------------------------------------------------------------------
   STEP 1 · Select the DOM elements
   --------------------------------------------------------------------- */
// TODO 1: Store references to the search input, the category select, the
//         counter and the empty state.
// TODO 1b: Select ALL event cards as a collection you can loop over.
//          Log the collection's length. It should match the number of
//          cards on the page.

/* ---------------------------------------------------------------------
   STEP 2 · Read the current filters
   --------------------------------------------------------------------- */
// TODO 2: Create a function that runs the whole filtering process.
//         Everything below happens inside it, so that typing and
//         changing the category both call the same code.

// TODO 3: Inside it, read the current search text and the selected category.
//         Prepare the search text so that "GIT", " git " and "Git"
//         all behave the same way.

/* ---------------------------------------------------------------------
   STEP 3 · Loop through the cards
   --------------------------------------------------------------------- */
// TODO 4: Loop through every event card.
//         For each card, read its title text and its category.

// TODO 5: Compare the lowercase title with the lowercase search text,
//         using toLowerCase() and includes().
//         Question: what should an empty search match?

// TODO 6: Check whether the card's category matches the selected one.
//         "all" is a special value that means every category is allowed.

// TODO 7: A card is visible only if BOTH checks pass.
//         Show or hide it accordingly, and keep a running count of how
//         many cards are visible.
//         Test the combination: search "git" with Social selected. What
//         should happen?

/* ---------------------------------------------------------------------
   STEP 4 · Update the counter and the empty state
   --------------------------------------------------------------------- */
// TODO 8: After the loop, write the counter text in the exact format:
//         "Showing X of Y Events"
//         X is the number of visible cards, Y is the total number of cards.

// TODO 9: If no cards are visible, reveal the empty state.
//         Otherwise make sure it is hidden again.

/* ---------------------------------------------------------------------
   STEP 5 · Listen for changes
   --------------------------------------------------------------------- */
// TODO 10: Run your filtering function every time the user types in the
//          search field. Use the event that fires on every keystroke,
//          not one that waits for the field to lose focus.

// TODO 11: Run the same function when the category dropdown changes.

// TODO 12: Think about the starting state: the page loads with everything
//          visible and the counter already correct. Do you need to run the
//          function once on load, or is the HTML already right?
//          Test by refreshing the page after typing, since some browsers
//          restore the old input value.
