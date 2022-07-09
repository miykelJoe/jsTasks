const candidates = [
    {
        Name: 'Tom Eniola',
        States: ['Abia', 'Rivers', 'Lagos', 'Imo'],
        Votes: [ 23, 43, 12, 33],
        Age: 85,
        Party: 'APC'
    },
    {
        Name: 'Uche Obi',
        States: ['Abia', 'Rivers', 'Lagos', 'Imo'],
        Votes: [ 73, 53, 92, 83],
        Age: 54,
        Party: 'YDP'
    },
    {
        Name: 'Jubril Cisse',
        States: ['Abia', 'Rivers', 'Lagos', 'Imo'],
        Votes: [3, 13, 22, 21],
        Age: 94,
        Party: 'PDP'
    },
    {
        Name: 'Evans Mbong',
        States: ['Abia', 'Rivers', 'Lagos', 'Imo'],
        Votes: [ 53, 63, 90, 58],
        Age: 58,
        Party: 'APGA'
    },
    {
        Name: 'Andrew Ethelbert',
        States: ['Abia', 'Rivers', 'Lagos', 'Imo'],
        Votes: [ 43, 13, 62, 53],
        Age: 61,
        Party: 'AC'
    }
]


function totalVotes( votes ){ 
    sum = 0
    for(i = 0; i < votes.length; i++){
        sum += votes[i]
    }
    return sum
    }

    let Tom_EniolaVOTES = (totalVotes(candidates[0].Votes))
    let Uche_ObiVOTES = (totalVotes(candidates[1].Votes))
    let Jubril_CisseVOTES = (totalVotes(candidates[2].Votes))
    let Evans_MbongVOTES = (totalVotes(candidates[3].Votes))
    let Andrew_EthelbertVOTES = (totalVotes(candidates[4].Votes))

    const totals = [Tom_EniolaVOTES, Uche_ObiVOTES, Jubril_CisseVOTES, Evans_MbongVOTES, Andrew_EthelbertVOTES];

    let theWinner = ''
    let winnerName = ''
    let winnerParty = ''
    let state = ''
    let president = ' won with the total of ' + Math.max(...totals) + ' votes'

    
    let Tom_highvotes = Math.max(...candidates[0].Votes)
    let Uche_highvotes = Math.max(...candidates[1].Votes)
    let Jubril_highvotes = Math.max(...candidates[2].Votes)
    let Evans_highvotes = Math.max(...candidates[3].Votes)
    let Andrew_highvotes = Math.max(...candidates[4].Votes)
    let highestVotingState = Math.max(Tom_highvotes, Uche_highvotes, Jubril_highvotes, Evans_highvotes, Andrew_highvotes)
    
    let highestVote = Math.max(...totals)
    if (highestVote === Tom_EniolaVOTES){
        theWinner = candidates[0]
        winnerName = candidates[0].Name
        winnerParty = candidates[0].Party
//.......................................................
        if(candidates[0].Votes[0] === Tom_highvotes){
            state = candidates[0].States[0]        
        }else if(candidates[0].Votes[1] === Tom_highvotes){
            state = candidates[0].States[1]        
        }else if(candidates[0].Votes[2] === Tom_highvotes){
            state = candidates[0].States[2]
        }else if(candidates[0].Votes[3] === Tom_highvotes){
            state = candidates[0].States[3]
        }
//.......................................................
//.......................................................
    }else if(highestVote === Uche_ObiVOTES){
        theWinner = candidates[1]
        winnerName = candidates[1].Name
        winnerParty = candidates[1].Party
//.......................................................
        if(candidates[1].Votes[0] === Uche_highvotes){
            state = candidates[1].States[0]        
        }else if(candidates[1].Votes[1] === Uche_highvotes){
            state = candidates[1].States[1]        
        }else if(candidates[1].Votes[2] === Uche_highvotes){
            state = candidates[1].States[2]
        }else if(candidates[1].Votes[3] === Uche_highvotes){
            state = candidates[1].States[3]
        }
//.......................................................
//.......................................................
    }else if(highestVote === Jubril_CisseVOTES){
        theWinner = candidates[2]
        winnerName = candidates[2].Name
        winnerParty = candidates[2].Party
//.......................................................
        if(candidates[2].Votes[0] === Jubril_highvotes){
            state = candidates[2].States[0]        
        }else if(candidates[2].Votes[1] === Jubril_highvotes){
            state = candidates[2].States[1]        
        }else if(candidates[2].Votes[2] === Jubril_highvotes){
            state = candidates[2].States[2]
        }else if(candidates[2].Votes[3] === Jubril_highvotes){
            state = candidates[2].States[3]
        }
//.......................................................
//.......................................................
    }else if(highestVote === Evans_MbongVOTES){
        theWinner = candidates[3]
        winnerName = candidates[3].Name
        winnerParty = candidates[3].Party
//.......................................................
        if(candidates[3].Votes[0] === Evans_highvotes){
            state = candidates[3].States[0]        
        }else if(candidates[3].Votes[1] === Evans_highvotes){
            state = candidates[3].States[1]        
        }else if(candidates[3].Votes[2] === Evans_highvotes){
            state = candidates[3].States[2]
        }else if(candidates[3].Votes[3] === Evans_highvotes){
            state = candidates[3].States[3]
        }
//.......................................................
//.......................................................
    }else if(highestVote === Andrew_EthelbertVOTES){
        theWinner = candidates[4]
        winnerName = candidates[4].Name
        winnerParty = candidates[4].Party
//.......................................................
        if(candidates[4].Votes[0] === Andrew_highvotes){
            state = candidates[4].States[0]        
        }else if(candidates[4].Votes[1] === Andrew_highvotes){
            state = candidates[4].States[1]        
        }else if(candidates[4].Votes[2] === Andrew_highvotes){
            state = candidates[4].States[2]
        }else if(candidates[4].Votes[3] === Andrew_highvotes){
            state = candidates[4].States[3]
        }
//.......................................................
//.......................................................
    }

    console.log('In the last election conducted, ' + winnerName + ' of ' + winnerParty + president + '.')
    console.log(state + ' being the highest voting state with the total of ' + highestVotingState + ' votes.')