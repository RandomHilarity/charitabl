import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button"

const useStyles = makeStyles(theme => ({
  details: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 5,
    width: "100%",
  },
  media: {
    width: 100,
    height: 100,
    marginTop: 20
  },
  form: {
    width: "100%",
    margin: theme.spacing(1)
  },
  formField: {
    padding: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
 
class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: "No result"
    };
    console.log(props, "props in Scanner")
    this.handleScan = this.handleScan.bind(this);
  }
  getSpecificCharity(data) {
   let allCharities = this.props.charities
   let resultArr = allCharities.filter(array => {
      return array.name === data
    })
    return resultArr[0];
  }

  handleScan(data) {
    if (data) {
      console.log(data, "data")
      console.log(this.getSpecificCharity(data), "getSpecific")
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
      <div>
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
          onClick={this.props.onSelectCharity}>
        Go
        </Button>

      </div>
    );
  }
}

export default Scanner;