## React on Rails Interview Assignment

### Welcome to the React on Rails Interview Assignment README file

This example project is built with Ruby on Rails and React JS

Live demo: https://react-on-rails-cars.herokuapp.com/ 

In order to locally run the project please make sure your environment has the following installed
> Ruby v3+
>
>Rails v6.1.4+
>
>yarn v1.22.10+
>
>SQLite v3.36+

Once you have made sure your machine has everything installed, you can go ahead and clone this repository, then cd in to the cloned folder
> git clone https://github.com/tk-ni/rails-react-cars-app 
>
> cd rails-react-cars-app

When in our **rails-react-cars-app** we can install the necessary packages
> bundle install

After we've installed all our necessary packages, we need to migrate the database and seed it
> rails db:migrate
>
> rails db:seed

Eventually we will need to start the server with the command
> rails s

**Important Note :** When running locally, make sure you are running rails on the development environment (not production!) since this project uses SQLite for the development environment and Postgresql for production.
