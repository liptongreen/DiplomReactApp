import React from "react";
import CoffeeService from "../../services/coffeeservice";
import { withRouter } from "react-router-dom";
import logo from "../../picturesD/beans_logo-bl.svg";
import "./cart.css";

class Cart extends React.Component {
  state = {
    id: null,
    items: [],
  };
  coffeeService = new CoffeeService();
  componentDidMount() {
    this.coffeeService.getAllCoffee().then((data) => {
      this.setState({ items: data });
    });
  }

  render() {
    const { match } = this.props;
    const { id } = match.params;

    return this.state.items.map((item) => {
      if (item.id == id || item.name == id) {
        return (
          <>
            <section className="ourCoffee">
              <p className="text1">Our Coffee</p>
            </section>
            <section className="cart">
              <div className="centerflex">
                <img alt="cartImg" className="img" src={item.url} />
                <div className="text">
                  <p className="text1">About {item.name}</p>
                  <img alt="logo" src={logo} />
                  <p className="text2">
                    <b>Country:</b> {item.country}
                  </p>
                  <p className="text2a">a</p>
                  <p className="text2">
                    <b>Description:</b> {item.description}
                  </p>
                  <p className="text2a">a</p>
                  <p className="text2">
                    <b>Price:</b> <span className="price">{item.price}</span>
                  </p>
                </div>
              </div>
            </section>
          </>
        );
      }
    });
    {
      /* <section Name="catalog">
          <div Name="center">
            <div Name="itembox">
              {items.map((item) => {
                if (this.state.active) {
                  if (this.state.filter === item.country) {
                    return (
                      <div
                        Name="item"
                        onClick={() => {
                          selectedItem(item.id);
                        }}
                      >
                        <div Name="bottom">
                          <img alt={item.name} Name="img" src={item.url} />
                          <p Name="text2">{item.name}</p>
                          <p Name="text3">{item.country}</p>
                          <p Name="price">{item.price}</p>
                        </div>
                      </div>
                    );
                  }
                } else {
                  return (
                    <div
                      Name="item"
                      onClick={() => {
                        selectedItem(item.id);
                        console.log(this.state);
                      }}
                    >
                      <div Name="bottom">
                        <img alt={item.name} Name="img" src={item.url} />
                        <p Name="text2">{item.name}</p>
                        <p Name="text3">{item.country}</p>
                        <p Name="price">{item.price}</p>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </section> */
    }
  }
}

export default withRouter(Cart);
