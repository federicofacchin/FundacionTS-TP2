//aca van importados todos los modelos para hacer las relaciones entre las tablas
import Person from "./Person.js"
import Rol from "./Rol.js"
import Donation from "./Donation.js"
import Fundation from "./Fundation.js"

Rol.hasMany(Person)
Person.belongsTo(Rol)

Person.hasMany(Donation)
Donation.belongsTo(Person)

Fundation.hasMany(Donation)
Donation.belongsTo(Fundation)

Person.belongsToMany(Fundation,{ through: 'PersonFundations' })
Fundation.belongsToMany(Person,{ through: 'PersonFundations' })


export {
    Person,
    Rol,
    Donation,
    Fundation
}