const mockDataPurchases = [
    {
        "_id": "63c95fd63b17b182e5acb688",
        "seller": {
            "_id": "6307a27895a9a83f490f7883",
            "addressCoordinate": {
                "lat": -127.001,
                "lng": 127.001
            }
        },
    },
    {
        "_id": "63cabd54d7b4d3fbb01c8d39",
        "seller": {
            "_id": "6307a27895a9a83f490f7883",
            "addressCoordinate": {
                "lat": -127.001,
                "lng": 127.001
            }
        }
    }
];
// const mockDataPurchases = require('./ignorethis/mock_data_purchases.json');
const javascriptDeepCloneV1 = require('./javascriptDeepCloneV1');
const javascriptDeepCloneV2 = require('./javascriptDeepCloneV2');
const javascriptDeepCloneV3 = require('./javascriptDeepCloneV3');
const javascriptDeepCloneV4 = require('./javascriptDeepCloneV4');

const javascriptDeepCloneV4Result = javascriptDeepCloneV4(mockDataPurchases)
mockDataPurchases[0] = { hello: 'world' }
console.log('javascriptDeepCloneV4Result[0]:', javascriptDeepCloneV4Result[0]);
console.log('mockDataPurchases[0]:', mockDataPurchases[0]);
console.log('javascriptDeepCloneV4Result[0]:', javascriptDeepCloneV4Result[0]);
