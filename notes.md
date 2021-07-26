# TODO

## Structure and 11ty

- Pagination for pages using JSON file
- Render all images either through markdown or 11ty and pagination
- Update font loading strategy

## FIXME

<!-- - Outline styles for buttons - remove list styles, hard code and set a to block -->

- Add some spacing to the aside button
- Prevent scrolling on body when burger menu is open?
- Try inlining svg through markdown
- Download and host fonts locally: https://gomakethings.com/better-font-loading-with-the-font-displayswap-property/

## STEPS to pagination

1. Set up pagination front matter with HTML below the FM in the same page?
2. One per page and work on slug - check SE's video if needed

## STEPS to inline

1. See if pagination will work - as that impacts where inline will go... see above
2. Use include and file path + frommatter title | lower to inline svg
3. Add class or make it so can be selected in JS - this needs to work for final image too
