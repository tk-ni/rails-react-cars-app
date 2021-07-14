export const URL = {
        API: {
            CARS: {
                GET: {
                    getCars: () => '/api/v1/cars',
                    getCarById: (car_id) => `/api/v1/cars/${encodeURIComponent(car_id)}/car_by_id`,
                    getCarDrivers: (car_id) => `/api/v1/cars/${encodeURIComponent(car_id)}/car_drivers`
                },
                POST : {
                    addCar: () => '/api/v1/cars'
                }
            },
            DRIVERS: {
                GET: {
                    getDrivers: () => '/api/v1/drivers',
                    getDriverById: (driver_id) => `/api/v1/drivers/${encodeURIComponent(driver_id)}/driver_by_id`,
                    getDriverCars: (driver_id) => `/api/v1/drivers/${encodeURIComponent(driver_id)}/driver_cars`
                },
                POST : {
                    addDriver: () => '/api/v1/drivers'
                }
            }
        }
    }

