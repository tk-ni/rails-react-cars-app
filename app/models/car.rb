class Car < ApplicationRecord
    enum color: {blue: "blue", yellow: "yellow", red: "red"}
    enum kind: {wagon: "wagon", sport: "sport", truck: "truck"}
    has_and_belongs_to_many :drivers
end
