const {FlightRepository,AirplaneRespository} = require('../repository/index');
const {compareTime} = require('../utils/helper');
class FlightService{
    constructor(){
        this.airplaneRespository = new AirplaneRespository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data){
        try {
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw{error: 'Arrival time cannot be less than departure time'};
            }
            const airplane = await this.airplaneRespository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats:airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong at the service layer");
            throw{error};
        }
    }
    async getFlightData(){

    }
}
/**
 *flightNumber,
 * airplaneId,
 * departureAirportId,
 * arrivalAirportId,
 * arrivalTime,
 * departureTime,
 * price,
 * totalSeats -> airplane.capacity
 * 
**/
module.exports = FlightService;