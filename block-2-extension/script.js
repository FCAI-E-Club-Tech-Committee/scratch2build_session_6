/* =====================================================================
   Block 2 · Search & Category Filtering
   Scratch2Build Week 3 · FCAI E-Club
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
const task2EventsContainer = document.querySelector("#events-container");

// TODO 1b: Select ALL event cards as a collection you can loop over.
const initialCards = document.querySelectorAll(".event-card");
console.log("Total initial event cards:", initialCards.length);

/* ---------------------------------------------------------------------
   STEP 2 · Read the current filters
   --------------------------------------------------------------------- */
// TODO 2: Create a function that runs the whole filtering process.
function filterEvents() {
  // TODO 3: Read the current search text and the selected category.
  const searchText = searchInput.value.trim().toLowerCase();
  const selectedCategory = categorySelect.value;

  // Dynamically select current cards in the DOM to account for dynamic adds/deletes
  const currentCards = task2EventsContainer
    ? task2EventsContainer.querySelectorAll(".event-card")
    : document.querySelectorAll(".event-card");

  /* ---------------------------------------------------------------------
     STEP 3 · Loop through the cards
     --------------------------------------------------------------------- */
  let visibleCount = 0;

  // TODO 4: Loop through every event card.
  currentCards.forEach(function (card) {
    const title = card.querySelector(".card-title")
      ? card.querySelector(".card-title").textContent.toLowerCase()
      : "";
    const category =
      card.dataset.category || card.getAttribute("data-category");

    // TODO 5: Compare the lowercase title with the lowercase search text
    const matchesSearch = title.includes(searchText);

    // TODO 6: Check whether the card's category matches the selected one
    const matchesCategory =
      selectedCategory === "all" || category === selectedCategory;

    // TODO 7: A card is visible only if BOTH checks pass
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
  // TODO 8: Write the counter text in the exact format: "Showing X of Y Events"
  if (activeCounter) {
    activeCounter.textContent = `Showing ${visibleCount} of ${currentCards.length} Events`;
  }

  // TODO 9: Reveal or hide the empty state
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
// TODO 10: Run filtering when the user types in the search field
if (searchInput) {
  searchInput.addEventListener("input", filterEvents);
}

// TODO 11: Run filtering when the category dropdown changes
if (categorySelect) {
  categorySelect.addEventListener("change", filterEvents);
}

// Automatically re-filter whenever event cards are added or removed dynamically
if (task2EventsContainer) {
  const observer = new MutationObserver(filterEvents);
  observer.observe(task2EventsContainer, { childList: true });
}

// TODO 12: Run once on load
filterEvents();