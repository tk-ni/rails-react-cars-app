class Car < ApplicationRecord
    enum color: {blue: 'blue', yellow: 'yellow', red:'red'}
end
