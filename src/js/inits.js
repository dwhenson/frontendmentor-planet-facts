import { handleClicks } from "./handlers/event-handlers.js";
import { contents, buttons, sources, images } from "./utils/elements.js";
import BurgerMenu from "./lib/burger-menu.js";

/**
 * Shows the initial content for the main section
 */
function showInitialContent() {
   contents[0].style.visibility = "visible";
   buttons[0].classList.add("js-active");
   sources[0].style.display = "inline";
   images[0].style.visibility = "visible";
}

// Inits
document.addEventListener("click", handleClicks);
showInitialContent();
