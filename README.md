# ExamMovieSite
Exam movie site is a database for storing information about your favorite movies. Its coded in AngularJS and it was made for my exam for fourth semester for my Datamatiker education. 

To run it, type npm install -g @angular/cli to make sure you have angular-cli installed
then build it with ng-build
and finally to run the application in your browser, type ng-serve.

It uses a local json-server as a database https://www.npmjs.com/package/json-server

to initialize that, install with npm install -g json-server
to start the server with the already made database, navigate to /src/assets and run it with json-server --watch db.json, this should fill the movie list with movies.


The site involves an admin page, where the admin can create movies, see current movies or search for a specific movie.
As a regular user you can register on the site and then login with the login info.
