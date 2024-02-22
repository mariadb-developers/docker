You’ll need Docker installed on your computer. If you haven’t done this already, please follow the installation instructions at https://docs.docker.com/engine/install. To verify a successful installation, you can run docker –version in your terminal, which should return the installed version of Docker.
#
1.) Docker-based Development Environment with MariaDB + VS Code + Cloud Beaver
The files are located in /docker/dev-env-cloudbeaver and based on Alejandro's Blog post here: 

[https://programmingbrain.com/2023/12/a-full-fledged-development-environment]

Accessing the IDE

After the services are up and running and the extensions are installed, navigate to http://localhost:8080 in your web browser. Enter the password defined in your Docker Compose file (in our case, CodePassword123!) to access the IDE.

Alternatively, you can use the Database Client extension for Visual Studio Code inside the IDE, in which case, you have to use mariadb as Host.

Running the containers

To start the services, open a terminal and navigate to the directory containing your docker-compose.yml and install-extensions.sh files and execute:

`docker compose up -d`
This command downloads the necessary Docker images and starts the containers as defined in your Docker Compose file. The -d flag runs the containers in detached mode, allowing them to run in the background.

After running the command, you can verify the progress by checking the logs:

`docker logs <container_name>`
Replace <container_name> with the name of the container.

Be patient! The first time you run this, Docker has to download the images to create the containers as well as the Visual Studio Code extensions. Check the logs to see the progress.
#
2.) Docker-based Development Environment with MariaDB + VS Code + DbGate
The files are located in /docker/dev-env-dbgate and is a variant, not an exact replica, of Alejandro's Blog post here: 

[https://programmingbrain.com/2023/12/a-full-fledged-development-environment]

Accessing the database client

You can access the DbGate database client by navigating to http://localhost:3000 in your web browser. The service is pre-configured to connect to your MariaDB server, so you can start interacting with your database right away.

Alternatively, you can use the Database Client extension for Visual Studio Code inside the IDE, in which case, you have to use mariadb as Host.

Running the containers

To start the services, open a terminal and navigate to the directory containing your /docker/dev-env-dbgate/docker-compose.yml and install-extensions.sh files and execute:

`docker compose up -d`
This command downloads the necessary Docker images and starts the containers as defined in your Docker Compose file. The -d flag runs the containers in detached mode, allowing them to run in the background.

After running the command, you can verify the progress by checking the logs:

`docker logs <container_name>`
Replace <container_name> with the name of the container.

Be patient! The first time you run this, Docker has to download the images to create the containers as well as the Visual Studio Code extensions. Check the logs to see the progress.
#
3.) Docker-based Development Environment with PHP + Laravel

The files are located in /docker/dev-env-laravel and is a variant, not an exact replica, of this excellent Digial Ocean blog post here: 

[https://www.digitalocean.com/community/tutorials/how-to-install-and-set-up-laravel-with-docker-compose-on-ubuntu-22-04]

You can follow and interpret the steps above, and build the travellist image from the Dockerfile, or use the image on Dockerhub
`docker pull mariadb/developers:travellist`
The nginx and mariadb community server images are already on Dockerhub. This travellist-demo/docker-compose.yml maps a local directory for the mariadb data directory (/mariadb_data).

Running the containers
To start the services, open a terminal and navigate to the directory containing the /docker/dev-env-laravel/docker-compose.yml and execute:

`docker compose up -d`
This command downloads the necessary Docker images and starts the containers as defined in your Docker Compose file. The -d flag runs the containers in detached mode, allowing them to run in the background.

After running the command, you can verify the progress by checking the logs:

`docker logs <container_name>`
Replace <container_name> with the name of the container.

Navigate to localhost:8000 to test the PHP/Laravel application.

#
4.) Docker-based Development Environment with NodeJS and ExpressJS

The files are located in /docker/dev-env-node and is a variant, not an exact replica, of this excellent blog post here: 

[https://alphonso-javier.medium.com/express-mariadb-with-docker-compose-d1af1dfae985](https://alphonso-javier.medium.com/express-mariadb-with-docker-compose-d1af1dfae985)

You can follow and interpret the steps above, and build the express app image from the Dockerfile, or use the image on Dockerhub
`docker pull mariadb/developers:dev-env-node`
The mariadb community server image is already on Dockerhub. This docker-compose.yml maps a local directory for the mariadb data directory (/maria-data).

Running the containers

To start the services, open a terminal and navigate to the directory containing the /docker/dev-env-node/docker-compose.yml and execute:

`docker compose up -d`
This command downloads the necessary Docker images and starts the containers as defined in your Docker Compose file. The -d flag runs the containers in detached mode, allowing them to run in the background.

After running the command, you can verify the progress by checking the logs:

`docker logs <container_name>`
Replace <container_name> with the name of the container.

Navigate to localhost:8000 and localhost:8000/desserts to test the ExpressJS application.

#
4.) Docker-based Development Environment with phpMyAdmin

The files are located in /docker/dev-env-phpmyadmin and is based on this quick post here: 

[https://mytchall.dev/running-mysql-and-phpmyadmin-locally-in-docker/]

The mariadb community server image is already on Dockerhub.  This docker-compose.yml maps a local directory for the mariadb data directory (/data).

Running the containers

To start the services, open a terminal and navigate to the directory containing the /docker/dev-env-phpmyadmin/docker-compose.yml and execute:

`docker compose up -d`
This command downloads the necessary Docker images and starts the containers as defined in your Docker Compose file. The -d flag runs the containers in detached mode, allowing them to run in the background.

After running the command, you can verify the progress by checking the logs:

`docker logs <container_name>`
Replace <container_name> with the name of the container.

Navigate to localhost:8080 in your browser to open PHPmyAdmin.
