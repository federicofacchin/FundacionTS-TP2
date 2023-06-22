//aca van importados todos los modelos para hacer las relaciones entre las tablas
import Person from "./Person.js"
import Rol from "./Rol.js"
import Donation from "./Donation.js"
import Fundation from "./Fundation.js"

Rol.hasMany(Person)
Person.belongsTo(Rol)

Fundation.hasMany(Donation)
Donation.belongsTo(Fundation)

Donation.hasOne(Fundation)
Donation.hasOne(Person)
Person.belongsTo(Donation)
Person.belongsTo(Donation)


export {
    Person,
    Rol,
    Donation,
    Fundation
}