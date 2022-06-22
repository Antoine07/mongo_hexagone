
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


//  04. A l'aide de la méthode distinct trouvez tous les quartiers distincts de NY.
db.restaurants.distinct("borough");

// 05 Trouvez tous les types de restaurants dans le quartiers du Bronx. Vous pouvez là encore utiliser distinct et un deuxième paramètre pour préciser sur quel ensemble vous voulez appliquer cette close.

db.restaurants.distinct("cuisine", { borough: "Bronx" });

// 06

db.restaurants.find({
    $and: [
        { borough: "Bronx" },
        { grades: { "$size": 4 } }
    ]
},
    {
        grades : 1,
        _id : 0
    }
).pretty()