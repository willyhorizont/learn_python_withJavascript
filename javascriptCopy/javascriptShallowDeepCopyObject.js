const customLog = (msg, dt) => console.log(msg + '\n', dt, '\n\n\n');

const mockData = {
    home: {
        pathname: '/',
        searchParams: {
            category: 'HoeCay',
            search: 'HoeSch'
        },
        userId: {
            pathname: 'userId',
            searchParams: {
                category: 'MetDiyPrtCay',
                search: 'MetDiyPrtSch',
                productId: 'PrtId'
            },
            productId: {
                pathname: 'productId'
            }
        }
    },
    register: {
        pathname: 'register'
    },
    login: {
        pathname: 'login'
    },
    unauthorized: {
        pathname: 'unauthorized'
    },
    emailAndPhoneVerification: {
        pathname: 'email-and-phone-verification'
    },
    address: {
        pathname: 'address',
        searchParams: {
            addressIndex: 'AdsInx',
            addressInsert: 'AdsInt',
            addressUpdate: 'AdsUpe'
        }
    },
    profil: {
        pathname: 'profil'
    },
    cart: {
        pathname: 'cart'
    },
    checkoutCart: {
        pathname: 'checkout-cart'
    },
    purchases: {
        pathname: 'purchases',
        searchParams: {
            status: 'Sts',
            date: 'Dae'
        },
        transactionId: {
            pathname: 'transactionId'
        }
    },
    sales: {
        pathname: 'sales',
        searchParams: {
            status: 'Sts',
            date: 'Dae'
        },
        transactionId: {
            pathname: 'transactionId',
        }
    },
    chat: {
        pathname: 'chat',
        searchParams: {
            chatPartnerId: 'ChtParId',
        }
    }
};

const shallowCopyUsingSpread = () => {
    // shallow copy object of objects
    const mockDataSpreadCopy = { ...mockData };
    customLog('mockData.home?.searchParams before:', mockData.home?.searchParams);

    customLog('mockDataSpreadCopy.home?.searchParams before:', mockDataSpreadCopy.home?.searchParams);
    mockDataSpreadCopy.home.searchParams = { category: 'ASD', search: 'QWE' };
    
    customLog('mockDataSpreadCopy.home?.searchParams after:', mockDataSpreadCopy.home?.searchParams);

    customLog('mockData.home?.searchParams after:', mockData.home?.searchParams);
};

const deepCopyUsingStructuredClone = () => {
    // deep copy object of objects
    const mockDataStructuredClone = structuredClone(mockData);
    customLog('mockData.home?.searchParams before:', mockData.home?.searchParams);

    customLog('mockDataStructuredClone.home?.searchParams before:', mockDataStructuredClone.home?.searchParams);
    mockDataStructuredClone.home.searchParams = { category: 'ASD', search: 'QWE' };
    
    customLog('mockDataStructuredClone.home?.searchParams after:', mockDataStructuredClone.home?.searchParams);
    customLog('mockData.home?.searchParams after:', mockData.home?.searchParams);
};

const logDivider = (title) => console.log('\n' + '='.repeat(5) + ' ' + title + ' ' + '='.repeat(5) + '\n\n\n');

logDivider('deepCopyUsingStructuredClone');
deepCopyUsingStructuredClone();
logDivider('end of deepCopyUsingStructuredClone');

logDivider('shallowCopyUsingSpread');
shallowCopyUsingSpread();
logDivider('end of shallowCopyUsingSpread');


// ===== deepCopyUsingStructuredClone =====



// mockData.home?.searchParams before:
//  { category: 'HoeCay', search: 'HoeSch' }



// mockDataStructuredClone.home?.searchParams before:
//  { category: 'HoeCay', search: 'HoeSch' }



// mockDataStructuredClone.home?.searchParams after:
//  { category: 'ASD', search: 'QWE' }



// mockData.home?.searchParams after:
//  { category: 'HoeCay', search: 'HoeSch' }




// ===== end of deepCopyUsingStructuredClone =====




// ===== shallowCopyUsingSpread =====



// mockData.home?.searchParams before:
//  { category: 'HoeCay', search: 'HoeSch' }



// mockDataSpreadCopy.home?.searchParams before:
//  { category: 'HoeCay', search: 'HoeSch' }



// mockDataSpreadCopy.home?.searchParams after:
//  { category: 'ASD', search: 'QWE' }



// mockData.home?.searchParams after:
//  { category: 'ASD', search: 'QWE' }




// ===== end of shallowCopyUsingSpread =====
