
export class VotacionService {
    constructor(contract) {
        this.contract = contract;
    }

    async totalVotesFor(candidate, from) {
        return this.contract.totalVotesFor(candidate, { from });
    }

    async voteForCandidate(candidate, from, value) {
        return this.contract.voteForCandidate(candidate, { from, value });
    }

}


//     async buyFlight(flightIndex, from, value) {
//         //es el objeto de metadatos de la transaccion lo que está entre {}
//         return this.contract.buyFlights(flightIndex, { from, value });
//     }

//     async getFlights() {
//         let total = await this.getTotalFlights();
//         let flights = [];
//         for(var i= 0; i < total; i++) {
//             let flight = await this.contract.flights(i);
//             flights.push(flight);
//         }
//         return this.mapFlights(flights);
//     }

//     async getCustomerFlights(account) {
//         let totalFlights = await this.contract.getTotalFlightsCustomer(account);
//         //console.log(totalFlights);
//         let flights = [];
//         for (var i = 0; i < totalFlights.toNumber(); i++) {
//             let flight = await this.contract.customerFlights(account, i);
//             flights.push(flight);
//         }
        
//         return this.mapFlights(flights);
//     }

//     async getTotalFlights() {
//         return (await this.contract.getTotalFlights()).toNumber();
//     }

//     async getRefundableEther(from) {
//         return await this.contract.getRefundableEther({ from });
//         //return loyaltyPoints.toNumber();
//     }

//     async redeemLoyaltyPoints(from) {
//         return await this.contract.redeemLoyaltyPoints({ from });
//     }

//     //función de mapeo
//     mapFlights(flights) {
//         return flights.map(flight => {
//             return {
//                 name: flight[0],
//                 price: flight[1].toNumber()
//             }
//         });
//     }

// }