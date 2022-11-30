//alert("hola!");

/* 
    Rotate by Day of Week: Use HTML/CSS & JavaScript to create a single page 
    that rotates unique colors and content for each weekday (Sunday to Saturday) 
    into the page.  The content must include:

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph 
    must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content

    The items we need are:

    image (a pic of the coffee)
    alt (a description of the pic for people who can't see it)
    description (a note about the coffee)
    weekday
    color (to support the coffee)

    The unique color could affect the background HTML, or an element on the page 
    for each day of the week.  All of the above must occur within one page.
*/

function coffeeTemplate(coffee)
{
    return `<p>
                <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee" />
                <strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong>
                ${coffee.name}</strong>, ${coffee.desc}
            </p>`;
}

let myDate = new Date();
let today = myDate.getDay();
let coffee = " ";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    today = urlParams.get("day");
 }
 //convert the string to an integer
 today = parseInt(today);
 
switch (today) 
{
    case 1: 
        today = "Monday";
        coffee = {
            color: "pink",
            name: "Bubble Tea",
            pic: "bubble-tea.jpg",
            alt: "A picture of a Bubble tea",
            day: "Monday",
            desc: `a cold frothy drink made with a tea base shaken with flavors, 
            sweeteners and/or milk with tapioca pearls at the base of the drink. 
            Fat Straw Required.`
        };
    break;

    case 2:
        today = "Tuesday";
        coffee = {
            color: "brown",
            name: "Caramel Latte",
            pic: "caramel-latte.jpg",
            alt: "A picture of a caramel latte",
            day: "Tuesday",
            desc: `a coffee drink that contains espresso coffee, steamed and frothed milk, and caramel sauce.`
        };
    break;

    case 3:
        today = "Wednesday";
        coffee = {
            color: "black",
            name: "Cold Brew",
            pic: "cold-brew.jpg",
            alt: "A picture of a cold brew",
            day: "Wednesday",
            desc: `simply coffee that has been brewed with cold rather than hot water and usually involves a long 
            steeping process—anywhere between 12-24 hours. In terms of flavor, cold brew is generally characterized 
            as smooth, low-acid, and heavier than its hot brewed counterparts.`
        };
    break;

    case 4:
        today = "Thursday";
        coffee = {
            color: "grey",
            name: "Drip",
            pic: "drip.jpg",
            alt: "A picture of a drip coffee",
            day: "Thursday",
            desc: `made by pouring boiling water over ground coffee.`
        };
    break;

    case 5:
        today = "Friday";
        coffee = {
            color: "green",
            name: "Frappuccino",
            pic: "frappaccino.jpg",
            alt: "A picture of a frappuccino",
            day: "Friday",
            desc: `blended iced coffee drinks.`
        };
    break;

    case 6:
        today = "Saturday";
        coffee = {
            color: "white",
            name: "Mocha",
            pic: "mocha.jpg",
            alt: "A picture of a mocha",
            day: "Saturday",
            desc: `a chocolate flavored variant of a cafe latte.`
        };
    break;

    case 0:
        today = "Sunday";
        coffee = {
            color: "orange",
            name: "Pumpkin Spice Latte",
            pic: "pumpkin-spice-latte.jpg",
            alt: "A picture of a pumpkin spice latte",
            day: "Sunday",
            desc: `coffee drink made with a mix of traditional autumn spice flavors (cinnamon, nutmeg, and clove), steamed milk, 
            espresso, and often sugar, topped with whipped cream and pumpkin pie spice.`
        };
    break;

    default:
        alert("Something went wrong!");
}

console.log(coffee);

document.getElementById("coffee-template").innerHTML = coffeeTemplate(coffee);

//Here we are changing the background color of the html tag
document.querySelector("html").style.backgroundColor = coffee.color;