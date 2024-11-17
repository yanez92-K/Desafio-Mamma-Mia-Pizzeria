const IngredientList = ({ ingredients }) => {
  return (
    <>
      <ul className="mb-1 list-inline text-capitalize w-50 mx-auto">
        {ingredients?.map((ingredient, i) => (
          <li key={ingredient} className="list-inline-item">
            {i > 0 && <span className="me-3 text-body-tertiary">/</span>}
            {ingredient}
          </li>
        ))}
      </ul>
    </>
  );
};

export default IngredientList;
