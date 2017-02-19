# Team 418's Main Web Server Project

## Setting Up the Development Environment

### Starting the Container

*For all below commands, if you are using Linux, prepend `sudo`*

1. `docker pull josiah14/heroku-ruby418:latest` To make sure you have the latest version of the Docker container.  Docker will not automatically pull the latest version unless you explicitly tell it to.
2. run `./run-rails-container.sh`

This repository becomes accessible within the Docker container at `/app/user/website`.  You will initially be dropped into `/app/user`, so to access the server code in this repository, run `cd website` from within the container.

Zsh is the default shell, because it's a lot like Bash, but more informative.  If you don't like it, just change the `docker-compose.yml` to say `command: /bin/bash` instead of `command: /bin/zsh`.

Vim and Git are install inside of the container for your convenience.  However, this is set up so that you should be able to edit the code from your local machine using whichever editors you have installed (SublimeText, Atom, Ruby Mine, etc...).

**Important Note!** Any changes you make to the code inside of the container WILL be reflected on your local filesystem and vice versa.  This is a mount, not a copy.

### Building the Dependencies

1. Start the container (see previous section).  All following commands are run from inside of the container.
2. `cd website`
3. `bundle update && bundle`

### Run the Ruby on Rails Server and Access the Website

1. Build the Dependencies (see previous section).  All following commands are run from inside of the container.
2. `./server`
3. On your host machine (NOT inside the container), open a web browser and go to `localhost:3000`.  You should see the homepage, and the Docker container's CLI should be logging the server output to stdout.
