import React from "react";
import tach from "/public//tach.webp";
import Image from "next/image";
import { Roboto } from "next/font/google";

const roboto = Roboto({subsets:['latin'],weight:'300'})

function CopaDePolicies() {
  return (
    <div className={`flex flex-col justify-center items-center `}>
      <Image src={tach} alt="Tach" />
      <div className={`${roboto.className} text-start mt-20 lg:px-56 md:mx-20 mx-0`}>
        <h1 className="underline">PAYMENT, SHIPPING & RETURNS</h1>
        <p>All prices are in USD. We use Paypal as payment method.</p>
        <h1 className="underline mt-10">SHIPPING & DELIVERY DATE</h1>
        <p>
          Shipping Cost is 15 USD worldwide. Flat rate. All orders are shipped
          worldwide via DHL, FedEX or any other international courier. Custom
          fees are charged to the customer.
        </p>
        <h1 className="underline mt-10">DELIVERY TIME</h1>
        <p>
          Tach Clothing works with low stock and most of the items are made to
          order. We can ship your order between two days and two weeks,
          depending on the item. The maximal delay of the dispatch is 2 weeks
          from the day of the order.
        </p>
        <p>
          On the description of each item you will find information about stock
          availability or made to order time frames.
        </p>
        <h1 className="underline mt-10">RETURNS</h1>
        <p>
          The procedure for returning an item purchased at our online store is
          as follows:
        </p>
        <p>(We do not accept refunds on Sale items)</p>
        <p className="mt-10">1. Send an email request to customer@tachclothing.com</p>
        <p>
          No later than 5 days from the date you received the product, letting
          us know the reason for the return if you think it will help us
          continue to improve. You can also contact us via phone +598 27114279
        </p>
        <p className="mt-10">2. The items should be packaged:</p>
        <p>
          In original condition, together with any and all accessories included
          in the original package, and may not be used, cleaned or damaged in
          any way.
        </p>
        <p className="mt-10">
          Important: Until the time we receive an item in our returning address,
          it remains to the customer’s responsibility. We recommend that you
          send any item by courier or certified mail and retain proof of
          shipment.
        </p>
        <p className="mt-10 italic">- Do I have to pay anything for a return?</p>
        <p>
          To return any item purchased at Tach Clothing simply contact us and we
          will provide you with a Fedex returning label. Cost of the label will
          be deducted from the refund amount. USA 30$ - Canada/Europe 40$ - ROW
          (Rest of the world 50$) *Prices for 1 item, every additional item will
          add 10$. Return shipping costs are the responsibility of the customer.
        </p>
        <p className="mt-10 italic">- How will I receive my refund?</p>
        <p>
          Once a return is approved the value of the purchase will be refunded
          by the same method you made the original payment.
        </p>
        <p className="mt-10 italic">- When will I receive my refund?</p>
        <p>
          Once we have confirmed that the returned article(s) are in perfect
          condition with all original packaging and labels, you will receive
          email confirmation notifying you of the amount that will be credited
          to your account.
        </p>
        <p className="mt-10">
          In the event that Tach Clothing has mistakenly sent an item different
          to the item requested or that the quality of a product received is not
          acceptable, please contact us at orders@tachclothing.com to arrange
          for a return and/or exchange. In such cases Tach Clothing shall bear
          the costs of both shipping and return.
        </p>
        <p className="mt-10">
          For special offers, where shipping is offered free of charge, the
          customer shall bear the cost of return shipping should this be
          necessary.
        </p>
      </div>
    </div>
  );
}

export default CopaDePolicies;
