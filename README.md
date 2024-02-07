COMMENT ABOUT THE SUBJECT
Get in touch button is not on the form modal.
I assume than the correct one is the submit button, because the next step is the mandatory fields validation.

EXECUTE TESTS
To run the test in headless, use "npm test" on the command line.
A report is going to be created into the cypress/reports/html folder.
Go to that path and open the index.html file to see the report.
It can also be run from the cypress UI version using the "npx cypress open" command.

GOOD PRACTICES
Create a page folder so we can have the functions of each page in a separate file split in pages.
Create a global command to visit home page with all his validations. Can check that on the commands.js file

OTHERS
I use mochawesome tool to present the report in a more attractive way.
