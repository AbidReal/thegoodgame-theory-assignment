import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

function App() {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetching the data
  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await fetch("https://api.punkapi.com/v2/beers");
        if (response.ok) {
          const data = await response.json();
          setBeers(data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchBeers();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBeers = beers.filter(({ name }) =>
    name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="custom-container">
        <div className="flex justify-center mx-auto mb-10">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full max-w-xs"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button className="btn btn-primary">
            <FaSearch />
          </button>
        </div>

        <div className="flex flex-col gap-20">
          {filteredBeers.map(
            ({
              id,
              name,
              tagline,
              image_url,
              abv,
              ibu,
              description,
              first_brewed,
              ingredients,
              food_pairing,
              brewers_tips,
            }) => (
              <div className="card lg:card-side bg-base-100 shadow-xl" key={id}>
                <figure>
                  <img src={image_url} alt={name} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{name}</h2>
                  <p>{tagline}</p>
                  <p>
                    ABV: {abv}% | IBU: {ibu}
                  </p>
                  <p>First Brewed: {first_brewed}</p>
                  <p>Description: {description}</p>
                  <p>Brewers Tips: {brewers_tips}</p>
                  <p>Food Pairing:</p>
                  <ul>
                    {food_pairing.map((pairing, index) => (
                      <li key={index}>{pairing}</li>
                    ))}
                  </ul>
                  <p>Ingredients:</p>
                  <ul>
                    {ingredients.malt.map((malt, index) => (
                      <li key={index}>
                        {malt.amount.value} {malt.amount.unit} of {malt.name}
                      </li>
                    ))}
                    {ingredients.hops.map((hop, index) => (
                      <li key={index}>
                        {hop.amount.value} {hop.amount.unit} of {hop.name} (
                        {hop.add} - {hop.attribute})
                      </li>
                    ))}
                    <li>Yeast: {ingredients.yeast}</li>
                  </ul>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default App;
