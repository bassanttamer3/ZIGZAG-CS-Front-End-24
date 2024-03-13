//https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/P
function firstdigit(X){
    let c = parseInt(X/1000);
    if(c % 2 === 0){
        console.log("EVEN")
    } else{
        console.log("ODD")
    }

}


firstdigit(4569);
firstdigit(3569);