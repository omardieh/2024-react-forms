import { useState } from "react";

function AddMovie({ addNewMovie }) {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [IMDBRating, setIMDBRating] = useState(5);
  const [hasOscars, setHasOscars] = useState(true);

  const handleInput = (e, setState, isCheckbox) => {
    setState(isCheckbox ? e.target.checked : e.target.value);
  };

  const resetFormInputs = () => {
    setTitle("");
    setDirector("");
    setIMDBRating(5);
    setHasOscars(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewMovie({ title, director, IMDBRating, hasOscars });
    resetFormInputs();
  };

  console.log(title, director, IMDBRating, hasOscars);
  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => handleInput(e, setTitle)}
        />

        <label>Director: </label>
        <input
          type="text"
          name="director"
          value={director}
          onChange={(e) => handleInput(e, setDirector)}
        />

        <label>IMDB Rating: </label>
        <input
          type="number"
          name="IMDBRating"
          value={IMDBRating}
          onChange={(e) => handleInput(e, setIMDBRating)}
        />

        <label>Won Oscars: </label>
        <input
          type="checkbox"
          name="hasOscars"
          checked={hasOscars}
          onChange={(e) => handleInput(e, setHasOscars, true)}
        />

        <button type="submit">Add a Movie</button>
      </form>
      {/* form will be added here */}
    </div>
  );
}

export default AddMovie;
