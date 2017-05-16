# Team 418's Main Web Server Project

## Setting Up the Development Environment

### Starting the Container

*For all below commands, if you are using Linux, prepend `sudo`*

1. `docker pull josiah14/heroku-ruby418:latest` To make sure you have the latest version of the Docker container.  Docker will not automatically pull the latest version unless you explicitly tell it to.
2. run `./run-rails-container.sh`

This repository becomes accessible within the Docker container at `/app/user/website`.  You will initially be dropped into `/app/user`, so to access the server code in this repository, run `cd website` from within the container. Also, by default, Docker will log you into the container as the `user` user.  The sudo password for `user` is "user" (without the quotes).

Zsh is the default shell, because it's a lot like Bash, but more informative.  If you don't like it, just change the `docker-compose.yml` to say `command: /bin/bash` instead of `command: /bin/zsh`.

Vim and Git are install inside of the container for your convenience.  However, this is set up so that you should be able to edit the code from your local machine using whichever editors you have installed (SublimeText, Atom, Ruby Mine, etc...).

**Important Note!** Any changes you make to the code inside of the container WILL be reflected on your local filesystem and vice versa.  This is a mount, not a copy.

### Building the Dependencies

1. Start the container (see previous section).  All following commands are run from inside of the container.
2. `cd website`
3. `bundle update && bundle` If prompted for the password, it's `user`

### Run the Ruby on Rails Server and Access the Website

1. Build the Dependencies (see previous section).  All following commands are run from inside of the container.
2. Run `bundle exec rake db:create db:migrate`
2. `./server`
3. On your host machine (NOT inside the container), open a web browser and go to `localhost:3000`.  You should see the homepage, and the Docker container's CLI should be logging the server output to stdout.

### Exiting the Container without Killing It

If you try to just exit the Docker container, it will stop the container and delete any changes you made to it (like installing the Ruby Gems).  Run the following command to exit the container without stopping it.

- `<Ctrl>-p + <Ctrl>-q` Read as Control and p, then Control and q.

On Mac, simply type `exit` at the terminal

### Reattaching to the Rails Container After Exiting it without Killing It

Once you exit the container as in the above section, You'll probably want to get back into it at some point.  The below command lets you do that.

- `docker attach ruby418` (You need to add `sudo` if you are on Linux).

### Saving changes you make to your container

You might want to save changes you make to your container at some point.  Such changes might include changing your dot config files (such as .zshrc) or gem installations done through Ruby Bundler, like `bundle install`.  To do that, run the following command:

- `docker commit ruby418 josiah14/heroku-ruby418:latest` (if you are on Linux, use `sudo`)

The first parameter, ruby418, is the name of the container.  The second parameter, josiah14/heroku-ruby418:latest, is the name of the image.  You may want to change this name so that it doesn't conflict if you ever need to update the main image using `docker pull`.  To do that, you could create your own DockerHub account and save it as image `janedoe/heroku-ruby418:latest` if you want.  If you do this, make sure you update the image name in your `docker-compose.yml`, and edit the team's `.gitignore` to ignore this file so that you don't check in this file and break everyone else's build (they might not want to use your customized container).

### Pushing changes to Docker for the team

Some changes to the container could benefit the entire team (like caching bundle install runs).  However, before you do this, PM the `general` slack channel with `@channel` to notify everyone.  You must get a thumbs-up from at least one Rails dev, one Javascript dev, and one Graphic Designer before you can push the change to `josiah14/heroku-ruby418:latest`.

## Testing

### Rails Server Integration Tests

On the Rails server side of things, the intergration tests are written using Cucumber via the cucumber-rails Gem.  Features are in the `features` directory, and the test code which implements the features is found in the `features/step_definitions` directory.

#### Running the Tests

To run the tests, execute the following command from the `/app/user/website` directory inside of the `josiah14/ruby418` docker container.

- `cucumber -s`

