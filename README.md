The Btionary

This project is in honor of my weird ex-girlfriend who speaks in a peculiar mix of languages that aims to maximize her cuteness. She almost speaks her own language!

So I put all her vocabulary into a full stack web app using Node.js, Express, MongoDB, and some EJS.

Live: https://btionary.herokuapp.com/

How it's made

For the Front end, I used HTML, CSS, JavaScript.
For back end, I used Node.js and Express framework and MongoDB as the database. There is some EJS for server-side rendering. I also used Postman to test the API.

Optimizations

One thing I could do better is tweak the entry point so that it doesn't allow duplicates — that is, if the word submitted was already in the database, then something would warn the user of a potential duplicate.

If the submission was successful, that could lead to another page. 

Lessons learned

The coolest thing I learned was using heroku's config vars through the web interface, setting a true/false condition by creating a key value pair there. 

https://discord.com/channels/735923219315425401/984252010356420659/988190779103146054

the actual connection string with the actual username and pw is entirely inside the .env file and also an env variable set in Heroku.

Here's how I explained it at the time:

One needs to tell heroku to look for the username/password in config vars or else it keeps searching for env and the solution is to use config vars.

if you have a key value pair in config vars like heroku: yes, then if the app is operating locally, then that would be false, and you would use dotenv, otherwise heroku knows to use the username and password for the mongoenvironment in config vars
and so the username and password is wrapped up in the connectionstring, and that whole connection string is the value to the key connectionString in config vars.


Troubleshooting
I had a little trouble distinguishing between requiring 'CORS' and requiring 'body-parser'.

The explanation I got was:

CORS is to handle cross-origin resource sharing: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS If you've ever tried to use someone else's API and got blocked - you might have seen the error come up in the browser console. So to avoid this happening with our own API, we use that line of code. I guess it is indeed middleware. https://expressjs.com/en/resources/middleware/cors.html

body-parser is middleware to handle URL-encoded requests and JSON - so it does different things. But we don't need it anymore with current version of express. 

