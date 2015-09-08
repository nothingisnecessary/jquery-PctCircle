AUTHOR
nothingisnecessary

DATE
8 SEP 2015

TITLE
JQUERY PLUGIN PctCircle (Percent Circle)


SUMMARY
This jQuery plugin will use pure CSS (modern browsers only) to draw a circle with a number from 0 - 100, 
and will draw a colored border arc.


SETTINGS

pct: 		numeric percent value; default = 0; optional

barColor: 	CSS-compatible color code of the border arc (the 'progress bar'); default = 'blue'; optional


REQUIRES

jQuery 1.0 or later. (I think, try it out!)


EXAMPLE USAGE

For 100% with green progress bar:

HTML

<div id='progress'></div>

JAVASCRIPT

$("#progress").PctCircle({pct: 100, barColor: 'green'})



FILES INCLUDED

README
LICENSE
jquery.pctcircle.js
jquery.pctcircle.css