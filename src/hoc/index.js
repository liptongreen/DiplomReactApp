import React, { Component } from "react";
import CoffeeService from "../services/coffeeservice";

const withData = (View) => {
  return class extends Component {
    coffeeService = new CoffeeService();
    state = {
      items: [],
      id: null,
      active: false,
      filter: "all",
      search: "",
      result: "",
    };
    componentDidUpdate() {
      let itemResults = document.getElementsByClassName("item").length;
      const searchN = document.querySelector(".searchN");
      if (itemResults < 1) {
        searchN.style.display = "block";
      } else {
        searchN.style.display = "none";
      }
    }
    componentDidMount() {
      this.coffeeService.getAllCoffee().then(this.onDataLoaded);
    }

    onDataLoaded = (data) => {
      this.setState({
        items: data,
      });
    };

    render() {
      const { items } = this.state;

      return <View {...this.props} items={items} />;
    }
  };
};

export default withData;
