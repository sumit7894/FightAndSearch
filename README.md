# Welcome to flights Service 


## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variable
    - `PORT = 3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following
piece of json

```
{
  "development": {
    "username": "<YOUR_DB_USERNAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "flights_search_db_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

-  Once you've added your db config as listed above , go the src folder from your
terminal and execute `npx sequelize db:create` 
and then execute 

`npx sequelize db:migrate`
```

## DB Design

- Airplane Table
- Flight
- Airpot
- City

- A flight belongs to an airoplane but one airoplane can be used in multiple flights
- A city has many airpots but one airpot belongs to one city
- One airpot  can have many flights, but a flight belongs to one airport

##Tables

###City -> id,name,created_at,updated_at
###Airport -> id, name, address, city_id, created_at, updated_at, 
              Relationship -> City has many airports and Airports belongs to a
              city(One to Many) 

```
npx sequelize seed:generate --name add-airports

 npx sequelize db:seed:all
```
