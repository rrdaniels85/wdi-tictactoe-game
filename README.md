[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Star Wars Tic Tac Toe Project

Challenge a partner to a fun game of Tic Tac Toe

[Link to Hosted Tic Tac Toe Game] (https://rrdaniels85.github.io/wdi-tictactoe-game/)

# Dependencies

Install with 'npm install'
-   [Webpack](https://webpack.github.io)
-   [Bootstrap](http://getbootstrap.com)
-   [Handlebars.js](http://handlebarsjs.com)

## User Stories


## Development Process
After completing my initial project planning (wireframes and user stories), I
began to focus on the development work itself. The first problem that I wanted
to tackle was the actual internal game logic required for Tic Tac Toe. I felt
that the main callenges were filling in the game board, changing turns between players,
and checking for winning scenarios. I made sure to actually draw out all the possible wins in Tic
Tac Toe and consider the other options (such as a draw, or a game not yet
being over). I then wrote and tested the internal logic in a console until I was able to verify that it was working as


My next step was to create a basic HTML page with all the required items. This included the header, board, and any required buttons. I applied very little CSS at this point. I did utilize Bootstrap to set up my initial board. With the basic page elements in place, I then used jQuery to set up appropriate event handlers so that the page responded to clicks and user interaction. I then inserted my game logic and was able to verify that it was working correctly.

Once I was able to verify that my game was working locally at a basic level, I turned my attention to connecting my app
to the API. I first focused on the authorization events: sign in, sign up, change password, and sign out. Using Ajax, I was able to successfully communicate with the server and get the authorization events working correctly.

At that point, I opened a new folder specifically titled "game" in my repository. I wanted to practice separation of concerns by keeping my authorization files in a separate place from my game action files. This required me to move my code around a bit which took some time to ensure everything was communicating correctly. In retrospect, it would have been better to have started out with the game logic/functionality and authorization events in separate places.






# License

All content is licensed under a CC­BY­NC­SA 4.0 license.
All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.
