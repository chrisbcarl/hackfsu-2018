## Created by [Chris Carl](http://chriscarl.com/), deploy and source on [GitHub](https://github.com/chrisbcarl/momentary-objective-manager)

Momentary Objective Manager (MOM) is a project management assistant designed to get Type-A individuals organized and PM's happy. Created for [HackFSU](https://hackfsu.com/) 2018 on Sunday, March 4th, 2018.

### Running the Repository

1. Clone the repo using ```git clone https://github.com/chrisbcarl/momentary-objective-manager.git```.
2. Sign up for a free IBM Bluemix Account at [this link](https://console.bluemix.net/registration/)
3. Add a Watson Conversation Service instance at [this link](https://console.bluemix.net/registration?target=%2Fdeveloper%2Fwatson%2Fcreate-project%3Fservices%3Dconversation%26action%3Dcreate%26hideTours%3Dtrue%26cm_mmc%3DOSocial_Tumblr-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmc%3DOSocial_Tumblr-_-Watson%2BCore_Watson%2BCore%2B-%2BPlatform-_-WW_WW-_-wdc-ref%26cm_mmca1%3D000000OF%26cm_mmca2%3D10000409)
4. Copy down your Watson Conversation Service credentials and save them in a file. Here's a [guide](https://console.bluemix.net/docs/services/watson/getting-started-credentials.html#service-credentials-for-watson-services).
5. For each of the keys inside the JSON credentials file, paste them into the appropriate places in your file ```./config.env.js``` located at the root of this repository. Your ```./config.env.js``` should look like this:
```javascript
var watson = {
    "conversation": {
        "url": "https://gateway.watsonplatform.net/conversation/api",
        "username": "fb43be03-bbfd-4aea-56dc-08e403468ede",
        "password": "a5dti0OpVrSo",
        "workspace_id": "<INSERT YOUR CREDS HERE>",
        "version_date": "2017-05-26"
    }
};
// the google variable and the trello variable ...
module.exports = {
    watson: watson,
    google: google,
    trello: trello
};
```
6. workspace_id can be found by clicking on the service, launching the tool, and clicking the 3 dots for more information.
7. Rename ```./config.env.js``` to ```./config.js```.
8. Make sure you have Node.js installed. If you do not, download and install [Node.js](https://nodejs.org/en/) for your particular machine. __ALWAYS__ __DOWNLOAD__ __THE__ __MOST__ __CURRENT__ __VERSION__.
9. Now, open one console window and navigate to ```./backend```. Run 
   ```
   npm install
   npm start
   ```
10. Now, open another console window and navigate to ```./frontend```. Run 
   ```
   npm install
   npm start
   ```
11. Open up a browser tab and navigate to [localhost:4200](localhost:4200).
#### Happy apping!

## Inspiration

Ever had more ideas in your head than you knew what to do with? Wouldn't it be amazing if you had an assistant of sorts that would help you manage your time more effectively?  

Project Managers deal with this sort of problem every single day. In fact, their entire job description is to be that assistant who manages time, but that can be tedious or even over-complicated.  

What if there was a way that you could employ a digital assistant to not only manage your day-to-day, but _help_ _plan_ _and_ _manage_ _project_ _completion_ _in_ _an_ _agile_ _development_ _manner_?

## What it does

#### (In Theory)

Users can access the digital assistant called the Momentary Objective Manager (MOM for short) through their phone, web, or even a hardware solution and at any given moment instruct the digital assistant to help manage their time.  

Users can ask to schedule events like Siri, but they would also be able to create complex alarms such as contextual voice alerts that provide meaning to alerts like waking up, remembering to complete tasks, or not to forget special events for particular reasons.  

Most critically, users can direct the digital assistant to direct the implementation of a system to **complete projects of arbitrary time requirements**. Users can direct the digital assistant to create new projects that are estimated to take an amount of time, split into tickets through the agile, waterfall, or critical path methodologies, and even sweeter--schedule these events on a calendar if it makes sense to (like for a single user managing her project load).  

#### (The submission)

The digital assistant is an IBM Conversation Service accessed by an Angular web front-end, mediated by a Express.js Node server. It can currently recognized NLP queries to create new alarms, projects, and events!  

The only way to deploy the service is by deploying the frontend and backend portions simultaneously on a local machine or on a provisioned server. There are plans to have a continuous containerized service running in perpetuity.

## How I built it

Watson Conversation Service was built by watching and reading tutorials provided by IBM.  
* [Watson Cloud Node.js SDK](https://github.com/watson-developer-cloud/node-sdk#conversation)  
* [Conversation Service Input Docs](https://console.bluemix.net/docs/services/conversation/dialog-methods.html#strings)  
* [Conversation Service RegEx for Patterns](https://stackoverflow.com/questions/48861904/ibm-watson-conversation-patterns-with-smart-quotes)  

The Express.js server was built with help from the following links:  
* [Mozilla Express Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)

Angular 5 was the GUI solution of choice!  
* [Official Docs](https://angular.io/tutorial/toh-pt6)

External API's include...
* [Google Calendar API Node.js Quickstart](https://developers.google.com/google-apps/calendar/quickstart/nodejs)  
* [Trello Node.js API Wrapper](https://www.npmjs.com/package/node-trello)

## Challenges I ran into
* __IBM__ __Watson__ __Service__ __CORS__ __Support__
   
   I started by learning the Watson Conversation service as thoroughly as possible given the limited time and limited manpower.  The acclimation time was roughly 16 hours and there were plenty of unknowns.
   Pitfalls regarding the Watson Developer Cloud Node.js SDK included CORS support for particular IBM services. The source examples on GitHub lends developers to believe that the JS SDK is usable on front end applications. 

   However, CORS access only applies to certain services [found here](https://github.com/watson-developer-cloud/node-sdk/blob/08b95543d0d7ea4efc9b2235add90049411c04e7/examples/browserify/README.md). 
   Unfortunately IBM does not intend to provide support to some services in the future [source](https://github.com/watson-developer-cloud/node-sdk/issues/618). 
   The solution is to wrap the SDK with a server. I chose Express.js as a the framework of choice to bang out a wrapper to call upon.

## Accomplishments that I'm proud of
* Used a IBM Watson Bluemix Service successfully
* Spun up a Express.js API wrapper server.
* Created a usable Angular UI within three hours.

## What I learned
1. if !tool.used_before: time_estimate *= 3
2. Express.js surprisingly straightforward
3. NPM wizardry with [Forever Package](https://www.npmjs.com/package/forever)
4. PowerShell wizardry with grep 'equivalent' findstr 
   ```shell
   netstat -a -o -n | findstr :<port_number>
   taskkill /F /PID <pid>
   ```

## What's next for Momentary Objective Manager
* __Integration__
   * Google Cal
   * Trello
* __Refinement__
   * Angular
   * Cordova
   * Watson Conversation Service
* __Innovation__
   * Training in-house NLP classifiers