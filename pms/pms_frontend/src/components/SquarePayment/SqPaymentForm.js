import React from "react";
import { PaymentForm, CreditCard } from "react-square-web-payments-sdk"

function SqPaymentForm(){
    return(
        <>
            <PaymentForm 
                applicationId = "sandbox-sq0idb-cHWqYFNggCUSNXy4Y5PmBQ"
                locationId = "LZDSNZ1W96P8V"
                cardTokenizeResponseReceived={async (token,buyer) => {
                    alert(JSON.stringify(token, null, 2))
                }}
            >
                <CreditCard />
            </PaymentForm>
        </>

    )
}

export default SqPaymentForm;
