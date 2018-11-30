# Steganography

Load in an image and be able to read and write hidden messages to the image. Images fit to page but retain their full resolution when loading in and saving.

### How to use

run `npm install` (mainly for cypress.io testing)

copy the `index.html` path to your browser to run

A series of buttons and a text box will appear.

`SELECT IMAGE` prompts the user to load a local image

`RESET` wipes the text box and retrieves the original image before a message is added to it

***If the image already has a message it won't write over it but will wipe any recent changes you have made***

`RETRIEVE MESSAGE` displays any message within the image (if there is no message nothing will display)

`SAVE IMAGE` currently saves the image as a png file with any messages written to it.

`ADD MESSAGE` adds the message to the currently displayed image


### Testing

Cypress and Jasmine

`npm test` for Cypress testing

Copy path of `SpecRunner` to browser to run Jasmine tests


### How it is done

I'm still playing around with encoding the message and retrieving it and there is refactoring I still need to do in terms of making it run more efficiently.

Currently the text message you add is converted to the character key integer then to binary. The image is broken down into into pixels and then each pixel containing four pieces of information (RGBA) is broken down to binary. One bit at a time from the converted text is inserted into the first bit of the red pixels(at the moment). When reading the image the opposite is essentially done. Unless you knew what to look for there is no way you could tell the message was there.
