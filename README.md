# Frontend Mentor - Planets fact site

![Design preview for the Planets fact site coding challenge](./preview.jpg)

## The challenge

Your challenge is to build out this 8-page planets fact site and get it looking as close to the design as possible. Your users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- View each planet page and toggle between "Overview", "Internal Structure", and "Surface Geology"

## Lessons learnt

My first time using a static site generator (11ty), templating language (nunjucks) and bundling, minifying and combining SCSS, ES6 modules and images into a build folder so a lot to learn on this one...

Some key points:

- 💡 11ty and nunjucks is hard. I can see how powerful the combination can be but I need to to some more challenges so that I can get comfortable with this way of working
- 💡 Center section layout was a challenge, wanted to keep source and source order logical moving the content around between views made this very difficult
- 💡 I set the `--accent` custom property in the document head using nunjunks based on each page's title. This enabled me to apply the unique colors to each page easily
- 💡 Similarly, I did the same with with inline styling and the cascade to apply the different color accents on the 'buttons' - I don't know if either of these is a good idea?
- 💡 At the last minute I but the details in a list inside the `aside` mainly as it has a built in landmark and seemed more appropriate than `footer`
- 💡 For progressive enhancement:
  - Without the CSS the HTML appears a mess, I really struggled to improve this with the layout moving so much
  - Without JS everything works, the burger menu falls back OK, and I used `:target` to move focus between the links and content
  - One major issues is that I could not workout how to show some initial initial content from the overview section without JS. I tried A LOT of selector combinations.
- 💡 For accessibility:
  - I just tested with a screen reader in Chrome and it seemed fine. Some tweaking was needed when the link text changed.
  - I wondered if I needed `aria-labelledby` on the content sections but it seemed to work with the anchor links moving focus so I didn't add it.

## Future learning

A lot!

- 🙇‍♂️ - I took the data out the JSON file and moved it into separate markdown files that 11ty converted into HTML. I have read that I can just create pages straight from the JSON, but I couldn't make this work.
- 🙇‍♂️ - Would have liked to have the links inside the 'buttons' to fill content so the outline styles looked better. I achieved this using JS, but then I had to set attributes and mess with the tabIndex, which all seemed like too much.

## Resources

- 🔗 I used Andy Bell's totally full on [Learn Eleventy from Scratch Course ](https://github.com/pawelgrzybek/siema) which is excellent, really in-depth, really hard, and free!. It should probably be called learn 11ty, SASS, gulp, some accessibility stuff and how to structure CSS...
