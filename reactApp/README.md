# Web App Dev 2 - Assignment 1 - ReactJS app.

Name: Conor Gleeson

## Overview.


### New Pages.

+ List of Top Rated Movies
+ List of TV Shows
+ TV Show Details
+ Favouite TV Shows
+ Login page with firebase authentiction

### New Features.

+ Authentication (using Firebase)
+ View and Favourite TV Shows
+ Pagination through discover movies page

## Setup requirements.

npm install

## TMDB endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

e.g.

+ /movies/toprated"- Top rated movies
+ /tv/toprated - List of TV Shows
+ /tv/{tv_id} - TV Show details


## App Design.

### Component catalogue.

### UI Design.

[ Insert screenshots of the __new app pages__ you developed (including modified existing pages), Have an appropriate caption for each one (see example below).

![ ](/images/login.png)

>Simple login page to allow users to login and create accounts

![ ](/images/logedin.png)

>Page after succesfull login with rest of the pages now avalible at the top

![ ](/images/tvshows.png)

>shows a list of tv shows

![ ](/images/showdetails.png)

>shows details of a specific movie 

![ ](/images/favouriteshows.png)

>a list of user favourited shows

### Routing.

[ List the __new routes__ supported by your app and state the associated page.]

e.g. 

+ /:pageNum - paginated discover movies route
+ /movies/topRated - Top rated movies
+ /tvshows - discover tv shows
+ /tvshows/:id - tv show details page
+ /tvshows/favourites - favourite tv shows
+ /login - login page

the only avalible route before logging in is the login page

## Independent learning (If relevant).

+ Firebase third part authenticaiton - https://youtu.be/9bXhf_TELP4 https://firebase.google.com/

+ Various new MUI Components - https://mui.com/ 

+ Pagination for tmdb movies https://tmdbapis.metamanager.wiki/en/latest/objs/pagination.html
