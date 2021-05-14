console.log('connected');
const restaurants = [{
    name: 'Ballast Point Long Beach',
    img: '/img/ballast.jpeg',
    location: 'Long Beach',
    parking: 'Yes',
    menuItemsHad: 'Brisket Burger',
    rating: '8'
},
{
    name: 'Din Tai Fung',
    img: '/img/dintai1.jpeg',
    location: 'Glendale',
    parking: 'Yes',
    menuItemsHad: 'Pork Soup Dumplings',
    rating: '9'
},
{
    name: 'Joes Italian Ice',
    img: '/img/joelatti.jpeg',
    location: 'Anaheim',
    parking: 'No',
    menuItemsHad: 'Joe Latti',
    rating: '10'
}
]


const places = document.querySelector('.restaurants');

window.addEventListener("DOMContentLoaded", function () {
    displayRestaurants(restaurants);
  });

let displayRestaurants = (allPlaces) => {
    let displayAll = allPlaces.map(function(place){
        return `            <div class="place">
        <img src="${place.img}">
        <p class="name">${place.name}</p>
        <button class="btn-read">Read More</button>
    </div>`;

    })
    displayAll = displayAll.join("");
    places.innerHTML = displayAll;
}
