import { buttons } from "../utils/elements.js";

/**
 * Updates the image based on the button clicked
 * @param      {event}  event   The event
 * @param      {array}  array   The array of images
 */
export function updateImage(event, array) {
  // If the geology button is clicked
  if (event.target.closest("[data-button='geology']")) {
    // Get the image, hide/show and return
    const showImage = array.find((item) => {
      return item.dataset.image === "geology";
    });
    if (showImage.style.visibility === "visible") {
      showImage.style.visibility = "hidden";
    }
    showImage.style.visibility = "visible";
    return;
  }
  // Otherwise, hide all the items in the array
  array.forEach(function (item) {
    if (item.style.visibility === "visible") {
      item.style.visibility = "hidden";
    }
  });

  // Find the index of the button clicked
  const button = buttons.findIndex((item) => {
    return item === event.target.closest("[data-button]");
  });

  // Return and show the relevant image
  const imageToShow = array.find((item, index) => {
    return index === button;
  });
  imageToShow.style.visibility = "visible";
}
