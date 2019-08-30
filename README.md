# CSS JS Clock

### A live analog clock displaying the current time.

---

## Overview

The Html and Css were imported off of the Javascript30 course, the javascript being my contribution.

The background and rustic colours, as well as the animation on the second hand that feels almost like it's being 'winded up', is designed to give a analog, mechanical asthetic. I decided this was a good idea since the whole idea of a computer operating an analog clock feels old in style, and I decided to lean into that feeling.

## Javascript Information

#### Set Interval

SetInterval is used to repeat a function after a certain interval, measured in milliseconds. In this project it was used to repeat the functions that changed the rotation of each hand, each second.

`setInterval([function], [time (ms)])`

#### .Style

.style is a .method that can add or change the css for a particular html element. It was used to change the rotation of the second, minute, and hour hands by changing their individual css.

This allows us to change the element's css without having to change it's class with classList.

`[html-element].style.[css-method] = "[css-method-value]"`

## Review

Overall the project has enough functionality and personal flair to be considered completed.

Additional improvements would be to fix the small bug where the second hand doesn't transition properly between 59 and 60 seconds on the clock, as-well as to fix the warping problems when the screen gets too thin, perhaps by making the size dependent on the screen than a set amount of pixels.

Good additions would be to translate it into an app that could be placed in a desktop or background, as well as adding numbers to the clock or steam-punk asthetic animations in the background.