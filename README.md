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


####Comments/Problems encountered

  - Even though there were some information provided such as font-size, margin, color, etc, there were no indication of how wide the site should be, or if it should be mobile. I went ahead and created basic responsive site using a lightweight css framework called ‘skeleton’

  - In profile edit view pdf specs, there is a field for fullname, this field data should be split into first name and last name, I was able to split it at first, but when adding validation I was not able to validate for just first name. I decided to split full name field into first name and last name because not everyone has both and it would be easier to input and add validation

  - When implementing alt flux, I’m able to edit a profile and update the profile view with new information. The problem I’m currently having is updating the profile directory page with new info.


####Todo

 -  Fix how state is being updated for the employee directory page after editing a profile
 - Update all components to use ES6 syntax
