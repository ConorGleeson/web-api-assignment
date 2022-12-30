# Assignment 2 - Web API.

Name: Conor Gleeson 20093384

## Features.

[A bullet-point list of the ADDITIONAL features/endpoints you have implemented in the API **THAT WERE NOT IN THE LABS** ]. 

 + Feature 1 - User Authentication: login and sign up. 

 + Feature 2 - New Api routes for react app pages

 + Feature 3 - ......


## Installation Requirements

Describe what needs to be on the machine to run the API (Node v?, NPM, MongoDB instance, any other 3rd party software not in the package.json). 

Describe getting/installing the software, perhaps:

```bat
git clone https://github.com/ConorGleeson/labMoviesApp.git
```

followed by installation

intall required npm components to the app
```bat
cd .\movies-api\
npm install
cd .\reactApp\
npm install
```
ensure mongoDB is installed and running with 
```bat
mongod -dbpath db
```
sometimes the passport node module needs to be installed indendantly to the movies-api
```bat
npm install --save passport passport-jwt jsonwebtoken bcrypt-nodejs
```

## API Configuration
Describe any configuration that needs to take place before running the API. For example, creating an ``.env`` and what variables to put in it. Give an example of how this might be structured/done.


```bat
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=mongodb://localhost:27017/movies_db
SEED_DB=True
SECRET=ilikecake
```


## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A | N/A
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/topRatedMovies | Gets top rated movies | N/A | N/A | N/A 
| /api/users | Gets users | Login | N/A | N/A 
| /api/users/{userid}| Gets individual user | N/A | N/A | N/A 
| /api/users?action=register | N/A | Adds a new user  | N/A | N/A 
| /api/tvShows | Gets list of TV shows | N/A  | N/A | N/A 
| /api/tvShows/{tvShowid} | Gets individual TV Show | N/A | N/A | N/A 


If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).


## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.

Uses JSON Web Tokens to authenticate users

All routes bar the login page are private and cannot be be accessed until the user is signed in 

![](/images/routes.png)


## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

~~~Javascript
export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const getMovies = () => {
    return fetch(
       '/api/movies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getTVShows = () => {
    return fetch(
       '/api/tvshows',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getGenres = () => {
    return fetch(
       '/api/genres',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getTopRated = () => {
    return fetch(
       '/api/topRatedMovies',{headers: {
         'Authorization': window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

~~~

These are linked to the react app by allowing for users to sign in and then view movies and tv shows 

![](/images/signuppage.png)

![](/images/homepage.png)

## Extra features

. . Briefly explain any non-standard features, functional or non-functional, developed for the app.  

N/A

## Independent learning.

. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .  

N/A
