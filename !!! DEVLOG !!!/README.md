# Keeping a Devlog

## Table of Contents

- [Keeping a Devlog](#keeping-a-devlog)
  - [Table of Contents](#table-of-contents)
  - [Purpose](#purpose)
  - [Structure](#structure)

## Purpose

The purpose of keeping a devlog is to help us see all the work you put in when attempting at least 4 tasks either in the frontend or backend folders.  For instance, if you don't know anything about web APIs, express, and node and you decide to attempt the backend tasks.  We would like to see in your devlog how you researched those technologies before starting the tasks.  Another example could be your experience of overcoming a bug that took you 2 days to fix, giving you less time to work on other tasks.

We use this devlog to see how you solve problems you run into as you are developing. Research is an essential component to being a member of our team and it is a great way to learn new things! 

## Structure

You can structure this devlog however you like.  You could keep one file and mark the day and any noteworthy thing to write down.  You could also keep a new file for everyday something noteworthy happens.  You can use markdown, txt, word, etc. as long as we can read and access it.

# March 22
- Started the assessment for front end
- Had to connect to the API to display hero data on frontend so I ran the backend API folder and its running on port 3000 now

# March 23
- I had to learn how to use postman, but once I did I was able to do a post request and create my first hero. Im gonna create a few more heroes. I used a youtube video to learn how to use postman and send the post request. 
- Created 4 heroes [ Superman, Batman, Wonder Woman, Wolverine ]
-Starting on task 1 
- Created first routing component for Superman
- Created rest of routing components and hyperlinks for each of the heros
- Added brief description for each hero after you click on the click

# March 24
- Still working on task one, found a tutorial that is similar to the assignment so I'll be looking into this (https://angular.io/guide/router-tutorial-toh)
-Still on task one but I implemented the wildcard 404 page not found routing component
-The 404 page isnt working correctly its not redirecting me back to the hero list, idk
if its because the hero list doesnt have a specific route its just blank
-Im just gonna move on for now I cant seem to get it to reroute back to mainpage
-Im just gonna restart, im not making any progress it seems 
- Im trying to define a hero in the HeroesDB but its not showing on the heros list and I have no idea why.
- Ive defined it in the HeroesDB.js using the correct schema but its still not working 
           {
            id:'1',
            name: 'James Meegan',
            class: 'Student',
            level: 100
           }
- "The UI will display a list of hero names if you add some to the backend API using [Postman](https://www.postman.com/)." So I guess I'll only have names display if I do a post request with the API, but it doesn't save them and I have to make routing compenents so Im not sure. I guess I'll just do the post request. 
- Post Request using postman. Heroes I'll be using: 
{
  "id" : "1",
  "name": "Wonder Woman",
  "class": "Monk/Fighter",
  "level": 100
},
{
    "id" : "2",
    "name" : "Superman",
    "class" : "Cleric",
    "level" : 101
},
{
    "id" : "3",
    "name" : "Spider-man",
    "class" : "Working class",
    "level" : 50
},
{
    "id" : "4",
    "name" : "Aquaman",
    "class" : "King",
    "level" : 25
}
# March 25 
- Im just gonna read some documentation on angular routing for awhile and look at tour of heroes example on angular.io
-Created heroDetails component
-hero details component working and I'm able to be routed from hero list to it. Still haven't displayed the specific information for each hero though
-add link to top of hero-details.html so you can go back to heroes list by clicking on it
-just trying to display the specific information for the hero on the hero-detail page, going through the angular documentation and following along
-Ive almost got task one done, I just really had to read the documentation more and the angular site had a similar project to this that I refrenced. 
-Having trouble getting the data to show up on different page, but if I use "<app-hero-details [hero]="selectedHero" ></app-hero-details>" at the bottom of hero-list it displays the details. Im not sure why its not transferring the information over to the new page when I click on the name.
-Im just gonna move on for now and set up the wildcard route then go to task 2. I'll come back to this later, its almost done. 
-Setup wildcard/404 route, going to the redirect now. Not sure how I'll trigger an error statement to display after being redirected back to hero-list page
-I got the redirect to work and tested it with /hero-details also and it worked, now I need to trigger an error message to display

# March 26
- Im stuck on trying to get my details to display on a different page and Im not sure how to go about displaying the error message. For the displaying hero details on different page Im pretty sure it has to do with two way binding. I read the documentation on parent and child components but I still cant seem to figure it out. I asked a question on stackoverflow so hopefully someone can tell me how. 
-Im gonna start task 2 and it seems like I'll need to communicate with the backend for the next three, I'll be putting some code in backend.services.ts
- createHeroComponent made
# March 27
-Just working through task 2, making ok progress. Been using this as a refrence https://angular.io/guide/http, 
-Im almost done task 2 theres just a few things that are holding me up, seems like everything right but its not actually sending the data to the backend.
- Its sending data now but its sending it twice for some reason
- I got it to work, Im not sure why it was sending it twice but its no longer
-Im gonna do a little css and may come back and add to it.
-I just styled it as a normal form, Im moving on to task 3

# March 28
- Im gonna skip task 3 for now and just do the delete hero task, Going to use the tutorial on https://angular.io/tutorial/toh-pt6 as a guide. They implemented similar functionality.
- I got sidetracked but I was able to get the hero-details to display on the other page, the tutorial showed me how I just had to change heroService to backendService and a few other small things to make it work.I'll go back and implement the error handling if I have time. 
- I was able to implement the delete hero functionality. Went pretty smoothly used the tutorial as a template.
- Added popup confirmation for the delete button
-Styling it up somewhat atmm, I was trying to implement a gif but it wasnt working
-Im gonna try task 3 updating hero
- 

