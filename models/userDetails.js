'use strict';

module.exports = function() {
    return {
        details: {
            name: "Nanda Kishore",
            fullNAme: "Nanda Kishore",
            address: "Address line 1,Address line 2, Address line 3, Address line 14"

        },
        paymentMethods: [
            {
                cardName: "MasterCard",
                cardType: "credit",
                cardNumber: "****1234",
                display: false
            },
            {
                cardName: "Visa",
                cardType: "debit",
                cardNumber: "****4567",
                display: false
            },
            {
                cardName: "Paypal",
                cardType: "credit",
                cardNumber: "****8734",
                display: false
            }
        ]
    };
};
