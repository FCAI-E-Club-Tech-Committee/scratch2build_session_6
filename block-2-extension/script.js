const events = [
  {title:"Intro to Web Development",category:"Technical",description:"Learn the basics of building for the web."},
  {title:"UI Design Workshop",category:"Workshop",description:"Practice designing clear user interfaces."},
  {title:"Career Preparation Day",category:"Non-Technical",description:"Explore communication and career skills."},
  {title:"JavaScript Practice Session",category:"Technical",description:"Practice JavaScript through small challenges."}
];
const searchInput=document.querySelector("#searchInput");
const categoryFilter=document.querySelector("#categoryFilter");
const eventsList=document.querySelector("#eventsList");
const emptyMessage=document.querySelector("#emptyMessage");
const resultsCount=document.querySelector("#resultsCount");

function renderEvents(items) {
  // TODO: Clear the current list, create a card for each item, and append it.
  // TODO: Update the results count and show the empty message when needed.
}

function filterEvents() {
  const query=searchInput.value.trim().toLowerCase();
  const category=categoryFilter.value;
  // TODO: Use filter() to match both the query and selected category.
  // TODO: Call renderEvents() with the filtered results.
}
searchInput.addEventListener("input",filterEvents);
categoryFilter.addEventListener("change",filterEvents);
renderEvents(events);
