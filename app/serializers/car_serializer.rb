class CarSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :kind, :color
end
