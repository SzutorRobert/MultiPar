const fs = require('fs');
const path = require('path');

const writeJson = () => {
    let item = []
    for (i = 0; i<10 ; i++)
    {
        var obj = {
            id : i,
            Weight : Math.floor(Math.random() * 4) + 1,
            Price : Math.floor(Math.random() * 50) + 50
        }
        item.push(obj)
    }
    fs.writeFile ("items.json", JSON.stringify(item), function(err) {
            if (err) throw err;
            console.log('complete');
        });
}

const generateKnapsack = () =>{
    let knapsack = []
    const json = require('./items.json')
    let maxWeight = 20
    let knapsackWeight = 0
    while (knapsackWeight <= maxWeight)
    {
        let itemx = Math.floor(Math.random() * 10 )
        if (json[itemx].Weight + knapsackWeight <= maxWeight)
        knapsack.push(json[itemx])
        knapsackWeight += (json[itemx].Weight)
    }
    return knapsack
}

const generateKnapsacks = () =>{
    ksacks = []
    for (i=0 ; i<10 ; i++)
    {
        let x = generateKnapsack()
        ksacks.push(x)
    }
    return ksacks
}

const knapsackWeight = (list) =>{
    w = 0
    x = list.length
    for(i = 0; i<x ; i++)
    {
        w += list[i].Weight
    }
    return w
}

const knapsackPrice = (list) =>{
    p = 0
    x = list.length
    for(i = 0; i<x ; i++)
    {
        p += list[i].Price
    }
    return p
}

const bestKnapsack = (list) =>{
    var x = list[0]
    for (let i=0; i<list.length; i++)
    {
        if (knapsackPrice(list[i]) > knapsackPrice(x))
        {
            x = list[i]
        }
    }
    return x
}

knapsacks = generateKnapsacks()
console.log("Best knapsack price:" ,knapsackPrice(bestKnapsack(knapsacks)))


