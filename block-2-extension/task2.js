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
const searchInput = document.querySelector("#search-input");
const categorySelect = document.querySelector("#category-select");
const activeCounter = document.querySelector("#active-counter");
const emptyState = document.querySelector("#empty-state");
const eventsContainer = document.querySelector("#events-container");

// TODO 1b: Select ALL event cards as a collection you can loop over.
//          Log the collection's length. It should match the number of
//          cards on the page.
const initialCards = document.querySelectorAll(".event-card");
console.log("Total initial event cards:", initialCards.length);

/* ---------------------------------------------------------------------
   STEP 2 · Read the current filters
   --------------------------------------------------------------------- */
// TODO 2: Create a function that runs the whole filtering process.
//         Everything below happens inside it, so that typing and
//         changing the category both call the same code.
function filterEvents() {
  // TODO 3: Inside it, read the current search text and the selected category.
  //         Prepare the search text so that "GIT", " git " and "Git"
  //         all behave the same way.
  const searchText = searchInput.value.trim().toLowerCase();
  const selectedCategory = categorySelect.value;

  // Dynamically select current cards in the DOM to account for dynamic adds/deletes
  const currentCards = eventsContainer
    ? eventsContainer.querySelectorAll(".event-card")
    : document.querySelectorAll(".event-card");

  /* ---------------------------------------------------------------------
     STEP 3 · Loop through the cards
     --------------------------------------------------------------------- */
  let visibleCount = 0;

  // TODO 4: Loop through every event card.
  //         For each card, read its title text and its category.
  currentCards.forEach(function (card) {
    const title = card.querySelector(".card-title")
      ? card.querySelector(".card-title").textContent.toLowerCase()
      : "";
    const category =
      card.dataset.category || card.getAttribute("data-category");

    // TODO 5: Compare the lowercase title with the lowercase search text,
    //         using toLowerCase() and includes().
    //         An empty search string "" matches any title.
    const matchesSearch = title.includes(searchText);

    // TODO 6: Check whether the card's category matches the selected one.
    //         "all" is a special value that means every category is allowed.
    const matchesCategory =
      selectedCategory === "all" || category === selectedCategory;

    // TODO 7: A card is visible only if BOTH checks pass.
    //         Show or hide it accordingly, and keep a running count.
    const isVisible = matchesSearch && matchesCategory;

    if (isVisible) {
      card.removeAttribute("hidden");
      visibleCount++;
    } else {
      card.setAttribute("hidden", "");
    }
  });

  /* ---------------------------------------------------------------------
     STEP 4 · Update the counter and the empty state
     --------------------------------------------------------------------- */
  // TODO 8: After the loop, write the counter text in the exact format:
  //         "Showing X of Y Events"
  if (activeCounter) {
    activeCounter.textContent = `Showing ${visibleCount} of ${currentCards.length} Events`;
  }

  // TODO 9: If no cards are visible, reveal the empty state.
  //         Otherwise make sure it is hidden again.
  if (emptyState) {
    if (visibleCount === 0) {
      emptyState.removeAttribute("hidden");
    } else {
      emptyState.setAttribute("hidden", "");
    }
  }
}

/* ---------------------------------------------------------------------
   STEP 5 · Listen for changes
   --------------------------------------------------------------------- */
// TODO 10: Run your filtering function every time the user types in the
//          search field. Use "input" so it fires on every keystroke.
if (searchInput) {
  searchInput.addEventListener("input", filterEvents);
}

// TODO 11: Run the same function when the category dropdown changes.
if (categorySelect) {
  categorySelect.addEventListener("change", filterEvents);
}

// Automatically re-filter whenever event cards are added or removed dynamically
if (eventsContainer) {
  const observer = new MutationObserver(filterEvents);
  observer.observe(eventsContainer, { childList: true });
}

// TODO 12: Run once on load to ensure the initial counter & state are accurate,
//          especially if the browser restored previous input values on refresh.
filterEvents();
