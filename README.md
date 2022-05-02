# User Interaction Portal

This is a social media based capstone project having functionalities

## Feautres

- Authentication of users
- Google Sign-in option
- User can add posts.
- View posts of other users
- Like/dislike posts.
- Chat with other users in realtime.

## Contributors :

- Daksh Bindal
- Dushyant Gupta
- Samyak Goyal
- Tarun Kochar
   
## Tech Stack Used:

- **NodeJS** --> for Backend develepment
- **ReactJs** --> for Frontend development
- **Socket.io** --> for implemention of chat functionality
- **CSS** --> styling of the application
- **Bootstrap** --> for styling of the application
- **MongoDB-Atlas** --> for Database
- **Postman** --> for checking the API calls
- **Github** --> for deployment of our work
- **Docker and Docker compose** --> to deploy our image for easier transition to ec2 instances
- **DockerHub** --> to host our images
- **AWS EC2 instance** --> to run our application at a public level


## Installing Docker (on Ubuntu)

Visit this link: https://docs.docker.com/engine/install/ubuntu/

## Docker Image

Images are already published at the following urls
* Backend Image: https://hub.docker.com/r/dakshinnovaccer/ui_node
* Frontend Image: https://hub.docker.com/r/dakshinnovaccer/ui_react

## Running the application

***You don't even need to clone the git repo.***

Just make a docker-compose file and you are good to go

### Making a docker-compose file

Make a *docker-compose.yml* file (keep the name exactly same)

The content for it is:-
```yml
version: '3.8'
services:
    backend:
        image: dakshinnovaccer/ui_node:latest
        ports:
            - 3500:3500
    frontend:
        image: dakshinnovaccer/ui_react:latest
        ports:
            - 3000:3000
```
***RUN*** the file using this command
```bash
docker-compose up --build
```
OR
```bash
docker compose up --build
```
*(The command differs with different version of docker-compose, try whichever works for you)*

Now, go to your browser and visit http://localhost:3000 and you are good to go

  
  
