# PctCircle (Percent Circle) jQuery plugin

This jQuery plugin will use pure CSS (modern browsers only) to draw a circle with a number from 0 - 100, 
and will draw a colored border arc.

![Example](http://noblenorthwest.com/dev/git/jquery.pctcircle/circle progress.png)


## SETTINGS

pct: 		numeric percent value; default = 0; optional

barColor: 	CSS-compatible color code of the border arc (the 'progress bar'); default = 'blue'; optional


## REQUIRES

jQuery 1.0 or later. (I think, try it out!)


## EXAMPLE USAGE

For 100% with green progress bar:

### HTML

<div id='progress'></div>

### JAVASCRIPT

$("#progress").PctCircle({pct: 100, barColor: 'green'})

### LIVE DEMO ON JSFIDDLE: [http://jsfiddle.net/d779m5en/](http://jsfiddle.net/d779m5en/)

## FILES INCLUDED

* README
* LICENSE
* jquery.pctcircle.js
* jquery.pctcircle.css
