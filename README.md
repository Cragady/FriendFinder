[Application](https://immense-reef-53914.herokuapp.com/)

# **Purpose**

The purpose of this project is to deploy a web application that finds friends that share similar interest according to how they answer the survey. This app utilizes the npm modules `express`, `body-parser`, and `path` to function.

# **Brief Explanations**

## **front.js**

`front.js` writes out the survey in `survey.html`, and sets variables to send to `apiRoutes.js` through the server using `$.post()`.

## **friends.js**

Stores all of the friends in the object `friends`.

## **server.js**

`server.js` takes the url path and post requests from the client, and sends the html files from `/routing` or data from `friends.js` depending on the request. It also serves a static file path so that the html files can utilize the javascript, css, and image files in `/front-js-css`. 

`server.js` connects to `htmlRoutes.js` and `apiRoutes.js` for changing the html files and processing of requests for data.

## **htmlRoutes.js**

Handles the url requests and sends `survey.html` or `home.html` corresponding with the url parameters.

## **apiRoutes**

`apiRoutes.js` handles the GET and POST requests. 

`router.get("/api/friends"...)` sends the client all of the information in `friends.js`. 

`router.post("/api/friends")` posts new friends to `friends.js`. To post a new friend and find a match, this utilizes a combination of the following: if statements, `array.prototype.map()`, `array.prototype.reduce()`, `array.prototype.findIndex()`, `array.prototype.splice()`, math floor, math random. These all work in tandem with switching definitions of variables to compare the total difference and finding the index of the lowest score difference in the array to match the friends. The logic is written in a way so that the client can't match with itself if the client resubmits the survey under the same name. If there are two or more matches that have the same lowest score difference, the math randoms are used to randomly choose between the friends that tied.

# **Demo**

<img src="friend-finder.gif" style="height: 450px; width: 700px;" alt="Friend-Finder Demo">