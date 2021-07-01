import { contents, buttons, sources } from "../utils/elements.js";
import { updateButtons, updateContent, updateSources } from "../lib/main-content.js";

/* ====================================================
   Handler Functions
   ==================================================== */
/* Content updates and associated UI changes
   /* ==================================================== */
/**
 * Call functions to render the UI updates
 * @param      {<type>}  event   The event
 */
export function handleClicks(event) {
  if (!event.target.closest("[data-button]")) return;
  event.preventDefault();
  updateButtons(event, buttons);
  updateContent(event, contents);
  updateSources(event, sources);
}
