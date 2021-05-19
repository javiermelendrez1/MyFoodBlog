//listen for sort buttons 
//i was thinking of listening for every individual button but maybe i should loop for all of them and put them in an array
console.log('sort.js connected');
const sort = document.querySelectorAll('.sort');
for (let s of sort){
    s.addEventListener('click', (e) =>{
        console.log(e.target.id);
        if(e.target.id == 'high'){
            displayRestaurants(sortHighToLow());
            console.log('sorting from highest rating to lowest');
        } else if (e.target.id == 'low'){
            displayRestaurants(sortLowToHigh());

            console.log('sorting from lowest rating to highest');
        } else if (e.target.id == 'new'){
            displayRestaurants(sortNewtoOld());

            
            // console.log(e.target.id);
            console.log('sorting from newest to oldest');

        } else if (e.target.id == 'old') {
            displayRestaurants(sortOldtoNew());

            console.log('sorting from oldest to newest');
        }
    })
}

//sort method 1 
//highest to lowest 
//step 1 get all ratings from restaurants.rating and store them in an array 
//step 2 sort the array
const sortHighToLow = () => {
    let theArray = restaurants.sort(function(a,b){ 
        return b.rating - a.rating;
    });
    return theArray;
}

const sortLowToHigh = () => {
    let theArray = restaurants.sort(function(a,b){ 
        return a.rating - b.rating;
    });
    return theArray;

}

const sortNewtoOld = () => {
    let theArray = restaurants.sort(function(a,b){ 
        return a.id - b.id;
    });
    return theArray;

}

const sortOldtoNew = () => {
    let theArray = restaurants.sort(function(a,b){ 
        return b.id - a.id;
    });
    return theArray;

}