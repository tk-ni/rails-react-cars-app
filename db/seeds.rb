# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cars = Car.create([
    {
        title: "Volvo",
        kind: "wagon",
        color: "yellow"
    },
    {
        title: "Porche",
        kind: "sport",
        color: "blue"
    },
    {
        title: "Jaguar",
        kind: "truck",
        color: "red"
    },
    {
        title: "Lamborghini",
        kind: "sport",
        color: "yellow"
    }
])

Drivers = Driver.create([
   {
    name: "David",
    email: "david@cnvrg.io",
    date_of_birth: "1970-01-01 00:00:00 IDT"
   },
   {
    name: "Tomer",
    email: "tomer@cnvrg.io",
    date_of_birth: "1990-01-01 00:00:00 IDT"
   },
])