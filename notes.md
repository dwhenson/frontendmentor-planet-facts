# TODO

## Partials

   <!-- - Base -->
   <!-- - Header -->

-  Hamburger menu?

2. Pages

-  Pagination for pages using JSON file
   <!-- - From front matter -->
   <!-- - Create planet collection -->

## Styling and SCSS

-  Work on main layout
   <!-- -  Buttons at multiple viewports -->
      <!-- -  Add in numbered items -->
      <!-- -  Work on details layout -->
-  Work on navigation layout
-  Add in some transition smoothing
-  Check where to add class in CSS for accents

## JS

-  Burger menu
-  Buttons and content depending on viewport
   UP-NEXT
   Inits
   <!-- -  Set all hidden text wtih JS - content and sources -->
   <!-- -  Show first item in each array and add active class to button -->
   <!-- -  Change link to a role of button? -->
         <!-- App -->
      <!-- -  Create updateContent function to hide/show as requried -->
      <!-- -  Add comments to all sections -->
      <!-- -  Refactor for common approach to locate target item in array -->

# FIXME

-  Text wrapping on bottom flex
-  Different text on buttons/viewport
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
