class Driver < ApplicationRecord
    has_many :link_car_drivers
    has_many :cars, through: :link_car_drivers
end
