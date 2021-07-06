# TODO

## Structure and 11ty

-  Pagination for pages using JSON file
   <!-- - From front matter -->
   <!-- - Create planet collection -->

## HTML

<!-- -  Try refactoring button list to dl/dt/dd -->

## SCSS

-  Add psudeo element after source
   <!-- -  Make nav bottom border span entire screen width -->
      <!-- -  Buttons at multiple viewports -->
      <!-- -  Work on navigation layout -->
      <!-- -  Adjust breakpoints to avoid wrapping in tablets? -->
      <!-- -  Text wrapping on bottom flex -->
      <!-- -  How to have link accent pick up custom property -->
      <!-- -  Add in some transition smoothing -->

## JS

-  Add comments to focusable/Burger menu, and check in compiled
   <!-- -  Deal with additional images -->
   <!-- -  Sort structure and order in JS files -->
      <!-- -  Expanded menu content, size positioning -->
      <!-- -  Alignment of icon -->
      <!-- Inits -->
      <!-- -  Set all hidden text with JS - content and sources -->
      <!-- -  Show first item in each array and add active class to button -->
      <!-- -  Change link to a role of button? -->

# FIXME

-  Body is now larger than 100vh - change geology to relative and adjust?
-  Source looks bad if JS fails
-  CSS show last .content if previous:not(target)
-  Check with screen reader
-  Refactor SCSS to use extends
-  Refactor JS to remove function repetition
   -  Check all SCSS files used
   -  Check repetitive CSS => @extends or utility class
   -  Check JS structure
      <!-- -  Double check style in head - is this the best place? Or Lower?? -->
            <!-- -  Separator is on top of underline in mobile view -->
            <!-- -  Border causing jank on mobile links, and impacted by border radius -->

# ReadMe

1. Many pages so some form of templating needed - SSG 11ty and nunjucks. AB 11ty course with some other additions
   -  Nav menu with JS helper
   -  Data for pages with pagination
2. Data in json. I split into separate md files rather than iterate over object and render - best? Works well with 11th - easy to add new planets!
3. Center section layout was a challenge, wanted to keep source and tab order logical. Concluded a tabbed interface not any more? Tried/Failed with CSS
4. Setting a custom property in the document head using nunjunks - is that a good idea? Use inline styling to use the cascade to apply different accents underneath to each `li`

A11y

-  Source code order and tab order - a bit contradictory

Progressive Enhancement

-  No CSS - use target element as backup
-  No JS
   -  Burger menu
   -  Showing content - is last .content possible, first would be better
