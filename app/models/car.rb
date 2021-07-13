class Car < ApplicationRecord
    enum color: {blue: "blue", yellow: "yellow", red: "red"}
    enum kind: {wagon: "wagon", sport: "sport", truck: "truck"}
end
