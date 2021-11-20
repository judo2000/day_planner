<div id="top"></div>

  <h3 align="center">Day Planner</h3>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://judo2000.github.io/week5_day_planner/)

This is my judo quiz project.  This week we were given starter code which had  [Bootstrap] and [jQuery] already installed.

The index.html page had a container where I was to put my code for the day planner.  I decided not to hard code the planer but to build it all dynamically using [jQuery].  The first thing I did was use the [Moments.js] API as instructed to get the current day to post at the top of the page.

Next I used a for loop setting i = 9 and running it until 18 and set the time for each iteration to i.  I found a functio, I believe on a [Stack Overflow] question to convert military time to standard time.  I edited the function to add am or pm to each time to be added to the planner.  When creating the div containing the activity and the textarea, I pass i to a function I created to to see if the i was the before, the same or after the current hour.  I used the isBefore, isSame, and isAfter functions from [Moments.js] do the comparisons.

In the for loop, I also called on local storage to get any item with the id of i and appened the text into the textarea.  

After completing the for loop I then creaed a click handler for the save button.  When the user enters something into the form and clicks the save button the click handler gets the id and text from the form and submits them to local storage.  I got the icon for the save button from [Font Awesome] which was also pre-installed.


<p align="right">(<a href="#top">back to top</a>)</p>


### Built With

* [Bootstrap]
* [jQuery]
* [Moments.js]
* [Font Awesome]

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Stephen Moore - judo2000@comcast.net

Project Link: [The Day Planner Page](https://judo2000.github.io/week5_day_planner/)

Github Repo Link: [Github repository ](https://github.com/judo2000/week5_day_planner)

<p align="right">(<a href="#top">back to top</a>)</p>

[product-screenshot]: project_screenshot.png
[Bootstrap]: https://getbootstrap.com/
[jQuery]: https://jquery.com/
[Moments.js]: https://momentjs.com/
[Font Awesome]: https://fontawesome.com/