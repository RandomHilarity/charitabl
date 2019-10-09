import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
  StripeProvider,
  Elements
} from "react-stripe-elements";

const createOptions = () => {
  return {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        letterSpacing: "0.025em",
        "::placeholder": {
          color: "#aab7c4"
        }
      },
      invalid: {
        color: "#c23d4b"
      }
    }
  };
};

class _SplitFieldsForm extends Component {
  state = {
    errorMessage: ""
  };

  handleChange = ({ error }) => {
    if (error) {
      this.setState({ errorMessage: error.message });
    }
  };

  addDonationParams = function(obj) {
    obj["amount"] = this.props.amount * 100;
    obj["charity"] = this.props.charity;
    obj["user_id"] = this.props.user.id;
    return obj;
  };

  // creates Stripe token, adds Charity and Amount params and sends to db
  // Depending on response, redirects to Thank or Failed
  handleSubmit = evt => {
    evt.preventDefault();
    if (this.props.stripe) {
      this.props.stripe
        .createToken()
        .then(obj => this.addDonationParams(obj))
        .then(this.props.handleResult)
        .then(result => {
          if (result === "Succeeded") {
            return this.props.toThankPage();
          } else {
            return this.props.toErrorPage();
          }
        });
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="split-form">
          <label>
            Card number
            <CardNumberElement
              {...createOptions()}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Expiration date
            <CardExpiryElement
              {...createOptions()}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div className="split-form">
          <label>
            CVC
            <CardCVCElement {...createOptions()} onChange={this.handleChange} />
          </label>
          <label>
            Postal code
            <input
              name="name"
              type="text"
              placeholder="Postal"
              className="StripeElement"
              required
            />
          </label>
        </div>
        <div className="error" role="alert">
          {this.state.errorMessage}
        </div>
        <Button type="submit" fullWidth variant="contained" color="primary">
          Donate
        </Button>
      </form>
    );
  }
}

const SplitFieldsForm = injectStripe(_SplitFieldsForm);

export default class SplitFieldsDemo extends Component {
  render() {
    return (
      <StripeProvider apiKey={"pk_test_wTtHNas8vXXSuUiab1R6wzTb00XhySO3H7"}>
        <Elements border={1} borderColor="primary" borderRadius={10}>
          <SplitFieldsForm
            handleResult={this.props.handleResult}
            {...this.props}
          />
        </Elements>
      </StripeProvider>
    );
  }
}
