# Bamazon Node & MySQL Application

Bamazon is an Amazon-like storefront built using Node and MySQL to practice working with servers and databases. You can order items in the bamazonCustomer application, manipulate items in the MySQL database with the bamazonManager application, and view sales data by department with the bamazonSupervisor application. 

## Technologies 

Technologies used in the creation of this application include: 

1. Javascript
2. MySQL
3. Node
    * NPM Packages
        * Inquirer
        * MySQL
4. Git

## Getting Started

### Test Bamazon on your own machine

In order to test any of the bamazon.js files, you'll need:

1. Node.js
2. MySQL Server and Workbench

### Using Bamazon

To use Bamazon, begin by opening your terminal and navigating to the folder where you cloned this repo. 
[![Image from Gyazo](https://i.gyazo.com/39ee841d2bedb605bce74693fabd1f77.png)](https://gyazo.com/39ee841d2bedb605bce74693fabd1f77)

### bamazonCustomer.js

After entering 'Node bamazonCustomer.js' into the terminal, the user will be presented with a list of products they can order. 

[![Image from Gyazo](https://i.gyazo.com/700d725b1fbbd70f2385c16fca3be844.gif)](https://gyazo.com/700d725b1fbbd70f2385c16fca3be844)

To purchase one of these products the user inputs the item number into the terminal. Next, the user is prompted for the number of units they'd like to order. Lastly, the application confirms that there is enough of the item in inventory to fulfill the order and the order is processed. The application also displays the final cost of your purchase. 

### bamazonManager.js

The concert-this command accepts artists as an input, and returns that artist's upcoming performances venue name, location, and the date of each show. 

[![Image from Gyazo](https://i.gyazo.com/600e5570b174617ca42e1d9bc8d9f1b6.gif)](https://gyazo.com/600e5570b174617ca42e1d9bc8d9f1b6)

### spotify-this-song

The spotify-this-song command accepts a song title as an input, and returns information about songs with that title. Specifically we return the artist name, song title, album name, and a URL to a preview of the song. 

[![Image from Gyazo](https://i.gyazo.com/4b0f5c34b091c36c689d364a7a181a1d.gif)](https://gyazo.com/4b0f5c34b091c36c689d364a7a181a1d)

### movie-this

The movie-this command accepts a movie title as an input, and returns information about that film. Specifically, we display the title, year released, various ratings, a plot summary, lead actors and actresses, the country it was produced in, and even the language of the film.

[![Image from Gyazo](https://i.gyazo.com/5008baa82fc97f491d0544d37a5acc5a.gif)](https://gyazo.com/5008baa82fc97f491d0544d37a5acc5a)

### do-what-it-says

In addition to accepting commands through the terminal, LIRI can also accept commands and arguments written in the random.txt file. 

The do-what-it-says command looks in the random.txt file and executes the LIRI search command indicated in that text file. Currently, the random.txt file displays one line: 

[![Image from Gyazo](https://i.gyazo.com/163401b6d0de25f66b8672dc8a9f598a.png)](https://gyazo.com/163401b6d0de25f66b8672dc8a9f598a)

In the example, we input 
>Node liri.js do-what-it-says


into the terminal. LIRI calls the spotify-this-song command with the argument "something about us" and returns information about a that song by Daft Punk. If you've cloned this repo, you can input different commands and parameters into the random.txt file and see how the do-what-it-says command returns different results. 

[![Image from Gyazo](https://i.gyazo.com/277be18cb393b518fddc79fa4bb19906.gif)](https://gyazo.com/277be18cb393b518fddc79fa4bb19906)

### Logging the data

In addition to printing the response to the console, LIRI also logs it's responses to a text file called log.txt.

[![Image from Gyazo](https://i.gyazo.com/4cd768ab6e61b3b5b907d0b8e5de627b.gif)](https://gyazo.com/4cd768ab6e61b3b5b907d0b8e5de627b)

## More Info

The **github** for this project can be found here: [Github](https://github.com/KGorham05/liri-node-app)
___
This project was created and is maintained by **Kevin Gorham**.  

Contact me at <Kevin.Gorham@gmail.com>
