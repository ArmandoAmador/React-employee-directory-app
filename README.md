##To get started:
  1. Install [NodeJS](http://www.nodejs.org)
  2. Download this repo
  3. Open the command line of your choice and cd to the root directory of this repo on your machine
  4. `npm install` - Installs packages
  6. `npm install -g gulp` - Installs gulp globally.
  7. `gulp` - Builds the project and opens your browser.
  8. Navigate to [http://localhost:9005/](http://localhost:9005/) if your browser doesn't open automatically.



###Profile Directory React app for viewing and editing profiles using mock data

####Requirement

  - On the home page of the app, the user should see a list of profiles with links to view individually
  - On an individual profile page, the user should more info about that profile, including contact links like email & phone.
  - On an individual profile page, after clicking the "Edit Profile" link, the user should see a form with the current profile info filled into the corresponding fields.
  - On an individual edit page, the user should be able to change any of the form fields and click the "Save" button to see the profile updated with that new info, or click the "Cancel" link to see the profile with the original info.
  - On any page, after clicking the "Home" link in the navbar, the user should see the home page.


####Tech Used

 - **gulp** - for task runner
 - **browserify** - Lets you require('modules') in the browser by bundling up all of your dependencies.
 - **reactify** - Browserify Transform for JSX (superset of JavaScript used in React library by Facebook)
 - **babelify** - Browserify transform for Babel
 - **sass** - CSS preprocessor, Syntactically Awesome Stylesheet
 - **eslint** - The pluggable linting utility for JavaScript and JSX
 - **alt** - A flux implementation library for managing data within JavaScript applications.
 - **react** - A JavaScript library for building user interfaces
 - **react-router** - A complete routing solution for React.js

####Todo

 - Fix how state is being updated for the employee directory page after editing a profile
 - Update all components to use ES6 syntax
 - Fix flux(alt) implementation
