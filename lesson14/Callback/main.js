function wakeUp (wakeUpOnTime, callback){
    setTimeout(()=>{
        if (wakeUpOnTime){
            callback (null, 'Good day starting')
        } else
            callback ('You will be late again', null)
    },500)
}

function takeShower (water,callback){
    setTimeout(()=>{
        if (water){
            callback(null,'taking a shower')
        } else
            callback ('Switched off the water', null)
        },2000)
}

function havingBreakfast (callback){
    setTimeout(()=>{
        callback (null, 'Cooking tasty breakfast')
    },1500)
}

function goToWork (busNumber, callback){
    setTimeout(()=>{
        if (busNumber === 4){
            callback (null, 'Great, you will be on time')
        } else if (busNumber === 3){
            callback (null, 'Do not mind, you will be a bit late')
        } else
            callback ('Awful, you will be definitely late, fine again(', null)
        }, 900)
}

function working (callback){
    setTimeout(()=>{
        callback (null, 'doing your work')
    }, 7000)
}

function goToSuppermarket (money, callback){
    setTimeout(()=>{
        if (money>500){
            callback (null, 'buying all products')
        } else
            callback ('not enough money', null)
    }, 600)
}

function goHome (callback){
    setTimeout(()=>{
        callback (null, 'cooking something')
    }, 1000)
}

wakeUp(true, (error, success)=>{
    if (error){
        console.log(error)
    } else
        console.log(success)

    takeShower(true, (errorOfShower, successOfShower)=>{
        if (errorOfShower){
            console.log(errorOfShower)
        } else
            console.log(successOfShower)

        havingBreakfast((errorOfBraakfast, successOfBreakfast)=>{
            if (errorOfBraakfast){
                console.log('nothing to eat')
            } else
                console.log(successOfBreakfast);

            goToWork(4, (errorOfbus, successOfbus)=> {
                if (errorOfbus){
                    console.log(errorOfbus)
                } else
                    console.log(successOfbus);

                working((errorOfwork, successOfwork)=>{
                    if (errorOfwork){
                        console.log('Oops, something wrong')
                    } else
                        console.log(successOfwork);

                    goToSuppermarket(800, (errorOfshop, successOfshop)=>{
                        if (errorOfshop){
                            console.log(errorOfshop)
                        } else
                            console.log(successOfshop);

                        goHome((errorOfhome, successOfhome)=>{
                            if (errorOfhome){
                                console.log('OOps, no rest today');
                            } else
                                console.log(successOfhome);
                        })
                    })
                })
            })
        })
    })
})