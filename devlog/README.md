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