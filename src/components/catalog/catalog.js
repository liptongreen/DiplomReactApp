import React, { Component } from "react";
import CoffeeService from "../../services/coffeeservice";
import { Link } from "react-router-dom";
import "./catalog.css";

class Catalog extends Component {
  state = {
    items: [],
    id: null,
    active: false,
    filter: "all",
    search: "",
    result: "",
  };
  coffeeService = new CoffeeService();
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
    this.coffeeService.getAllCoffee().then((data) => {
      this.setState({ items: data });
    });
  }

  render() {
    const selectedItem = (id) => {
      this.setState({ id: id });
    };
    const activeState = (e) => {
      const a = e.target;
      this.setState({ filter: `${a.innerText}` });

      if (this.state.active) {
        if (this.state.filter === a.innerText) {
          this.setState({ active: false });
          a.classList.toggle("active");
        } else {
          const act = document.querySelector(".active");
          act.classList.remove("active");
          a.classList.toggle("active");
        }
      } else {
        this.setState({ active: true });
        a.classList.toggle("active");
      }
    };

    const search = (e) => {
      const name = e.target.value.toLowerCase();
      this.setState({ search: name });
    };

    const { items } = this.state;

    return (
      <section className="catalog">
        <hr className="line" />
        <div className="flex">
          <div className="formbox">
            <p className="text1 b">Looking for</p>
            <form>
              <input
                type="text"
                placeholder="start typing here..."
                className="input"
                onChange={(e) => {
                  search(e);
                }}
              />
            </form>
          </div>
          <div className="formbox">
            <p className="text1 a">Or filter</p>
            <p
              className="btn"
              onClick={(e) => {
                activeState(e);
              }}
            >
              Brazil
            </p>
            <p
              className="btn"
              onClick={(e) => {
                activeState(e);
              }}
            >
              Kenya
            </p>
            <p
              className="btn"
              onClick={(e) => {
                activeState(e);
              }}
            >
              Columbia
            </p>
          </div>
        </div>
        <div className="center">
          <div className="itembox" id="itembox">
            <div className="searchN">
              Sorry, but we don't found your request
            </div>
            {items.map((item) => {
              if (item.name.toLowerCase().includes(`${this.state.search}`)) {
                if (this.state.active) {
                  if (this.state.filter === item.country) {
                    return (
                      <Link to={`/coffee/${item.id}`}>
                        <div
                          className="item"
                          onClick={() => {
                            selectedItem(item.id);
                          }}
                        >
                          <div className="bottom">
                            <img
                              alt={item.name}
                              className="img"
                              src={item.url}
                            />
                            <p className="text2">{item.name}</p>
                            <p className="text3">{item.country}</p>
                            <p className="price">{item.price}</p>
                          </div>
                        </div>
                      </Link>
                    );
                  }
                } else {
                  return (
                    <Link to={`/coffee/${item.id}`}>
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
                    </Link>
                  );
                }
              }
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Catalog;
