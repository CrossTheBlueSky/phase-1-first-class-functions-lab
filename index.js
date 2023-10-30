// Code your solution in this file!
function returnFirstTwoDrivers(arr){
    return [arr[0], arr[1]]
}

function returnLastTwoDrivers(arr){
    return [arr[arr.length-2], arr[arr.length-1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
    
    if(num === 2){
        return fareDoubler
    } else if(num ===3){
        return fareTripler
    } else if(num ===4){
        return fareQuadrupler
    } else if(num ===5){
        return fareQuintupler
    }

}

function fareDoubler(fare){
    return fare*2

}

function fareTripler(fare){
    return fare*3
}

function fareQuadrupler(fare){
    return fare*4
}

function fareQuintupler(fare){
    return fare*5
}

function selectDifferentDrivers(arr, which){
    return which(arr)
}