(function () {
  'use strict';

  const contents = [...document.querySelectorAll("[data-content]")];
  const buttons = [...document.querySelectorAll("[data-button]")];
  const sources = [...document.querySelectorAll("[data-source]")];
  const images = [...document.querySelectorAll(".images > svg, .images > img")];
  const sourcesParent = document.querySelector(".sources");

  /**
   * Finds the clicked button and highlight in the UI
   * @param      {event}  event   The event
   * @param      {array}  array   The array of buttons
   */
  function updateButtons(event, array) {
    array.forEach(function (item) {
      if (item.classList.contains("js-active")) {
        item.classList.remove("js-active");
      }
    });
    event.target.closest("[data-button]").classList.add("js-active");
  }

  /**
   * Updates the page content based on the button clicked
   * @param      {event}  event   The event
   * @param      {array}  array   The array of content items
   */
  function updateContent(event, array) {
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
  function updateSources(event, array) {
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
   * Updates the image based on the button clicked
   * @param      {event}  event   The event
   * @param      {array}  array   The array of images
   */
  function updateImage(event, array) {
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
    console.log(event.target);
    // Return and show the relevant image
    const imageToShow = array.find((item, index) => {
      return index === button;
    });
    imageToShow.style.visibility = "visible";
  }

  /**
   * Call functions to render the UI updates
   * @param      {<type>}  event   The event
   */
  function handleClicks(event) {
     if (!event.target.closest("[data-button]")) return;
     event.preventDefault();
     updateButtons(event, buttons);
     updateContent(event, contents);
     updateSources(event, sources);
     updateImage(event, images);
  }

  /**
   * Shows the initial content for the main section
   */
  function showInitialContent() {
    sourcesParent.style.display = "block";
    contents[0].style.visibility = "visible";
    buttons[0].classList.add("js-active");
    sources[0].style.display = "inline";
    images[0].style.visibility = "visible";
  }

  // Inits
  showInitialContent();
  document.addEventListener("click", handleClicks);

}());
