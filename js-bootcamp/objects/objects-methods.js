let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize){
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(currentGuest){
        this.guestCount = this.guestCount + currentGuest
    },
    removeParty: function(leavingGuest){
        this.guestCount = this.guestCount - leavingGuest
    },
    resetParty: function(reset){
        if (reset === 0){
            this.guestCount = 0
        }else{
            return 'Input 0 to reset'
        }
    }
}

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))
restaurant.resetParty(0)
console.log(restaurant.checkAvailability(10))
