import { handleClicks } from "./handlers/event-handlers.js";
import { contents, buttons, sources } from "./utils/elements.js";
import BurgerMenu from "./lib/burger-menu.js";

/* ====================================================
   Inits and Event Listeners
   ==================================================== */

/**
 * Shows the initial content for the main section
 */
function showInitialContent() {
   contents[0].style.visibility = "visible";
   buttons[0].classList.add("js-active");
   sources[0].style.display = "inline";
}

// Inits
document.addEventListener("click", handleClicks);
showInitialContent();
