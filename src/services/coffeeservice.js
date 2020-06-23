export default class CoffeeService {
  _apiBase = "http://localhost:3001";

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  };

  getAllBestsellers = async () => {
    const res = await this.getResource(`/bestsellers/`);
    const result = res.map(this._transformBestsellers);
    return result;
  };

  getBestsellers = async () => {
    const person = await this.getResource(`/bestsellers/`);
    return this._transformPerson(person);
  };

  getAllCoffee = async () => {
    const res = await this.getResource(`/coffee/`);
    const results = res.map(this._transformCoffee);
    return results;
  };

  getCoffee = async () => {
    const coffee = await this.getResource(`/coffee/`);
    return this._transformCoffee(coffee);
  };

  getAllPleasure = async () => {
    const res = await this.getResource(`/goods/`);
    const results = res.map(this._transformBestsellers);
    return results;
  };

  getStarship = async (id) => {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  };

  getPersonImage = ({ id }) => {
    return `${this._imageBase}/characters/${id}.jpg`;
  };

  getStarshipImage = ({ id }) => {
    return `${this._imageBase}/starships/${id}.jpg`;
  };

  getPlanetImage = ({ id }) => {
    return `${this._imageBase}/planets/${id}.jpg`;
  };

  _extractId = (item) => {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  };

  _transformCoffee = (coffee, index) => {
    return {
      id: index + 1,
      country: coffee.country,
      name: coffee.name,
      url: coffee.url,
      price: coffee.price,
      description: coffee.description,
    };
  };

  _transformStarship = (starship) => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.cost_in_credits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargo_capacity,
    };
  };

  _transformBestsellers = (person, index) => {
    return {
      id: index + 1,
      name: person.name,
      url: person.url,
      price: person.price,
    };
  };
}
