const customLog = (msg, dt) => console.log(msg + '\n', dt, '\n\n\n');

// const mockData = require('./ignorethis/mock_data.json');
const mockData = [
    {
        "_id": "63c95fd63b17b182e5acb688",
        "buyer": "633aaff5596738ce6f05bf21",
        "seller": {
            "_id": "6307a27895a9a83f490f7883",
            "name": "John Doe Company",
            "email": "johndoe@company.com",
            "phone": "087654321",
            "role": "John Doe Role",
            "completeAddress": "John Doe Complete Address",
            "province": "John Doe Province",
            "city": "John Doe City",
            "district": "John Doe District",
            "subdistrict": "John Doe Subdistrict",
            "postalCode": "12701",
            "addressCoordinate": {
                "lat": -127.001,
                "lng": 127.001
            }
        },
        "order": {
            "name": "ORDER-20230118091347",
            "description": "Some Description",
            "file": "633aaff5596738ce6f05bf21-order-63c755dbbfd4e143a8a4a6d8.pdf"
        },
        "shippingAddress": {
            "completeAddress": "John Doe Complete Address",
            "province": "John Doe Province",
            "city": "John Doe City",
            "district": "John Doe Subdistrict",
            "subdistrict": "John Doe Subdistrict",
            "postalCode": "12700",
            "addressCoordinate": {
                "lat": -127,
                "lng": 127
            }
        },
        "billingAddress": {
            "completeAddress": "John Doe Complete Address",
            "province": "John Doe Province",
            "city": "John Doe City",
            "district": "John Doe Subdistrict",
            "subdistrict": "John Doe Subdistrict",
            "postalCode": "12700",
            "addressCoordinate": {
                "lat": -127,
                "lng": 127
            }
        },
        "processed": false,
        "delivered": false,
        "arrived": false,
        "status": "PAID",
        "isNeedInsurance": true,
        "items": [
            {
                "name": "Manufaturer ProductName 30",
                "categories": "some categories",
                "price": 149850,
                "quantity": 1,
                "weight": 1,
                "length": 111,
                "width": 13,
                "height": 11,
                "isFragile": true,
                "_id": "63c962663b17b182e5acb6dc"
            }
        ],
        "differenceInDays": 31,
        "invoiceNumber": "testinvoice20230119a4-1",
        "totalPrice": 157000,
        "paymentMethod": "abcd",
        "payment": {
            "status_code": "200",
            "transaction_id": "68292cce-7326-4cf0-973e-ebc2f4c43af8",
            "gross_amount": "157000.00",
            "currency": "USD",
            "order_id": "63c9629a3b17b182e5acb6f0",
            "payment_type": "bank_transfer",
            "signature_key": "985fc43cc215a8241a3722af169bbc24d7cfce98360456697192c39809d1948028e5ef3046c2800ff700040e06e5d96b3755e2e96ef8a7b0cf0049bc97a0521c",
            "transaction_status": "settlement",
            "fraud_status": "accept",
            "status_message": "Success, transaction is found",
            "merchant_id": "ASD123",
            "payment_amounts": [],
            "transaction_time": "2023-01-19 22:32:55",
            "settlement_time": "2023-01-19T15:33:02.635Z"
        },
        "paymentStatus": "success"
    },
    {
        "_id": "63cabd54d7b4d3fbb01c8d39",
        "buyer": "633aaff5596738ce6f05bf21",
        "seller": {
            "_id": "6307a27895a9a83f490f7883",
            "name": "John Doe Company",
            "email": "johndoe@company.com",
            "phone": "087654321",
            "role": "John Doe Role",
            "completeAddress": "John Doe Complete Address",
            "province": "John Doe Province",
            "city": "John Doe City",
            "district": "John Doe District",
            "subdistrict": "John Doe Subdistrict",
            "postalCode": "12701",
            "addressCoordinate": {
                "lat": -127.001,
                "lng": 127.001
            }
        },
        "order": {
            "name": "ORDER-20230118091347",
            "description": "Some Description",
            "file": "633aaff5596738ce6f05bf21-order-63c755dbbfd4e143a8a4a6d8.pdf"
        },
        "shippingAddress": {
            "completeAddress": "John Doe Complete Address",
            "province": "John Doe Province",
            "city": "John Doe City",
            "district": "John Doe Subdistrict",
            "subdistrict": "John Doe Subdistrict",
            "postalCode": "12700",
            "addressCoordinate": {
                "lat": -127,
                "lng": 127
            }
        },
        "billingAddress": {
            "completeAddress": "John Doe Complete Address",
            "province": "John Doe Province",
            "city": "John Doe City",
            "district": "John Doe Subdistrict",
            "subdistrict": "John Doe Subdistrict",
            "postalCode": "12700",
            "addressCoordinate": {
                "lat": -127,
                "lng": 127
            }
        },
        "processed": true,
        "delivered": false,
        "arrived": false,
        "status": "PROCESSED",
        "isNeedInsurance": true,
        "items": [
            {
                "name": "Manufacturer ProductName 30",
                "categories": "some categories",
                "price": 149850,
                "quantity": 1,
                "weight": 1,
                "length": 13,
                "width": 11,
                "height": 11,
                "isFragile": true,
                "_id": "63cabd90d7b4d3fbb01c8d74"
            },
            {
                "name": "Manufacturer ProductName 30",
                "categories": "some categories",
                "price": 193140,
                "quantity": 1,
                "weight": 1,
                "length": 13,
                "width": 12,
                "height": 11,
                "isFragile": true,
                "_id": "63cabda6d7b4d3fbb01c8d79"
            }
        ],
        "differenceInDays": 32,
        "invoiceNumber": "a3235235ddsfaf-1",
        "totalPrice": 23566,
        "paymentMethod": "zxcv",
        "payment": {
            "receipt": "633aaff5596738ce6f05bf21-receipt-63cabd54d7b4d3fbb01c8d39-63cae459d7b4d3fbb01c8f80.jpg",
            "uploadedAt": "2023-01-20T18:58:33.598Z",
            "settlement_time": "2023-01-20T19:09:33.925Z"
        },
        "paymentStatus": "success"
    },
    {
        "_id": "63cae918d7b4d3fbb01c9012",
        "buyer": "633aaff5596738ce6f05bf21",
        "seller": {
            "_id": "6307a27895a9a83f490f7883",
            "name": "John Doe Company",
            "email": "johndoe@company.com",
            "phone": "087654321",
            "role": "John Doe Role",
            "completeAddress": "John Doe Complete Address",
            "province": "John Doe Province",
            "city": "John Doe City",
            "district": "John Doe District",
            "subdistrict": "John Doe Subdistrict",
            "postalCode": "12701",
            "addressCoordinate": {
                "lat": -127.001,
                "lng": 127.001
            }
        },
        "order": {
            "name": "ORDER-20230118091347",
            "description": "Some Description",
            "file": "633aaff5596738ce6f05bf21-order-63c755dbbfd4e143a8a4a6d8.pdf"
        },
        "shippingAddress": {
            "completeAddress": "John Doe Complete Address",
            "province": "John Doe Province",
            "city": "John Doe City",
            "district": "John Doe Subdistrict",
            "subdistrict": "John Doe Subdistrict",
            "postalCode": "12700",
            "addressCoordinate": {
                "lat": -127,
                "lng": 127
            }
        },
        "billingAddress": {
            "completeAddress": "John Doe Complete Address",
            "province": "John Doe Province",
            "city": "John Doe City",
            "district": "John Doe Subdistrict",
            "subdistrict": "John Doe Subdistrict",
            "postalCode": "12700",
            "addressCoordinate": {
                "lat": -127,
                "lng": 127
            }
        },
        "processed": false,
        "delivered": false,
        "arrived": false,
        "status": "PROCESSED",
        "isNeedInsurance": true,
        "items": [
            {
                "name": "Manufacturer ProductName 30",
                "categories": "some categories",
                "price": 149850,
                "quantity": 1,
                "weight": 1,
                "length": 13,
                "width": 12,
                "height": 11,
                "isFragile": true,
                "_id": "63cae933d7b4d3fbb01c9048"
            }
        ]
    },
    {
        "_id": "63ce1176b77624490b46db84",
        "buyer": "633aaff5596738ce6f05bf21",
        "seller": {
            "_id": "6307a27895a9a83f490f7883",
            "name": "John Doe Company",
            "email": "johndoe@company.com",
            "phone": "087654321",
            "role": "John Doe Role",
            "completeAddress": "John Doe Complete Address",
            "province": "John Doe Province",
            "city": "John Doe City",
            "district": "John Doe District",
            "subdistrict": "John Doe Subdistrict",
            "postalCode": "12701",
            "addressCoordinate": {
                "lat": -127.001,
                "lng": 127.001
            }
        },
        "order": {
            "name": "ORDER-20230118091347",
            "description": "Some Description",
            "file": "633aaff5596738ce6f05bf21-order-63c755dbbfd4e143a8a4a6d8.pdf"
        },
        "shippingAddress": {
            "completeAddress": "John Doe Complete Address",
            "province": "John Doe Province",
            "city": "John Doe City",
            "district": "John Doe Subdistrict",
            "subdistrict": "John Doe Subdistrict",
            "postalCode": "12700",
            "addressCoordinate": {
                "lat": -127,
                "lng": 127
            }
        },
        "billingAddress": {
            "completeAddress": "John Doe Complete Address",
            "province": "John Doe Province",
            "city": "John Doe City",
            "district": "John Doe Subdistrict",
            "subdistrict": "John Doe Subdistrict",
            "postalCode": "12700",
            "addressCoordinate": {
                "lat": -127,
                "lng": 127
            }
        },
        "processed": true,
        "delivered": false,
        "arrived": false,
        "status": "PROCESSED",
        "isNeedInsurance": true,
        "items": [
            {
                "name": "Manufacturer ProductName 30",
                "categories": "some categories",
                "price": 149850,
                "quantity": 2,
                "weight": 1,
                "length": 15,
                "width": 10,
                "height": 10,
                "isFragile": true,
                "_id": "63ce11bdb77624490b46dbe6"
            }
        ],
        "differenceInDays": 31,
        "invoiceNumber": "TEST20210123AAA-1",
        "totalPrice": 308000
    },
    {
        "_id": "63ce1181b77624490b46dba1",
        "buyer": "633aaff5596738ce6f05bf21",
        "seller": {
            "_id": "6307a27895a9a83f490f7883",
            "name": "John Doe Company",
            "email": "johndoe@company.com",
            "phone": "087654321",
            "role": "John Doe Role",
            "completeAddress": "John Doe Complete Address",
            "province": "John Doe Province",
            "city": "John Doe City",
            "district": "John Doe District",
            "subdistrict": "John Doe Subdistrict",
            "postalCode": "12701",
            "addressCoordinate": {
                "lat": -127.001,
                "lng": 127.001
            }
        },
        "order": {
            "name": "ORDER-20230118091347",
            "description": "Some Description",
            "file": "633aaff5596738ce6f05bf21-order-63c755dbbfd4e143a8a4a6d8.pdf"
        },
        "shippingAddress": {
            "completeAddress": "John Doe Complete Address",
            "province": "John Doe Province",
            "city": "John Doe City",
            "district": "John Doe Subdistrict",
            "subdistrict": "John Doe Subdistrict",
            "postalCode": "12700",
            "addressCoordinate": {
                "lat": -127,
                "lng": 127
            }
        },
        "billingAddress": {
            "completeAddress": "John Doe Complete Address",
            "province": "John Doe Province",
            "city": "John Doe City",
            "district": "John Doe Subdistrict",
            "subdistrict": "John Doe Subdistrict",
            "postalCode": "12700",
            "addressCoordinate": {
                "lat": -127,
                "lng": 127
            }
        },
        "processed": false,
        "delivered": false,
        "arrived": false,
        "status": "NEW",
        "isNeedInsurance": true,
        "items": []
    }
];

const modifyNestedArrayDeepCopyUsingStructuredClone = () => {
    const documentId = '63cabd54d7b4d3fbb01c8d39';
    const doucmentItemId = '63cabd90d7b4d3fbb01c8d74';
    const mockDataStructuredClone = structuredClone(mockData);
    const selectedDocItemBefore = mockDataStructuredClone.find((doc) => doc._id === documentId)?.items?.find?.((docItem) => docItem?._id === doucmentItemId);
    customLog('selectedDocItemBefore:', selectedDocItemBefore);

    const mockDataStructuredCloneNew = mockDataStructuredClone.map((doc) => {
        if (doc._id === documentId) {
            const newDocItems = doc.items.map((docItem) => {
                if (docItem._id === doucmentItemId) {
                    return { ...docItem, name: 'COCA COLA' };
                }
                return docItem;
            })
            return { ...doc, items: newDocItems };
        }
        return doc;
    });
    const selectedDocItemNew = mockDataStructuredCloneNew.find((doc) => doc._id === documentId)?.items?.find?.((docItem) => docItem?._id === doucmentItemId);
    customLog('selectedDocItemNew:', selectedDocItemNew);

    const mockDataDocItemAfter = mockData.find((doc) => doc._id === documentId)?.items?.find?.((docItem) => docItem?._id === doucmentItemId);
    customLog('mockDataDocItemAfter:', mockDataDocItemAfter);
};

const modifyNestedArrayShallowCopyUsingSpread = () => {
    const documentId = '63cabd54d7b4d3fbb01c8d39';
    const doucmentItemId = '63cabd90d7b4d3fbb01c8d74';
    const mockDataSpeadCopy = [...mockData];
    const selectedDocItemBefore = mockDataSpeadCopy.find((doc) => doc._id === documentId)?.items?.find?.((docItem) => docItem?._id === doucmentItemId);
    customLog('selectedDocItemBefore:', selectedDocItemBefore);

    const mockDataSpeadCopyNew = mockDataSpeadCopy.map((doc) => {
        if (doc._id === documentId) {
            const newDocItems = doc.items.map((docItem) => {
                if (docItem._id === doucmentItemId) {
                    return { ...docItem, name: 'COCA COLA' };
                }
                return docItem;
            })
            return { ...doc, items: newDocItems };
        }
        return doc;
    });
    const selectedDocItemNew = mockDataSpeadCopyNew.find((doc) => doc._id === documentId)?.items?.find?.((docItem) => docItem?._id === doucmentItemId);
    customLog('selectedDocItemNew:', selectedDocItemNew);

    const mockDataDocItemAfter = mockData.find((doc) => doc._id === documentId)?.items?.find?.((docItem) => docItem?._id === doucmentItemId);
    customLog('mockDataDocItemAfter:', mockDataDocItemAfter);
};

const modifyNestedArrayWithoutCopy = () => {
    const documentId = '63cabd54d7b4d3fbb01c8d39';
    const doucmentItemId = '63cabd90d7b4d3fbb01c8d74';
    const selectedDocItemBefore = mockData.find((doc) => doc._id === documentId)?.items?.find?.((docItem) => docItem?._id === doucmentItemId);
    customLog('selectedDocItemBefore:', selectedDocItemBefore);

    const mockDataNew = mockData.map((doc) => {
        if (doc._id === documentId) {
            const newDocItems = doc.items.map((docItem) => {
                if (docItem._id === doucmentItemId) {
                    return { ...docItem, name: 'COCA COLA' };
                }
                return docItem;
            })
            return { ...doc, items: newDocItems };
        }
        return doc;
    });
    const selectedDocItemNew = mockDataNew.find((doc) => doc._id === documentId)?.items?.find?.((docItem) => docItem?._id === doucmentItemId);
    customLog('selectedDocItemNew:', selectedDocItemNew);

    const selectedDocItemAfter = mockData.find((doc) => doc._id === documentId)?.items?.find?.((docItem) => docItem?._id === doucmentItemId);
    customLog('selectedDocItemAfter:', selectedDocItemAfter);
};

const modifyNestedObjectDeepCopyUsingStructuredClone = () => {
    const documentId = '63cabd54d7b4d3fbb01c8d39';
    const mockDataStructuredClone = structuredClone(mockData);
    const selectedDocBefore = mockDataStructuredClone.find((doc) => doc._id === documentId)?.seller?.addressCoordinate;
    customLog('selectedDocBefore:', selectedDocBefore);

    const mockDataStructuredCloneNew = mockDataStructuredClone.map((doc) => {
        if (doc._id === documentId) {
            return { ...doc, seller: { ...doc?.seller, addressCoordinate: { ...doc?.seller?.addressCoordinate, accuracy: 90 } } };
        }
        return doc;
    });
    const selectedDocNew = mockDataStructuredCloneNew.find((doc) => doc._id === documentId)?.seller?.addressCoordinate;
    customLog('selectedDocNew:', selectedDocNew);

    const mockDataDocAfter = mockData.find((doc) => doc._id === documentId)?.seller?.addressCoordinate;
    customLog('mockDataDocAfter:', mockDataDocAfter);
};

const modifyNestedObjectShallowCopyUsingSpread = () => {
    const documentId = '63cabd54d7b4d3fbb01c8d39';
    const mockDataSpeadCopy = [...mockData];
    const selectedDocBefore = mockDataSpeadCopy.find((doc) => doc._id === documentId)?.seller?.addressCoordinate;
    customLog('selectedDocBefore:', selectedDocBefore);

    const mockDataSpeadCopyNew = mockDataSpeadCopy.map((doc) => {
        if (doc._id === documentId) {
            return { ...doc, seller: { ...doc?.seller, addressCoordinate: { ...doc?.seller?.addressCoordinate, accuracy: 90 } } };
        }
        return doc;
    });
    const selectedDocNew = mockDataSpeadCopyNew.find((doc) => doc._id === documentId)?.seller?.addressCoordinate;
    customLog('selectedDocNew:', selectedDocNew);

    const mockDataDocAfter = mockData.find((doc) => doc._id === documentId)?.seller?.addressCoordinate;
    customLog('mockDataDocAfter:', mockDataDocAfter);
};

const modifyNestedObjectWithoutCopy = () => {
    const documentId = '63cabd54d7b4d3fbb01c8d39';
    const selectedDocBefore = mockData.find((doc) => doc._id === documentId)?.seller?.addressCoordinate;
    customLog('selectedDocBefore:', selectedDocBefore);

    const mockDataNew = mockData.map((doc) => {
        if (doc._id === documentId) {
            return { ...doc, seller: { ...doc?.seller, addressCoordinate: { ...doc?.seller?.addressCoordinate, accuracy: 90 } } };
        }
        return doc;
    });
    const selectedDocNew = mockDataNew.find((doc) => doc._id === documentId)?.seller?.addressCoordinate;
    customLog('selectedDocNew:', selectedDocNew);

    const selectedDocAfter = mockData.find((doc) => doc._id === documentId)?.seller?.addressCoordinate;
    customLog('selectedDocAfter:', selectedDocAfter);
};

const logDivider = (title) => console.log('\n' + '='.repeat(5) + ' ' + title + ' ' + '='.repeat(5) + '\n\n\n');

logDivider('modifyNestedArrayDeepCopyUsingStructuredClone');
modifyNestedArrayDeepCopyUsingStructuredClone();
logDivider('end of modifyNestedArrayDeepCopyUsingStructuredClone');

logDivider('modifyNestedArrayShallowCopyUsingSpread');
modifyNestedArrayShallowCopyUsingSpread();
logDivider('end of modifyNestedArrayShallowCopyUsingSpread');

logDivider('modifyNestedArrayWithoutCopy');
modifyNestedArrayWithoutCopy();
logDivider('end of modifyNestedArrayWithoutCopy');

logDivider('modifyNestedObjectDeepCopyUsingStructuredClone');
modifyNestedObjectDeepCopyUsingStructuredClone();
logDivider('end of modifyNestedObjectDeepCopyUsingStructuredClone');

logDivider('modifyNestedObjectShallowCopyUsingSpread');
modifyNestedObjectShallowCopyUsingSpread();
logDivider('end of modifyNestedObjectShallowCopyUsingSpread');

logDivider('modifyNestedObjectWithoutCopy');
modifyNestedObjectWithoutCopy();
logDivider('end of modifyNestedObjectWithoutCopy');


// ===== modifyNestedArrayDeepCopyUsingStructuredClone =====



// selectedDocItemBefore:
//  {
//   name: 'Manufacturer ProductName 30',
//   categories: 'some categories',
//   price: 149850,
//   quantity: 1,
//   weight: 1,
//   length: 13,
//   width: 11,
//   height: 11,
//   isFragile: true,
//   _id: '63cabd90d7b4d3fbb01c8d74'
// }



// selectedDocItemNew:
//  {
//   name: 'COCA COLA',
//   categories: 'some categories',
//   price: 149850,
//   quantity: 1,
//   weight: 1,
//   length: 13,
//   width: 11,
//   height: 11,
//   isFragile: true,
//   _id: '63cabd90d7b4d3fbb01c8d74'
// }



// mockDataDocItemAfter:
//  {
//   name: 'Manufacturer ProductName 30',
//   categories: 'some categories',
//   price: 149850,
//   quantity: 1,
//   weight: 1,
//   length: 13,
//   width: 11,
//   height: 11,
//   isFragile: true,
//   _id: '63cabd90d7b4d3fbb01c8d74'
// }




// ===== end of modifyNestedArrayDeepCopyUsingStructuredClone =====




// ===== modifyNestedArrayShallowCopyUsingSpread =====



// selectedDocItemBefore:
//  {
//   name: 'Manufacturer ProductName 30',
//   categories: 'some categories',
//   price: 149850,
//   quantity: 1,
//   weight: 1,
//   length: 13,
//   width: 11,
//   height: 11,
//   isFragile: true,
//   _id: '63cabd90d7b4d3fbb01c8d74'
// }



// selectedDocItemNew:
//  {
//   name: 'COCA COLA',
//   categories: 'some categories',
//   price: 149850,
//   quantity: 1,
//   weight: 1,
//   length: 13,
//   width: 11,
//   height: 11,
//   isFragile: true,
//   _id: '63cabd90d7b4d3fbb01c8d74'
// }



// mockDataDocItemAfter:
//  {
//   name: 'Manufacturer ProductName 30',
//   categories: 'some categories',
//   price: 149850,
//   quantity: 1,
//   weight: 1,
//   length: 13,
//   width: 11,
//   height: 11,
//   isFragile: true,
//   _id: '63cabd90d7b4d3fbb01c8d74'
// }




// ===== end of modifyNestedArrayShallowCopyUsingSpread =====




// ===== modifyNestedArrayWithoutCopy =====



// selectedDocItemBefore:
//  {
//   name: 'Manufacturer ProductName 30',
//   categories: 'some categories',
//   price: 149850,
//   quantity: 1,
//   weight: 1,
//   length: 13,
//   width: 11,
//   height: 11,
//   isFragile: true,
//   _id: '63cabd90d7b4d3fbb01c8d74'
// }



// selectedDocItemNew:
//  {
//   name: 'COCA COLA',
//   categories: 'some categories',
//   price: 149850,
//   quantity: 1,
//   weight: 1,
//   length: 13,
//   width: 11,
//   height: 11,
//   isFragile: true,
//   _id: '63cabd90d7b4d3fbb01c8d74'
// }



// selectedDocItemAfter:
//  {
//   name: 'Manufacturer ProductName 30',
//   categories: 'some categories',
//   price: 149850,
//   quantity: 1,
//   weight: 1,
//   length: 13,
//   width: 11,
//   height: 11,
//   isFragile: true,
//   _id: '63cabd90d7b4d3fbb01c8d74'
// }




// ===== end of modifyNestedArrayWithoutCopy =====




// ===== modifyNestedObjectDeepCopyUsingStructuredClone =====



// selectedDocBefore:
//  { lat: -127.001, lng: 127.001 }



// selectedDocNew:
//  { lat: -127.001, lng: 127.001, accuracy: 90 }



// mockDataDocAfter:
//  { lat: -127.001, lng: 127.001 }




// ===== end of modifyNestedObjectDeepCopyUsingStructuredClone =====




// ===== modifyNestedObjectShallowCopyUsingSpread =====



// selectedDocBefore:
//  { lat: -127.001, lng: 127.001 }



// selectedDocNew:
//  { lat: -127.001, lng: 127.001, accuracy: 90 }



// mockDataDocAfter:
//  { lat: -127.001, lng: 127.001 }




// ===== end of modifyNestedObjectShallowCopyUsingSpread =====




// ===== modifyNestedObjectWithoutCopy =====



// selectedDocBefore:
//  { lat: -127.001, lng: 127.001 }



// selectedDocNew:
//  { lat: -127.001, lng: 127.001, accuracy: 90 }



// selectedDocAfter:
//  { lat: -127.001, lng: 127.001 }




// ===== end of modifyNestedObjectWithoutCopy =====
