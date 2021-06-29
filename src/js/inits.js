const contents = [...document.querySelectorAll("[data-content]")];
const buttons = [...document.querySelectorAll("[data-button]")];
const sources = [...document.querySelectorAll("[data-source]")];

function updateContent(event, array) {
	array.forEach(function (item) {
		if (item.style.visibility === "visible") {
			item.style.visibility = "hidden";
		}
	});
}

function updateButtons(event, array) {
	array.forEach(function (item) {
		if (item.classList.contains("active")) {
			item.classList.remove("active");
		}
	});
	event.target.closest("[data-button]").classList.add("active");
}

function updateSources(event, array) {
	array.forEach(function (item) {
		if (item.style.display === "inline") {
			item.style.display = "none";
		}
	});
	console.log(event.target.closest("[data-button]").dataset.button);

	const sourceToShow = array.find((item) => {
		return item.dataset.source === event.target.closest("[data-button]").dataset.button;
	});
	sourceToShow.style.display = "inline";
}

function handleClicks(event) {
	if (!event.target.closest("[data-button]")) return;
	updateButtons(event, buttons);
	// updateContent(event, contents);
	updateSources(event, sources);
}

function showInitialContent() {
	// contents[0].style.visibility = "visible";
	document.location.hash = "#overview";
	buttons[0].classList.add("active");
	sources[0].style.display = "inline";
}

document.addEventListener("click", handleClicks);
showInitialContent();

// window.onload = function () {
// };
