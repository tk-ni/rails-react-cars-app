class Car < ApplicationRecord
    enum color: {blue: "blue", yellow: "yellow", red: "red"}
    enum kind: {wagon: "wagon", sport: "sport", truck: "truck"}
    has_many :link_car_drivers
    has_many :drivers, through: :link_car_drivers
end
