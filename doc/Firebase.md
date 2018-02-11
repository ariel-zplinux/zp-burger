h1. Firebase

0. Intro

url: https://zp-react-burger.firebaseapp.com/

code:

course: https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8268570?start=0



1. Grab 'baseUrl' 

ie: 'https://zp-react-burger.firebaseio.com/' from 'https://console.firebase.google.com/project/zp-react-burger/database/zp-react-burger/data'

2. Set rules on db

<pre>

{
  "rules": {
    "ingredients": {
    ".read": "true",
    ".write": "true"
  	},
    "orders": {
      ".indexOn": "userId",
      ".read": "auth != null",
      ".write": "auth != null"
    }
  }
}

</pre>

3. Setup Authentication

https://console.firebase.google.com/project/zp-react-burger/authentication/users

grab apiKey in auth > Web setup

<pre>
        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=APIKEY';
        if (!isSignup) {
            url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=APIKEY';
        }
</pre>

*APIKEY* to replace by your Api key.

4. Deploy on Firebase

<pre>

Sign in to Google:
$ firebase login

Initiate your project:
$ firebase init

Add your static files to your deploy directory (the default is public)

Deploy your website:
$ firebase deploy

</pre>


<pre>
noshir@debian:~/dev/courses/react16-complete-guide-udemy/zp-burger$ firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  /home/noshir/dev/courses/react16-complete-guide-udemy/zp-burger

? Which Firebase CLI features do you want to setup for this folder? Press Space to select features, then Enter to confirm your choices. Hosting: Configure and deploy Firebase Hosting sites

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

? Select a default Firebase project for this directory: zp-react-burger (zp-react-burger)

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? build
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? File build/index.html already exists. Overwrite? No
i  Skipping write of build/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...

✔  Firebase initialization complete!
</pre>