
const IngredientList = ({ ingredients }) => {
  return (
    <>
      <ul className="list-inline text-capitalize mb-1 w-50 mx-auto">
        {ingredients?.map((ingredient, i) => (
          <li key={ingredient} className="list-inline-item">
            {i > 0 && <span className=" me-3 text-body-tertiary">/</span>}
            {ingredient}
          </li>
        ))}
      </ul>
    </>
  );
};

export default IngredientList;

