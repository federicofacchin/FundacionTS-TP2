//aca van importados todos los modelos para hacer las relaciones entre las tablas
import Person from "./Person.js"
import Rol from "./Rol.js"
import Donation from "./Donation.js"

Rol.hasMany(Person)
Person.belongsTo(Rol)

export {
    Person,
    Rol,
    Donation
}