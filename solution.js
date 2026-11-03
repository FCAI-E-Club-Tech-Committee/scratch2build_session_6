/* =====================================================================
   Warm-Up Challenge Solution: Fixing e.preventDefault() & Target Scope
   Scratch2Build Week 3 · Session 6 Offline Practice Lab
   ===================================================================== */

const submitBtn = document.querySelector("#btn-submit");
const formElement = document.querySelector("#activity-form");

// FIX: Attaching listener to FORM submit instead of raw button click
formElement.addEventListener("submit", (e) => {
  e.preventDefault(); // Crucial Guard: Stops default browser page refresh

  const inputVal = document.querySelector("#title-input").value.trim();

  if (!inputVal) {
    console.error("Input field cannot be empty!");
    return;
  }

  console.log("Form submitted successfully:", inputVal);
});

/*
### 📌 Core Key Takeaways for Students
1. **Form vs. Button Listener:** Always bind `submit` listeners to the `<form>` element rather than `click` listeners on the `<button>` so that keypress triggers (e.g., hitting `Enter`) are properly handled.
2. **Navigation Guard:** `e.preventDefault()` must be called at the very top of the submission handler to halt default page reloads and preserve state in memory.
3. **Input Sanitization:** Calling `.trim()` removes trailing whitespaces before validating string length.
*/
