A. To run on localhost:
npm i (in server directory)
npm i (in client directory)
npm run server (in new terminal window in server directory)
npm run client (in new terminal window in server directory)


******bug fixes:
1. to run on dev, needed development.json for mongodb database configuration to start app

fix: copied production.json file in same directory and renamed it development.json to connect to mongodb in development/localhost environment.

2. a. Line 40 in post.js needed to be changed to :

posts: state.posts.concat(payload),

was:

post: payload,

2b. Basic issue was using redux improperly. The new post needs to be added to list of existing posts, but it was not. Therefore redux was not working to update the app data properly and causing the error.


3. npm nun dev not working properly on localhost. I updated Readme file with more reliable installation instructions for localhost.


A. To run on localhost:
npm i (in server directory)
npm i (in client directory)
npm run server (in new terminal window in server directory)
npm run client (in new terminal window in server directory)


Note - npm run dev was causing errors and/or not starting the server at times.

Added the ability to search users

Sort by date for posts as well

