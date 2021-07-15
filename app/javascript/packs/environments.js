export const URL = {
        API: {
            CARS: {
                GET: {
                    getCars: () => '/api/v1/cars',
                    getCarById: (car_id) => `/api/v1/cars/${encodeURIComponent(car_id)}/car_by_id`,
                    getCarDrivers: (car_id) => `/api/v1/cars/${encodeURIComponent(car_id)}/car_drivers`,
                    getCarAndDriversByTitle: (car_title) => `/api/v1/cars/car_drivers_combined/${encodeURIComponent(car_title)}`
                },
                POST : {
                    addCar: () => '/api/v1/cars'
                }
            },
            DRIVERS: {
                GET: {
                    getDrivers: () => '/api/v1/drivers',
                    getDriverById: (driver_id) => `/api/v1/drivers/${encodeURIComponent(driver_id)}/driver_by_id`,
                    getDriverCars: (driver_id) => `/api/v1/drivers/${encodeURIComponent(driver_id)}/driver_cars`,
                    getDriverAndCarsByName: (driver_name) =>  `/api/v1/drivers/driver_cars_combined/${encodeURIComponent(driver_name)}`
                },
                POST : {
                    addDriver: () => '/api/v1/drivers'
                }
            }
        }
    }

