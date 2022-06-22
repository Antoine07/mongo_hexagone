
// 03

// 01
db.restaurants.find({
    $and: [{ cuisine: "Italian" }, { "grades.score": 10 }]
},
    { _id: 0, cuisine: 1, "grades.score": 1 }
).pretty()


// 02
/**
 * Affichez également le nom, les scores et les coordonnées GPS de ces restaurants. Ordonnez les résultats par ordre décroissant sur les noms des restaurants.
 */
db.restaurants
    .find(
        {
            $and: [
                { "grades.grade": "A" },
                { "grades.score": { $gte: 20 } }
            ]
        },
        {
            "grades.score": 1,
            "address.coord": 1,
            "grades.grade": "A",
            name: 1,
            _id: 0
        }
    )
    .sort({ name: 1 })
    .pretty();
