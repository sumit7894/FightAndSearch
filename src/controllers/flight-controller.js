const {FlightService} = require('../services/index');
const {SUCCESS_CODES} = require('../utils/error-codes');
const flightService = new FlightService();

const create = async (req,res)=>{
    //we are doing this so that we should pass only the required data in the request
    //ensuring no extra fields should further inside req.body
    const flightRequestData = {
        flightNumber: req.body.flightNumber,
        airplaneId: req.body.airplaneId,
        departureAirportId: req.body.departureAirportId,
        arrivalTime: req.body.arrivalTime,
        departureTime: req.body.departureTime,
        price: req.body.price
    }
        try {
        const flight = await flightService.createFlight(flightRequestData);
        return res.status(SUCCESS_CODES.CREATED).json({
            data: flight,
            success: true,
            err:{},
            message:"Successfully created a flight"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: "Not able to crate a flight",
            err: error
        })
    }
}

const getAll = async (req,res)=>{
    try {
        const response = await flightService.getAllFlightData(req.query);
        return res.status(SUCCESS_CODES.OK).json({
            data:response,
            success: true,
            message: "Successfully fetched  the flight",
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: "Not able to fetch the flights",
            err: error
        })
    }
}

module.exports={
    create,
    getAll
}