# Primal Studio — Project 2 starter
Nicholas Starks · DGN 340 Web Design 1

Three plain HTML pages with shared CSS and JavaScript. No npm, build command, or framework required.

## Start on your Mac
1. Unzip the download. Move the `primal-studio` folder to your Desktop or your class projects folder.
2. In VS Code choose File > Open Folder and select `primal-studio`.
3. Open `index.html` in your browser, or use VS Code Live Server if already installed.
4. Edit the files, save, and refresh your browser.

## Create the NEW GitHub repository
1. On GitHub choose New repository. Suggested name: `primal-studio-project-2`.
2. Choose Public so your professor can access the repository, as explained in your class lecture. Do not add a README, license, or .gitignore on GitHub because this folder already contains starter files.
3. Create repository, then select “uploading an existing file” or Add file > Upload files.
4. Drag the CONTENTS of `primal-studio` into the upload area: index.html, photography.html, barbering.html, css, js, images, and README.md. Keep the folders intact. Do not upload only the ZIP or nest everything inside another folder.
5. Commit changes. Your repository link is the page address GitHub shows. Do not submit a made-up repository URL.

Uploading gives you a GitHub copy and a local folder, but does not automatically sync edits.
For ongoing Git synchronization, use GitHub Desktop: clone the new repository into a fresh local folder, open that cloned folder in VS Code, then commit and push subsequent changes there.

## Files
- index.html: introduction, two portfolio previews, contact, general-area map, FAQ accordion.
- photography.html: six-image gallery, filters, image dialog, session copy, video insertion point, external link.
- barbering.html: haircut gallery, before/after reveal, inquiry copy.
- css/style.css: shared palette, typography, desktop and mobile layouts.
- js/script.js: email configuration, filters, lightbox, comparison control.
- images/: locally included, clearly labeled SVG placeholders.

## Customize before submission
1. In js/script.js set PUBLIC_EMAIL to your public email address. Until then Contact Nick leads to the setup note and does not send email.
2. Replace placeholders with ORIGINAL photos at least 1250 pixels wide. Change each HTML src to the new .jpg/.png filename. Update alt text and captions to describe the actual photograph. The six gallery spaces are not six completed photos.
3. Add your own MP4 and caption VTT file. The commented video example is in photography.html. Replace the video placeholder and add a transcript. No working video is included yet.
4. Confirm the general Long Beach map area or replace it. It is not a claimed studio address.
5. Review the draft copy for accuracy. No prices, appointment confirmations, or testimonials are invented.
6. Capture one browser screenshot per page after adding your content. Add those to your previous presentation, along with setup and feature progress.
7. Submit the actual GitHub repository URL, three screenshots, and your updated slides.

## Fonts
Oswald Bold headings and Source Sans 3 body text load through Google Fonts. No local installation is needed for the website. Internet access is required to download them, and CSS provides fallback fonts.

## Accessibility and design
Charcoal #171C1E, ivory #F5F2EB, teal #006B68, white #FFFFFF.
Calculated contrast: charcoal/ivory 15.38:1, teal/ivory 5.69:1, white/teal 6.36:1.
Native details/summary accordion, keyboard-friendly buttons, focus styles, skip link, native dialog, and responsive layout.

## Credits
Draft HTML, CSS, JavaScript, text and labeled SVG placeholders: created with ChatGPT assistance for this project. Review and adapt as part of the class AI policy.
Fonts: Google Fonts, Oswald and Source Sans 3. https://fonts.google.com/
Map: Google Maps, general Long Beach area. https://maps.google.com/
External link: Canon official website. https://www.canon.com/
Add original-photo credits and your video source when replacing the placeholders.

This is starter code, not a completed submission. Repository creation, your original media, email configuration, screenshots, and presentation updates remain.

## Pocket lecture connections
- Intro to HTML exercises, September 1, 2026: boilerplate, index.html and structure.
- Introduction to CSS and Web Styling, September 8, 2026: all files inside the repository, exact lowercase image paths, shared external stylesheet.
- IDs Classes and Divs Instruction, September 15, 2026: related content in containers, reusable classes, unique section IDs.
- CSS Flexbox Grid and Layouts, September 22, 2026: box model, padding, margins, flex navigation and grid layouts.
- Introduction to JavaScript and Web Interactivity, September 29, 2026: selectors and event listeners for page behavior.
- Web Hosting and Project Presentation, October 6, 2026: distinguish repository from published website and document progress.
These notes guided the implementation. Gallery dialog, comparison range and native FAQ are starter implementations for the supplied assignment; they are not claimed as exact Week 10 lecture examples.

## Wireframe mapping
Home: introduction and featured image, both portfolio previews, short biography, contact section.
Photography: introduction and inquiry button, gallery filters, six image spaces, session overview, process-video area.
Barbering: introduction and featured haircut, gallery, matching comparison, service-interest guidance.
Every page has the same navigation, a logo returning Home, and Contact Nick linking to index.html#contact.
