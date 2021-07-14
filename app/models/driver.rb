class Driver < ApplicationRecord
    has_many :link_car_drivers
    has_many :cars, through: :link_car_drivers
    validates :email,
    format: { with: /^(.+)@(.+)$/, message: "Email invalid", :multiline => true  }, uniqueness: { case_sensitive: false }, length: { minimum: 4, maximum: 254 }
end
