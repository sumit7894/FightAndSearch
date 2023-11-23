const {FlightService} = require('../services/index');
const {SuccessCodes} = require('../utils/error-codes');
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
        return res.status(SuccessCodes.OK).json({
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
        return res.status(SuccessCodes.OK).json({
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
const get = async (req,res)=>{
    try {
        const response = await flightService.getFlight(req.params.id);
        return res.status(SuccessCodes.OK).json({
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
const update = async(req,res)=>{
    try {
        const response = await flightService.updateFlight(req.params.id,req.body);
        return res.status(SuccessCodes.OK).json({
            data:response,
            success:true,
            err:{},
            message:"Successfully updated the flight"
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            err:{},
            success:false,
            message:"Not able to update the flight"
        })
    }
}

module.exports={
    create,
    getAll,
    get,
    update
}