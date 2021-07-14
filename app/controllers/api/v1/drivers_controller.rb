module Api
    module V1
        class DriversController < ApplicationController
            def index
                drivers = Driver.all
                render json: DriverSerializer.new(drivers).serialized_json
            end

            def create
                driver = Driver.new(driver_params)
                if driver.save 
                    render json: DriverSerializer.new(driver).serialized_json
                else
                    render json: {error: 'Internal server error.'}, status: 500
                end
            end

            def driver_cars
                id = params[:driver_id]
                cars = Driver.find(id).cars
                render json: cars
            end

            private

            def driver_params
                params.require(:driver).permit(:name, :email)
            end

        end        
    end
end
