import { handleClicks } from "./handlers/event-handlers.js";
import { sourcesParent, contents, buttons, sources, images } from "./utils/elements.js";

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
