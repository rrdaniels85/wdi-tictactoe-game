[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Star Wars Tic Tac Toe Project

This project is a single page application that allows a user to sign up, sign in, and then play a game of tic tac toe against an opponent. It includes additional functionality such as signing out, changing the user's password, creating a new game, and seeing the number of wins that a player has achieved.

Challenge a partner to a fun game of Tic Tac Toe!

## URL Section
[Link to Hosted Tic Tac Toe Game](https://rrdaniels85.github.io/wdi-tictactoe-game/)

## Dependencies

Install with 'npm install'
-   [Webpack](https://webpack.github.io)
-   [Bootstrap](http://getbootstrap.com)
-   [Handlebars.js](http://handlebarsjs.com)

## Additional Technologies Used

-   [imgur](http://imgur.com/) - For storing images used with my app and storing wireframes.
-   [googledocs](https://www.google.com/docs/about/) - For storing my user stories.

## Wireframes

-   [Initial Wireframes](http://imgur.com/a/kPpbs)
-   [Updated Wireframes](http://imgur.com/a/W8Tx6) - I updated to these as my project progressed.

## User Stories

[List of User Stories](https://docs.google.com/document/d/1yhYfxM2QOfAREWLdPOLoN9FjDc9Ps4tP5jKFVTuB2I0/edit?usp=sharing)

## Planning, Development Process & Problem Solving

Before I did any actual coding, I first created an initial set of wireframes and user stories detailing exactly what I want my app to do and why. After completing my initial project planning, I
began to focus on the development work itself. The first problem that I wanted
to tackle was the actual internal game logic required for Tic Tac Toe. I felt
that the main challenges were filling in the game board, changing turns between players,
and checking for winning scenarios. I made sure to actually draw out all the possible wins in Tic
Tac Toe on a piece of paper and consider the other options (such as a draw, or a game not yet
being over). I then wrote and tested the internal logic in a javascript console until I was able to verify that it was working as desired.

My next step was to create a basic HTML page with all the required items. This included the header, board, and any required buttons. I applied very little CSS at this point, though I did utilize Bootstrap to set up my initial board. With the basic page elements in place, I then used jQuery to set up appropriate event handlers so that the page responded to clicks and user interactions. I experienced some challenges navigating jQuery at first but was much more comfortable with it by the end. I then inserted my game logic and was able to verify that it was working correctly along with the event handlers.

Once I was able to verify that my game was working locally at a basic level, I turned my attention to connecting my app
to the API. I first focused on the authorization events: sign in, sign up, change password, and sign out. Using Ajax, I was able to successfully communicate with the server and get the authorization events working correctly without much issue.

I then began work on connecting game events to the API such as: creating new games, updating games, and getting game history. I found that creating new games and updating games were fairly straightforward once I figured out how to structure the data correctly to send to the API. It was also fairly straightforward to retrieve the game history. I found it more challenging to figure out how to take the response of completed games and then run it through a function to check for games that were wins. I needed this in order to display total wins to the user. Once I figured out how to properly access the cells keys in the response from the API, the rest fell into place.

At that point, I opened a new folder specifically titled "game" in my repository. I wanted to practice separation of concerns by keeping my authorization files in a separate place from my game action files. This required me to move my code around a bit which took some time to ensure everything was communicating correctly. In retrospect, it would have been better to have started out with the game logic/functionality and authorization events in separate places.

Once I had ensured that all required game functionality was occurring, I then focused on my CSS, HTML, and over all user experience. Some of my biggest challenges were connected to getting my CSS and HTML to look and behave how I wanted. For example, I struggled getting modals to work during our in-class training session but I knew that I wanted to incorporate them in my UI. I ended up spending a significant amount of time working to get my modals to work with my event handlers and API functionality properly. I also had to do some research to figure out how to adjust my app's layout. I built my game with a Star Wars theme which was reflected in the text, coloring, images, and background. I think that further mastering CSS is something that I'm interested in pursuing as we continue and is definitely a growth opportunity for me. While I got my site looking closer to how I envisioned, there are still changes to the UI I would want to make down the road in order to make it appear more sophisticated in future iterations.

Finally, an additional item that I tackled was further developing my modals and user views. I did this by figuring out how to clear text from the form fields in the modals in between uses (so prior entries were not retained) and adding messages to notify the user if they entered invalid information. I thought this would make for a better user experience with my app. In addition, I adjusted the view so that only certain buttons were visible before sign in (sign in and sign up) and then the remaining buttons only appeared after a user signed in.

## Unsolved Problems

There was additional bonus functionality that I would have liked to have added to the application but was unable to include in this iteration due to time constraints. In the future, I would like to:

-   Add custom tokens that the user could select (example: Jedi or Sith figures)
-   Create a win counter for the number of games won in a single session
-   Allow for players to play each other on multiple devices
-   Make further updates to my UI using Bootstrap to create a more sleek user interface

## License

All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
