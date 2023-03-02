import { useState } from "react";


export default function PokemonList({ pokemon, img }) {
  const [query, setQuery] = useState("");

    return (
      <div>
            <input placeholder="input search text" value={query} style={{ width: 200 }} onChange={(e) => {setQuery(e.target.value)}} />
        {pokemon.filter((name) => {
          if (query === "") {
            return name;
          } else if (name.toLowerCase().includes(query.toLocaleLowerCase())) {
            return name
          }
}).map((name) => (
    <div key={name}>{name}</div>
))}
      </div>
    );
}
