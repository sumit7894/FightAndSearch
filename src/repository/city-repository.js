const {Op} = require('sequelize');
const {City} = require('../models/index');

class CityRepository{
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }catch(error){
            console.log("Somthing wen wrong in the repo layer");
            throw{error}
        }
    }

    async deleteCity(cityId){
        try{
            await City.destroy({
                where:{
                    id:cityId
                }
            });
            return true;
        }catch(error){
            console.log("Somthing went wrong in the repo layer");
            throw{error};
        }
    }

    async updateCity(cityId,data){
        try{
            // Below approach also works but won't return updated object
            // if we are using pg then returning: true can be used, else not 
            // const city = await City.update(data,{
            //     where:{
            //         id:cityId
            //     }
            // });
            //for getting the updated data we have used the below approach  
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;
        }catch(error){
            console.log("Somthing went wrong in the repo layer");
            throw{error}
        }
    }

    async getCity(cityId){
        try{
            const city = await City.findByPk(cityId);
            return city;
        }catch(error){
            console.log("Somthing went wrong in the repo layer");
            throw{error};
        }
    }

    async getAllCities(filter){ //filter can be empty.In that case it will send all the cities
        try{
            if(filter.name){
                const cities = await City.findAll(
                    {
                        where:{
                            name:{
                                [Op.startsWith] : filter.name
                            }
                        }
                    }
                );
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        }
    catch(error){
        console.log("Somthing went wrong in the repo layer");
        throw{error};
    }
    }
}

module.exports = CityRepository;