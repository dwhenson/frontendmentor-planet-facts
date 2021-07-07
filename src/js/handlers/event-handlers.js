import { contents, buttons, sources, images } from "../utils/elements.js";
import { updateButtons } from "../lib/highlight-button.js";
import { updateContent } from "../lib/update-content.js";
import { updateSources } from "../lib/update-source.js";
import { updateImage } from "../lib/update-image.js";

/**
 * Call functions to render the UI updates
 * @param      {<type>}  event   The event
 */
export function handleClicks(event) {
   if (!event.target.closest("[data-button]")) return;
   // event.preventDefault();
   updateButtons(event, buttons);
   updateContent(event, contents);
   updateSources(event, sources);
   updateImage(event, images);
}
