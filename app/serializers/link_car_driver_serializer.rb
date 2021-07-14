class LinkCarDriverSerializer
  include FastJsonapi::ObjectSerializer
  attributes :car, :driver
end
