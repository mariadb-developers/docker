# docker


Docker-based Development Environment with MariaDB + VS Code + Cloud Beaver
https://programmingbrain.com/2023/12/a-full-fledged-development-environment

Running the containers
#
To start the services, open a terminal and navigate to the directory containing your docker-compose.yml and install-extensions.sh files and execute:

docker compose up -d
This command downloads the necessary Docker images and starts the containers as defined in your Docker Compose file. The -d flag runs the containers in detached mode, allowing them to run in the background.

After running the command, you can verify the progress by checking the logs:

docker logs <container_name>
Replace <container_name> with the name of the container.

Be patient! The first time you run this, Docker has to download the images to create the containers as well as the Visual Studio Code extensions. Check the logs to see the progress.
