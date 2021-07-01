/* ====================================================
   Variables
   ==================================================== */
const contents = [...document.querySelectorAll("[data-content]")];
const buttons = [...document.querySelectorAll("[data-button]")];
const sources = [...document.querySelectorAll("[data-source]")];

/* ====================================================
   Functions
   ==================================================== */
/* App
/* ==================================================== */
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

/* Handlers
/* ==================================================== */
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
}

/* ====================================================
   Inits and Event Listeners
   ==================================================== */

function showInitialContent() {
	contents[0].style.visibility = "visible";
	buttons[0].classList.add("js-active");
	sources[0].style.display = "inline";
}

document.addEventListener("click", handleClicks);
showInitialContent();
