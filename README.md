### Band-Together

Contributors: 
- Alison Manning
- Bargavi Kanneganti
- Dasom Huber
- Katherine Frain
- Nina Kim

Technologies/Languages: 
- React 
- PostgresSQL
- Express
- Node.js
- Insomnia
- MapBox GL LS

Project Summary:<br>
Band Together was created to help vulnerable populations find resources with the intentions to expand nationwide. When you access the website, the user will be directed to the homepage that will provide more statitics about the state of homelessness and hunger across the United States. By accessing the navigation bar, users can be directed to the find resources page where they can search for shelters, food pantries, and donation centers. In the find resources page, users can use the automated filter that can specify the quality of the resources. The find resources page also features a map that displays markers for correlate with the specific resource the user is searching for. 

Front-End:
The front-end was responsible for creating the routes and screens that the user would interact with. The pages utilized Material UI and basic CSS classes which would become the bases of how the pages were styled and formatted. The pages are all responsive and can be viewed through different mobile devices and computers. The front-end also created different forms that would connect with the back-end databases to render shelters, donation centers, and food pantries onto the map. 

Back-End:<br>
We manually created a database of resources relevant to homeless populations in the Houston area after finding no premade APIs that covered the necessary data. Using Sequelize and PostgreSQL, tables on homless shelters, donation centers, and food pantries were constructed with attendant data like hours of service, phone number, and population requirements (as some shelters only cater to women and children, while some shelters cater exclusively to men). These tables were used to create markers on our Mapbox API and to create a filter function that allows users to sort the resources they're searching for by different criterion - ie populations served. Additionally, we enabled the Service Worker embedded in React to make Band-Together a Progressive Web App, which will allow users to access the site and cache relevant data without reliable Internet.
