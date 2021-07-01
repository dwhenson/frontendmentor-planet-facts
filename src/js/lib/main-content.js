/* App
/* ==================================================== */
/**
 * Updates the page content based on the button clicked
 * @param      {event}  event   The event
 * @param      {array}  array   The array of content items
 */
export function updateContent(event, array) {
  // Hide all the items in the array
  array.forEach(function (item) {
    if (item.style.visibility === "visible") {
      item.style.visibility = "hidden";
    }
  });

  // Return and show the relevant link
  const contentToShow = array.find((item) => {
    return item.dataset.content === event.target.closest("[data-button]").dataset.button;
  });
  contentToShow.style.visibility = "visible";
}

/**
 * Updates the link to the Wikipedia link based on the button clicked
 * @param      {event}  event   The event
 * @param      {array}  array   The array of links
 */
export function updateSources(event, array) {
  // Hide all items in the array
  array.forEach(function (item) {
    if (item.style.display === "inline") {
      item.style.display = "none";
    }
  });
  // Return and show the relevant link
  const sourceToShow = array.find((item) => {
    return item.dataset.source === event.target.closest("[data-button]").dataset.button;
  });
  sourceToShow.style.display = "inline";
}

/**
 * Finds the clicked button and highlight in the UI
 * @param      {event}  event   The event
 * @param      {array}  array   The array of buttons
 */
export function updateButtons(event, array) {
  array.forEach(function (item) {
    if (item.classList.contains("js-active")) {
      item.classList.remove("js-active");
    }
  });
  event.target.closest("[data-button]").classList.add("js-active");
}
