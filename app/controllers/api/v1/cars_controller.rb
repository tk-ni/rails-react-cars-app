module Api
    module V1
        class CarsController < ApplicationController
            def index
                cars = Car.all
                render json: CarSerializer.new(cars).serialized_json
            end

            def create
                car = Car.new(car_params)
                if car.save
                    render json: CarSerializer.new(car).serialized_json
                else
                    render json: {error: 'Internal server error.'}, status: 500
                end
            end

            def car_by_id
                id = params[:car_id]
                car = Car.find(id)
                render json: CarSerializer.new(car).serialized_json
            end

            def car_drivers
                id = params[:car_id]
                drivers = Car.find(id).drivers
                render json: drivers
            end

            private

            def car_params
                params.require(:car).permit(:title, :kind, :color)
            end

        end        
    end
end
