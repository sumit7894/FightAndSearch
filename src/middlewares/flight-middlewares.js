const validateCreateFlight = (req,res) =>{
    if(
        req.body.flightNumber ||
        req.body.airplaneId ||
        req.body.departureAirportId ||
        req.body.arrivalAirportId ||
        req.body.arrivalTime ||
        req.body.departureTime ||
        req.body.price
    ) {
        //if any of the param is missing we come inside the if
        return res.status(400).json({
            data:{},
            success:false,
            message:"Invalid request body to create a flight",
            err:"Missing manadatory properties to create a flight"
        });
    }
    next();
}
module.exports ={
    validateCreateFlight
}