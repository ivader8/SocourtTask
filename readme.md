# Description

- NodeJS / Express / React

- Server directory: the root of the project

- Client ( React ) directory: /client

- React is generated using:
```
create-react-app
```

# Installation

1. Global Installation of ```nodemon```:
```
npm i nodemon -g
```
2. Run ```npm install``` in root directory.
3. Run ```cd client & npm install``` - installing the react application dependencies.
4. Run ```cd ...``` - to go to the root folder again.
5. Run ```npm run dev```: This will start the server (running server.js with nodemon) & run the react application from the client directory.

# More info

There is a proxy configuration in the client part, to map the http://localhost:5000 (Where the server API is running) to http://localhost:3000 (Where the client front end is running): ```"proxy": "http://localhost:5000/",```.

The server is running on nodeJS / Express

# Task

## API Task
1. Create a database connection ( preferable MongoDB )
  - You can register a free MongoDB Cloud Cluster on https://www.mongodb.com/cloud/atlas by pressing "Free Sandbox" and follow the steps.
  - Or you can download and install MongoDB on your own computer and use that one https://docs.mongodb.com/manual/administration/install-community/.
2. Create Database models for: Genres & Books
  - Book: should have a name, author, genre & dates of creation and last update
  - Genre: should have a name & dates of creation and last update
3. Create API Endpoints for:
  - create books (bonus) ```I have to do it even though it's not explcitly asked api/book/create```
  - kato edit-na book da se promeni last update book i last update na genre na knigata
  - Getting the information about a single book: ```/api/book/:id```
  - Getting a list of all books: ```/api/books```
  - Getting a list of books by genre: ```/api/genre/:id``` 
  - Getting a list of genres: ```/api/genres```
  - Search books by name: ```/api/books/search``` ( Should be a post method with a search param)
  - Search books by genre name: ```/api/genres/search``` ( Should be a post method with a search param)
---
4. An additional task, not mandatory:
  - Create model for Users
  - Add a register/login/forgot password login in the application
  - Provide the library information only to authenticated users

## React task
  1. Apply routing using ```react-router``` [https://reacttraining.com/react-router/web/guides/philosophy
  2. Create a sidemenu component with filter by genre & a search input.
  3. Create a single Book Component to display the list of books in search and filter screens.
  4. Create a Book Screen with displaying full details of the book on the screen ( When clicked on a book component )
---
  5. An additional task, not mandatory:
    - Use redux in the application - A strong plus if you apply redux.
    - Create a authentication login in the app:
      - Login screen / Private routes / Reset Password / Sign Up screen

---
##### Note: All additional tasks are not mandatory, but will consider a big plus if they are provided and work as expected.
