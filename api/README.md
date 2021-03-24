# VirtualTOUCH Payments

A sample Node project for Payment Integration with Stripe

## Getting Started

Install node_modules.

```bash
npm install
```

## Usage

Using card information, begin by creating a payment method via http POST to `/create-payment-method` which will return a `"payment_method_id": "pm_1HzVFlJxNvyfU7tynMXslYu4"`

```javascript 
// Example payload
{
  "type": "card",
  "card": {
      "number": "4242424242424242",
      "exp_month": 12,
      "exp_year": 2021,
      "cvc": "314",
  }
}
```
Once a you have a `payment_method_id` you can then do a POST to the `/pay` endpoint using the payment method id and the amount of the transaction.

```javascript
// Example payload
{
    "payment_method_id": "pm_1HzVFlJxNvyfU7tynMXslYu4",
    "amount": 100
}
```

