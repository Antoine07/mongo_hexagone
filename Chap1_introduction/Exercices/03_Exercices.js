

db.restaurants.find({
    $and : [ { cuisine : "Italian" }, {"grades.score" : 10} ]
},
{ _id : 0 , cuisine: 1, "grades.score" : 1 }
).pretty()