import React from "react";
import CoffeeService from "../../services/coffeeservice";

import "./goods.css";

class Goods extends React.Component {
  state = {
    items: [],
    id: null,
    active: false,
    filter: "all",
    search: null,
  };
  coffeeService = new CoffeeService();

  componentDidMount() {
    this.coffeeService.getAllPleasure().then((data) => {
      this.setState({ items: data });
    });
  }

  render() {
    const selectedItem = (id) => {
      this.setState({ id: id });
    };

    const { items } = this.state;
    return (
      <section className="catalog">
        <div className="center">
          <div className="itembox">
            {items.map((item) => {
              if (this.state.active) {
                if (this.state.filter === item.country) {
                  return (
                    <div
                      className="item"
                      onClick={() => {
                        selectedItem(item.id);
                      }}
                    >
                      <div className="bottom">
                        <img alt={item.name} className="img" src={item.url} />
                        <p className="text2">{item.name}</p>
                        <p className="text3">{item.country}</p>
                        <p className="price">{item.price}</p>
                      </div>
                    </div>
                  );
                }
              } else {
                return (
                  <div
                    className="item"
                    onClick={() => {
                      selectedItem(item.id);
                      console.log(this.state);
                    }}
                  >
                    <div className="bottom">
                      <img alt={item.name} className="img" src={item.url} />
                      <p className="text2">{item.name}</p>
                      <p className="text3">{item.country}</p>
                      <p className="price">{item.price}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Goods;
