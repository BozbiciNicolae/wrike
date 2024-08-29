# Comments App React + TypeScript
#### Note: No third-party was used for building this app
The objective was to use only the features React provides to achive the end result.

<img src="https://puu.sh/KdTTW/dcd44a57d7.png" width="300"  />

### State mangement
I used the `useContext` and `useReducer` hooks in order to create a global state similar to Redux.
It handles all of the CRUD actions and holds all of the comments.

### Data loading
I stored two default comments into a json file stored locally `public/data.json` in order to simulate loading data from the API.

### Date Parsing
Since the comment date is usually stored as an ISO date, I took the opportunity to create a custom hook `useDateParser` that handles formating the date before rendering it to the browser.


## Running the project
Do the usual `git checkout `, `npm install` and `npm run dev` to run it locally or use Stackblitz to run the repo if it's more convenient.
