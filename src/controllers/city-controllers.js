const {CityService} = require('../services/index');

const cityService = new CityService();

// The use case of controller is -> The request is going to come on this controller and this controller is going to pass all 
// the data to the service and repository layer and they will process somehow things give it back to controller then controller 
// will form the structure how the response should look like and then it will send it to user.

const create = async (req,res) =>{
    try{
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success : true,
            message:"Successfully created a city",
            err:{}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success : false,
            message: 'Not able to create a city',
            err: error
        })
    }
}
//DELTE -> /city/:id
const destroy = async (req,res)=>{
    try{
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data:response,
            success : true,
            message:"Successfully deleted a city",
            err:{}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success : false,
            message: 'Not able to delete the city',
            err: error
        })
    }
}
//GET->city/:id 
const get = async(req,res)=>{
    try{
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data:response,
            success : true,
            message:"Successfully fetched a city",  
            err:{}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success : false,
            message: 'Not able to get the city',
            err: error
        })
    }
}
//PATCH -> /city/:id->req.body
const update = async(req,res)=>{
    try{
        const response = await cityService.updateCity(req.params.id,req.body);
        return res.status(200).json({
            data:response,
            success : true,
            message:"Successfully updated the city",
            err:{}
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success : false,
            message: 'Not able to update the city',
            err: error
        })
    }
}
module.exports={
    create,
    destroy,
    get,
    update
}