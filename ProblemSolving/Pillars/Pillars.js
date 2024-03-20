
//https://www.codewars.com/kata/5bb0c58f484fcd170700063d


// num_pill: Number of pillars (should be greater than or equal to 1).
// dist: Distance between pillars in meters.
// width: Width of each pillar in centimeters.


function pillars(num_pill, dist, width) {
    if (num_pill === 1) {
        return 0;
    }else{
        let distance = dist * ((num_pill -1) * 100 );
        let pillars = num_pill - 2;
        return distance + (width * pillars);
    }  
}
