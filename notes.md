# TODO

## Partials

   <!-- - Base -->
   <!-- - Header -->
<!-- -  Hamburger menu? -->

## Pages

-  Pagination for pages using JSON file
   <!-- - From front matter -->
   <!-- - Create planet collection -->

## Styling and SCSS

   <!-- -  Buttons at multiple viewports -->
<!-- -  Work on navigation layout -->

UP-NEXT

-  Adjust breakpoints to avoid wrapping in tablets?
-  Text wrapping on bottom flex
-  How to have link accent pick up custom property
-  Add in some transition smoothing

## JS

Add documentation to JS files

-  Change App comment to main content under funcs
-  Add comments to focusable/Burger menu
      <!-- -  Expanded menu content, size positioning -->
      <!-- -  Alignment of icon -->
      <!-- Inits -->
      <!-- -  Set all hidden text with JS - content and sources -->
      <!-- -  Show first item in each array and add active class to button -->
      <!-- -  Change link to a role of button? -->
   <!--          <!-- App -->

# FIXME

-  Refactor border code for buttons
-  Source looks bad if JS fails
   <!-- -  Separator is on top of underline in mobile view -->
   <!-- -  Border causing jank on mobile links, and impacted by border radius -->

# ReadMe

1. Many pages so some form of templating needed - SSG 11ty and nunjucks. AB 11ty course with some other additions
   -  Nav menu with JS helper
   -  Data for pages with pagination
2. Data in json. I split into separate md files rather than iterate over object and render - best? Works well with 11th - easy to add new planets!
3. Center section layout was a challenge, wanted to keep source and tab order logical. Concluded a tabbed interface not any more? Tried/Failed with CSS
4. Setting a custom property in the document head using nunjunks - is that a good idea? What about CP scope?
