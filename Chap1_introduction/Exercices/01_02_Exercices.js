// 1
db.restaurants.find(
    {
        borough: "Brooklyn",
        $or: [{ name: /^B/ }, { name: /^W/ }], // nom de restaurant qui commence par B ou W
    },
    { name: 1, borough: 1, _id: 0 }
);

db.restaurants.find(
    {
        borough: "Brooklyn",
        $or: [{ name: /^B/ }, { name: /^W/ }], // nom de restaurant qui commence par B ou W
    },
    { name: 1, borough: 1, _id: 0 }
).count();


// 2
let count = 0;

db.restaurants.find({ borough: "Brooklyn" }, { _id: 0, name: 1 }).forEach(doc => {
    count++;
    print(doc.name)
});

print(count);

db.restaurants.find({ borough: "Brooklyn" }).count();

// 
count = 0;
const restBrooklyn = db.restaurants.find({ borough: "Brooklyn" });
while (restBrooklyn.hasNext()) {
    restBrooklyn.next(); // on avance d'une itération
    count++;
}
print(count);
