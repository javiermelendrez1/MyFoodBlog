//listen for sort buttons 
//i was thinking of listening for every individual button but maybe i should loop for all of them and put them in an array
console.log('sort.js connected');
const sort = document.querySelectorAll('.sort');
for (let s of sort){
    s.addEventListener('click', (e) =>{
        console.log(e.target.id);
        if(e.target.id == 'high'){
            console.log(e.target.id);

            sortHighToLow();
            console.log('sorting from highest rating to lowest');
        } else if (e.target.id == 'low'){
            console.log(e.target.id);

            sortLowToHigh();
            console.log('sorting from lowest rating to highest');
        } else if (e.target.id == 'new'){
            sortNewtoOld();
            // console.log(e.target.id);
            console.log('sorting from newest to oldest');

        } else if (e.target.id == 'old') {
            sortOldtoNew();
            console.log(e.target.id);
            console.log('sorting from oldest to newest');
        }
    })
}

//sort method 1 
//highest to lowest 
//step 1 get all ratings from restaurants.rating and store them in an array 
//step 2 sort the array
const sortHighToLow = () => {
    let theArray = restaurants.map( r => r.rating);
    theArray.sort(function(a,b){ 
        return b - a;
    });
    console.log(theArray);

}

const sortLowToHigh = () => {
    let theArray = restaurants.map( r => r.rating);
    theArray.sort(function(a,b){ 
        return a - b;
    });
    console.log(theArray);

}

const sortNewtoOld = () => {
    let c = restaurants.map( r => r.id);
    c.sort(function(a,b){ 
        return a - b;
    });
    console.log(c);

}

const sortOldtoNew = () => {
    let d = restaurants.map( r => r.id);
    d.sort(function(a,b){ 
        return b - a;
    });
    console.log(d);

}