# TODO

## Structure and 11ty

-  Pagination for pages using JSON file

## FIXME

-  Render all images either through markdown or 11ty and pagination
   <!-- -  Put surface image back in flow to prevent overflow -->
   <!-- -  Work on nav panel when open - 100vh? And no scroll? -->

# README

## Key points

1. Many pages so some form of templating needed - SSG 11ty and nunjucks. AB 11ty course with some other additions
   -  Nav menu with JS helper
   -  Data for pages with pagination
2. Data in json. I split into separate md files rather than iterate over object and render - best? Works well with 11th - easy to add new planets!
3. Center section layout was a challenge, wanted to keep source and tab order logical. Concluded a tabbed interface not any more? Tried/Failed with CSS
4. Setting a custom property in the document head using nunjunks - is that a good idea? Use inline styling to use the cascade to apply different accents underneath to each `li`

## A11y

-  Source code order and tab order - a bit contradictory - but the details in a list inside the `aside` mainly as it has a built in landmark and seemed more appropriate than `footer`
-  Would have liked to have the links in the buttons fill content so outline styles better
   -  Possible solution with JS, but if JS fails have links that are not keyboard focusable, have to set attributes in JS on init - seemed like a downward spiral...

## Progressive Enhancement

-  No CSS - not ideal as headers and content are separate but works, just about.
-  No JS
   -  Burger menu
   -  Showing content - would have liked to render some initial text cannot make it work no matter what combination of selectors I tried!
