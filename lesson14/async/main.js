function wakeUp (wakeUpOnTime){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (wakeUpOnTime){
                resolve ('Good day starting')
            } else
                reject ('You will be late again')
        }, 500)
    })
}

function takeShower (water){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (water){
                resolve ('taking a shower')
            } else
                reject ('Switched off the water')
        },2000)
    })
}

function havingBreakfast (eat){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve ('Cooking tasty breakfast')
        },1500)
    })
}

function goToWork (busNumber){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (busNumber === 4){
                resolve ('Great, you will be on time')
            } else if (busNumber === 3){
                resolve ('Do not mind, you will be a bit late')
            } else
                reject ('Awful, you will be definitely late, fine again(')
        }, 900)
    })
}

function working (){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve ('doing your work')
        }, 7000)
    })
}

function goToSuppermarket (money){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (money>500){
                resolve ('buying all products')
            } else
                reject ('not enough money')
        }, 600)
    })
}

function goHome (){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve ('cooking something')
        }, 1000)
    })
}

async function dayShedule (){
    const morning = await wakeUp(true);
    const showerResult = await takeShower(true);
    const breakfastResult = await havingBreakfast();
    const roadTowork = await goToWork(4);
    const workingProcess = await working();
    const shoppingResult = await goToSuppermarket(800);
    const homeResult = await goHome();

    console.log(morning);
    console.log(showerResult);
    console.log(breakfastResult);
    console.log(roadTowork);
    console.log(workingProcess);
    console.log(shoppingResult);
    console.log(homeResult);
}

dayShedule()