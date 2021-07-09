(function () {
  'use strict';

  const contents = [...document.querySelectorAll("[data-content]")];
  const buttons = [...document.querySelectorAll("[data-button]")];
  const sources = [...document.querySelectorAll("[data-source]")];
  const images = [...document.querySelectorAll("[data-image]")];
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
    // Return and show the relevant image
    const imageToShow = array.find((item) => {
      return item.dataset.image === event.target.closest("[data-button]").dataset.button;
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
   * Returns back a NodeList of focusable elements
   * that exist within the passed parent HTMLElement
   *
   * @param {HTMLElement} parent HTML element
   * @returns {NodeList} The focusable elements that we can find
   */
  var getFocusableElements = (parent) => {
  	if (!parent) {
  		console.warn("You need to pass a parent HTMLElement");
  		return [];
  	}

  	return parent.querySelectorAll(
  		'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled]), details:not([disabled]), summary:not(:disabled)'
  	);
  };

  class BurgerMenu extends HTMLElement {
  	constructor() {
  		super();

  		const self = this;

  		this.state = new Proxy(
  			{
  				status: "open",
  				enabled: false,
  			},
  			{
  				set(state, key, value) {
  					const oldValue = state[key];

  					state[key] = value;
  					if (oldValue !== value) {
  						self.processStateChange();
  					}
  					return state;
  				},
  			}
  		);
  	}

  	get maxWidth() {
  		return parseInt(this.getAttribute("max-width") || 9999, 10);
  	}

  	connectedCallback() {
  		this.initialMarkup = this.innerHTML;
  		this.render();

  		const observer = new ResizeObserver((observedItems) => {
  			const { contentRect } = observedItems[0];
  			this.state.enabled = contentRect.width <= this.maxWidth;
  		});

  		// We want to watch the parent like a hawk
  		observer.observe(this.parentNode);
  	}

  	render() {
  		this.innerHTML = `
			<div class="burger-menu" data-element="burger-root">
				<button class="burger-menu__trigger" data-element="burger-menu-trigger" type="button" aria-label="Open menu">
					<span class="burger-menu__bar" aria-hidden="true"></span>
				</button>
				<div class="burger-menu__panel" data-element="burger-menu-panel">
					${this.initialMarkup}
				</div>
			</div>
		`;

  		this.postRender();
  	}

  	postRender() {
  		this.trigger = this.querySelector('[data-element="burger-menu-trigger"]');
  		this.panel = this.querySelector('[data-element="burger-menu-panel"]');
  		this.root = this.querySelector('[data-element="burger-root"]');
  		this.focusableElements = getFocusableElements(this);

  		if (this.trigger && this.panel) {
  			this.toggle();

  			this.trigger.addEventListener("click", (evt) => {
  				evt.preventDefault();

  				this.toggle();
  			});

  			document.addEventListener("focusin", () => {
  				if (!this.contains(document.activeElement)) {
  					this.toggle("closed");
  				}
  			});

  			return;
  		}

  		this.innerHTML = this.initialMarkup;
  	}

  	toggle(forcedStatus) {
  		if (forcedStatus) {
  			if (this.state.status === forcedStatus) {
  				return;
  			}

  			this.state.status = forcedStatus;
  		} else {
  			this.state.status = this.state.status === "closed" ? "open" : "closed";
  		}
  	}

  	processStateChange() {
  		this.root.setAttribute("status", this.state.status);
  		this.root.setAttribute("enabled", this.state.enabled ? "true" : "false");

  		this.manageFocus();

  		switch (this.state.status) {
  			case "closed":
  				this.trigger.setAttribute("aria-expanded", "false");
  				this.trigger.setAttribute("aria-label", "Open menu");
  				break;
  			case "open":
  			case "initial":
  				this.trigger.setAttribute("aria-expanded", "true");
  				this.trigger.setAttribute("aria-label", "Close menu");
  				break;
  			default:
  				console.log("Error Process State Change");
  		}
  	}

  	manageFocus() {
  		if (!this.state.enabled) {
  			this.focusableElements.forEach((element) => element.removeAttribute("tabindex"));
  			return;
  		}

  		switch (this.state.status) {
  			case "open":
  				this.focusableElements.forEach((element) => element.removeAttribute("tabindex"));
  				break;
  			case "closed":
  				[...this.focusableElements]
  					.filter(
  						(element) => element.getAttribute("data-element") !== "burger-menu-trigger"
  					)
  					.forEach((element) => element.setAttribute("tabindex", "-1"));
  				break;
  			default:
  				console.log("Error Manage Focus");
  		}
  	}
  }

  if ("customElements" in window) {
  	customElements.define("burger-menu", BurgerMenu);
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
