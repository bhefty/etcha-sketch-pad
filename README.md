#Project: Javascript/jQuery

In this project, you'll get a chance to actually build a pretty nifty tool to flex your Javascript and jQuery muscles. Build a browser version of something between a sketchpad and an Etch-A-Sketch.

1. Create a web page (or use JSFiddle) with a 16x16 grid of square divs.
2. Create your divs using Javascript/jQuery... don't try making them by hand with copy-pasting!
3. Best to put your grid squares inside another "container" div.
4. There are several different ways to make the divs appear as a grid (versus just one on each line) -- float/clear, using a table, and inline-block displays. Play with each of them.
5. Careful with your border or margins... they'll add size to the squares!
6. Set up a hover effect so it changes the color of the square when your mouse passes over it, leaving a (pixelated) trail through your grid like a pen would.
   + There are again several ways to change the color -- adding a new class (addClass()), changing that div's background color individually, etc.
7. Add a button to the top of the screen which will clear the current grid and send the user a popup asking for how many squares per side to make the new grid. Once entered, the new grid should be generated in the same total space as before (e.g. 960px wide) and now you've got a new sketch pad.
   1. You should be able to enter 64 and have a new 64x64 grid pop up in front of you without changing the total amount of pixels used.
   2. Why is it so slow?? Remember that when you call a jQuery selector like $(".square"), it actually returns you ALL the elements that fit the description. So if you're doing those types of operations hundreds of times inside a loop, it can get very time consuming... try pulling those outside your loops.
   3. See how many grid squares you can get before it becomes unusably slow.
8. (Optional): Instead of just changing the color of your grid from black to white (for example), have each pass through it with the mouse change to a completely random RGB value. Then try having each pass just add another 10% of black to it, so only after 10 passes is the square completely black.
