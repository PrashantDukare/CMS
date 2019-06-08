## Minimalist CMS with In-Context editor

### Features
* It is a single page application(SPA) that contains at least two pages with editable content.
* It should be possible to create pages in a blog fashion.
* Content entries are read from a Store (Database).
* The Store can be hard coded and updates lost on page reload or persisted on a third party system (File system, DB, Mock service).
* A content entry contains at least a key and a value property.
* A content administration page allows to Create, Update and Delete content entries and webpages.
* A link to the content administration page is accessible from the homepage, no authentication needed.
* An In-Context editing mode allows to edit content in the context of the page.
* A link to the In-Context editing mode is accessible from the current page, no authentication needed.



### In-Context editor mode.
In this mode, editable content is rendered with a little Edit toggle(icon). On click of this toggle, a panel comes out of the bottom of the viewport. This panel contains a simple HTML form with the key of the content entry as label, and the value of the content entry into a textarea. As you update the content entry value in the textarea, it is rendered instantly (use two-way binding) in the current page. The form includes 2 buttons, Save and Cancel.

* "Save" updates the key value in both the content Store and the page 
* "Cancel" will revert the content to its prior value on the page.
* Both options close the edit panel.

### Steps to Run the application

* npm install
* npm start

### Steps to Run the Test cases
* npm test

### Demo Link
https://www.screencast.com/t/ratvdjqkaA

Note: Please click on black square on right bottom of page if video doesn't play.
