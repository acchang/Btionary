# The Btionary

This project is in honor of my weird ex-girlfriend who speaks in a peculiar mix of languages that aims to maximize her cuteness. She almost speaks her own language!

So I put all her vocabulary into a full stack web app using Node.js, Express, MongoDB, and some EJS.

**Live:** https://btionary.herokuapp.com/

## How it's made

For the Front end, I used HTML, CSS, JavaScript.
For back end, I used Node.js and Express framework and MongoDB as the database. There is some EJS for server-side rendering. I also used Postman to test the API.

## Optimizations

One thing I could do better is tweak the entry point so that it doesn't allow duplicates — that is, if the word submitted was already in the database, then something would warn the user of a potential duplicate.

If the submission was successful, that could lead to another page. 

## Lessons learned

This was just a refinement of my "Orchard Tracker" project, so not a lot of lessons. Just working on technique. I built out the front end a little more.

## Troubleshooting

I have the entire dictionary hidden somewhere on the page so I could check double-check my new entries without going to Heroku.

It takes two clicks to open it when it was originally one, but two is just as good as it prevents an accidental opening.

