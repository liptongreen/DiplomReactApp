import React from "react";
import CoffeeService from "../../services/coffeeservice";
import { Link } from "react-router-dom";
import "./best.css";

class Best extends React.Component {
  state = {
    items: [],
    id: null,
  };
  coffeeService = new CoffeeService();

  componentDidMount() {
    this.coffeeService.getAllBestsellers().then((data) => {
      this.setState({ items: data });
    });
  }
  componentDidUpdate() {}

  render() {
    const selectedItem = (id) => {
      this.setState({ id: id });
    };
    const { items } = this.state;
    return (
      <section className="best">
        <div className="center">
          <p className="text1">Our best</p>
          <div className="itembox">
            {items.map((item) => {
              return (
                <Link to={`/coffee/${item.name}`}>
                  <div
                    className="item"
                    onClick={() => {
                      selectedItem(item.id);
                      console.log(this.state);
                    }}
                  >
                    <img alt={item.name} className="img" src={item.url} />
                    <p className="text2">{item.name}</p>
                    <p className="price">{item.price}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Best;
