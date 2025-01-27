function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let num = Number(input[2]);

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday": 
            switch (fruit) {
                case "banana": console.log((num * 2.50).toFixed(2)); break;
                case "apple": console.log((num * 1.20).toFixed(2)); break;
                case "orange": console.log((num * 0.85).toFixed(2)); break;
                case "grapefruit": console.log((num * 1.45).toFixed(2)); break;
                case "kiwi": console.log((num * 2.70).toFixed(2)); break;
                case "pineapple": console.log((num * 5.50).toFixed(2)); break;
                case "grapes": console.log((num * 3.85).toFixed(2)); break;
                default: console.log("error"); break;
        } break;
        case "Saturday":
        case "Sunday":
            switch (fruit) {
                case "banana": console.log((num * 2.70).toFixed(2)); break;
                case "apple": console.log((num * 1.25).toFixed(2)); break;
                case "orange": console.log((num * 0.90).toFixed(2)); break;
                case "grapefruit": console.log((num * 1.60).toFixed(2)); break;
                case "kiwi": console.log((num * 3.00).toFixed(2)); break;
                case "pineapple": console.log((num * 5.60).toFixed(2)); break;
                case "grapes": console.log((num * 4.20).toFixed(2)); break;
                default: console.log("error"); break;
        } break;
        default: console.log("error"); break;
    }
}

fruitShop(["apple", "Tuesday", "2"]);