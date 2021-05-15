console.log('connected');
const restaurants = [{
    id: 0,
    name: 'Ballast Point Long Beach',
    img: '/img/ballast.jpeg',
    location: 'Long Beach',
    parking: 'Yes',
    menuItemsHad: 'Brisket Burger',
    rating: '8'
},
{
    id: 1,
    name: 'Din Tai Fung',
    img: '/img/dintai1.jpeg',
    location: 'Glendale',
    parking: 'Yes',
    menuItemsHad: 'Pork Soup Dumplings',
    rating: '9'
},
{
    id: 2,
    name: 'Joes Italian Ice',
    img: '/img/joelatti.jpeg',
    location: 'Anaheim',
    parking: 'No',
    menuItemsHad: 'Joe Latti',
    rating: '10'
},
{
    id: 3,
    name: 'Morrison Atwater Village',
    img: '/img/morrison1.jpeg',
    location: 'Atwater Village',
    parking: 'Yes',
    menuItemsHad: 'Morrison Fillet Burger',
    rating: '10'
},
{
    id: 4,
    name: 'Sauced BBQ & Spirits',
    img: '/img/sauced1.jpeg',
    location: 'Anaheim',
    parking: 'Yes',
    menuItemsHad: '3 meat Combo',
    rating: '9'
},
{
    id: 5,
    name: 'Urth Cafe',
    img: '/img/urth1.jpeg',
    location: 'DTLA',
    parking: 'Yes',
    menuItemsHad: 'Croissant',
    rating: '7'
},
{
    id: 6,
    name: 'Wurstküche',
    img: '/img/wurst1.jpeg',
    location: 'Arts District',
    parking: 'No',
    menuItemsHad: 'Duck and Bacon Sausage',
    rating: '10'
}

]


const places = document.querySelector('.restaurants');
const modal = document.querySelector('.placeModal');
console.log(modal);
let displayAllModals = [];

window.addEventListener("DOMContentLoaded", function () {
    displayRestaurants(restaurants);

  });

let displayRestaurants = (allPlaces) => {
    let displayAll = allPlaces.map(function(place){
        return `            <div class="place">
        <img src="${place.img}">
        <p class="name">${place.name}</p>
        <button class="btn-read" id ="${place.id}">Read More</button>
    </div>`;

    })
     displayAllModals = allPlaces.map(function(place){
        return `
        <img src="${place.img}" width="500px"><span class="close" id="close">&times;</span>
        <div class="placeInfo">
            <p class="name">${place.name}/p>
            <p class="location">Location: ${place.location}</p>
            <p class="parking">Parking: ${place.parking}</p>
            <p class="menuItemsHad">Menu Item Had: ${place.menuItemsHad}</p>
            <p class="rating">Rating: ${place.rating}</p>
        </div>
    </div>`
    })
    displayAll = displayAll.join("");
    places.innerHTML = displayAll;
}

places.addEventListener('click', function(e){
    console.log(e.target.id)
    modal.innerHTML = displayAllModals[e.target.id];
    console.log(modal);
    modal.style.display = 'block';
})
modal.addEventListener('click', function(e){
    if(e.target.id == 'close'){
        modal.style.display = 'none';
    }
})
