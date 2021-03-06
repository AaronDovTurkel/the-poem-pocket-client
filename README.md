<p align="center"><img width=100% height=30% src=public/imgStore/TPPTitle.png></p>

<p align="center">Welcome to <a href="https://mighty-fortress-82471.herokuapp.com/dashboard">"The Poetry Pocket"</a>, a place for different communities to come together and share ideas by creating a cohesive poem.</p>

<p align="center">Every day a new poem title with an opening stanza will be posted. On a first-come-first-serve basis, anyone who wishes will have a chance to contribute a stanza to the public poem. The poem will close at midnight and be published to the public viewing board!</p>

<p align="center"><img width=30% height=60% src=public/imgStore/TPPAdminPage.png> <img width=30% height=45% src=public/imgStore/TPPDashboard.png> <img width=30% height=50% src=public/imgStore/TPPRegisterLogin.png></p>

## Usage

You can create an account and/or login if you are already a user. The profile image on the top right is your site guide. If you click on it a list of different pages will be display. In the current beta version you can:

1. view old poems in "Poem Pocket"

2. view the current poem of the day and add your own stanza from the "Dashboard"

3. you can "Log Out"

4. or (if you are an administrator) add a new poem
     
<p align="end"><img width=20% height=30% src=public/imgStore/TPPInfoBar.png></p>

## The code

     Frontend: React, Redux
     
     Backend: Node.js with Express
     
     Database: MongoDB with MLab
     
**API Docs**
----

* **URLs**

     `/api/users/`
     `/api/auth/`
     `/api/poems/stanza`
     `/api/poems/poemPocket`
     `/api/poems/title`

* **Methods:**

  `GET`
  `POST`
  `PUT`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 204
 
* **Error Response:**

  * **Code:** 404 500

## Road Map

<a href="https://mighty-fortress-82471.herokuapp.com/dashboard">"The Poetry Pocket"</a> is in its humble beginnings but has lofty goals. 
We hope to make the world a bit more peaceful stanza by stanza. With different people contributing from around the world, ideals will be tested, relationships wrought, and preconcieved notions broken.

~ Features under Construction ~

1. "Profile"
    * You will be able to create and edit your profile.
        * Updated your social network
        * Set a status
        * Favorite some poems

2. "Connect"
    * The connect tab has high hopes. From here you will be able to search our data base for other users.
        * To connect
        * To see their poem contributions
        * To thumbs up their work



### Authors and Acknowledgments

"The Poem Pocket" was created and is currently maintained by The Holy Coder.

Thanks to my wife for all her help!

#### Support

For support and inquiries please contact the [The Holy Coder](mailto:"theholycoder@gmail.com").
