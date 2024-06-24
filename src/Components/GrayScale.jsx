/* eslint-disable react/prop-types */

export const GrayScale = ({ socket,  setSocket}) => {

   const handleValues = (e) => {
    const { name, value } = e.target;
    setSocket((socket) => ({
      ...socket,
      [name]: value,
    }));
  };

  return (
    <form className="option-panel">
      <label htmlFor="alpha">Alpha:</label>
      <input
        type="number"
        name="alpha"
        id="alpha"
        min="0"
        max="5"
        value={socket.alpha}
        step="0.1"
        onChange={handleValues}
      />
      <label htmlFor="beta">Beta:</label>
      <input
        type="number"
        name="beta"
        id="beta"
        min="0"
        max="255"
        value={socket.beta}
        step="10"
        onChange={handleValues}
      />
   
    </form>
  );
};
