You’ll need Docker installed on your computer. If you haven’t done this already, please follow the installation instructions at https://docs.docker.com/engine/install. To verify a successful installation, you can run docker –version in your terminal, which should return the installed version of Docker.

Docker-based Development Environment with MariaDB + VS Code + Cloud Beaver
[https://programmingbrain.com/2023/12/a-full-fledged-development-environment]


Docker-based Development Environment with PHP + Laravel
[https://www.digitalocean.com/community/tutorials/how-to-install-and-set-up-laravel-with-docker-compose-on-ubuntu-22-04]

Docker-based Development Environment with NodeJS and ExpressJS
[https://alphonso-javier.medium.com/express-mariadb-with-docker-compose-d1af1dfae985](https://alphonso-javier.medium.com/express-mariadb-with-docker-compose-d1af1dfae985)

Running the containers
#
To start the services, open a terminal and navigate to the directory containing your docker-compose.yml and install-extensions.sh files and execute:

`docker compose up -d`
This command downloads the necessary Docker images and starts the containers as defined in your Docker Compose file. The -d flag runs the containers in detached mode, allowing them to run in the background.

After running the command, you can verify the progress by checking the logs:

`docker logs <container_name>`
Replace <container_name> with the name of the container.

Be patient! The first time you run this, Docker has to download the images to create the containers as well as the Visual Studio Code extensions. Check the logs to see the progress.
