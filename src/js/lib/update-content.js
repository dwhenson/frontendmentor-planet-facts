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
