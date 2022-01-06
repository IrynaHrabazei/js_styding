function userCard (number){
    let card = {
        balance: 100,
        transactionLimit : 100,
        historyLogs : [{}],
        key: number
    }
    let cardMethod = {
        cardNum : function (key){
            return card.key
        },
        getCardOptions : function () {
            return card
        },
        putCredit: function (amount){
            card.balance = card.balance +amount;
            let time = new Date();
            card.historyLogs.push({operationType: 'Received credits', credits : amount, operationTime: time});
            return card
        },
        takeCredit : function (amount){
            if ((card.balance + card.transactionLimit) > amount){
                if (card.balance > amount){
                    card.balance = card.balance - amount;
                    return card
                } else {
                    let remainder = card.balance - amount;
                    card.balance = 0;
                    card.transactionLimit = card.transactionLimit + remainder;
                    return card
                }
            } else {
                console.error('Not enough money');
            }
            let time = new Date();
            card.historyLogs.push({operationType: 'Withdrawal of credits', credits: amount, operationTime: time});
            return card
        },
        setTransactionLimit : function (amount){
            card.transactionLimit = amount;
            let time = new Date();
            card.historyLogs.push({operationType: 'Transaction limit change', credits: amount, operationTime: time});
            return card;
        },
        transferCredits : function (amount, recievercard){
            let newAmount = 1.005*amount;
            if (card.balance+card.transactionLimit > newAmount){
                if (card.balance> newAmount){
                    card.balance = card.balance - newAmount;
                    return card
                } else {
                    let remainder = card.balance - newAmount;
                    card.balance = 0;
                    card.transactionLimit = card.transactionLimit + remainder;
                    return card
                }
            } else {
                console.error('Not enough money');
            }
        }
    }
    return cardMethod
}

 class UserAccount {
     constructor(name) {
         this.name = name;
         this.cards = [];
         this.addCard = function (number){
             this.cards.push(userCard(number))
             return this.addCard()
         }
         this.getCardByKey = function (key){
             this.cards.find(card => card)
             return this.getCardByKey()
         }
     }
 }


 let user = new UserAccount('Ivan');
user.addCard()
user.addCard()

let card1 = user.getCardByKey(1);




