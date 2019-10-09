import React, { Component } from "react";
import QrReader from "react-qr-reader";
import Button from "@material-ui/core/Button";
import "./styles/scan.css";
class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: "Waiting for Scan"
    };
    this.handleScan = this.handleScan.bind(this);
  }

  getSpecificCharity(data) {
    let allCharities = this.props.charities;
    let resultArr = allCharities.filter(array => {
      return array.name === data;
    });
    return resultArr[0];
  }

  handleScan(data) {
    if (data) {
      this.props.setCharity(this.getSpecificCharity(data));
      this.setState({
        result: data
      });
    }
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    return (
      <div className="scanner">
        <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{
            width: "100%"
          }}
        />
        <p>{this.state.result}</p>
        <Button 
          className="button" 
          onClick={this.props.onSelectCharity}
          width="50%"
          variant="contained"
          color="primary"
        >
          Go
        </Button>
      </div>
    );
  }
}

export default Scanner;
