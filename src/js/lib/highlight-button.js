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
