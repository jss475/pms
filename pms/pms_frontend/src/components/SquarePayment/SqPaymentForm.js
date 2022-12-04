import React from "react";
import { PaymentForm, CreditCard } from "react-square-web-payments-sdk"
// Ach, Afterpay, AfterpayButton, AfterpayContext, AfterpayMessage, AfterpayProvider, 
//AfterpayWidget, ApplePay, CashAppPay, CreditCard, Divider, 
//GiftCard, GooglePay, PaymentForm, PlaidLinkStableEvent

//to test credit card use the following 4111 1111 1111 1111 12/22 123 94103
function SqPaymentForm(){
    return(
        <>
            <PaymentForm 
                applicationId = "sandbox-sq0idb-cHWqYFNggCUSNXy4Y5PmBQ"
                locationId = "LZDSNZ1W96P8V"
                amount = "100.00"
                cardTokenizeResponseReceived={async (token,buyer) => {
                    alert(JSON.stringify(token, null, 2))
                }}
            >
                
                <div id="card-container"></div>
                <button id="card-button" type="button">Pay $1.00</button>
            </PaymentForm>

        </>

    )
}

export default SqPaymentForm;
