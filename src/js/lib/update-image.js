/**
 * Updates the image based on the button clicked
 * @param      {event}  event   The event
 * @param      {array}  array   The array of content items
 */
export function updateImage(event, array) {
  if (event.target.closest("[data-button='geology']")) {
    const showImage = array.find((item) => {
      return item.dataset.image === "geology";
    });
    if (showImage.style.visibility === "visible") {
      showImage.style.visibility = "hidden";
    }
    showImage.style.visibility = "visible";
    return;
  }

  // Hide all the items in the array
  array.forEach(function (item) {
    if (item.style.visibility === "visible") {
      item.style.visibility = "hidden";
    }
  });

  // Return and show the relevant link
  const imageToShow = array.find((item) => {
    return item.dataset.image === event.target.closest("[data-button]").dataset.button;
  });
  imageToShow.style.visibility = "visible";
}
