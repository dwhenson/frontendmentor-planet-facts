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
