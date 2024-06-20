import PropTypes from 'prop-types';

function List(props) {
  const category = props.category;
  const itemList = props.items;

  itemList.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
  //   fruits.sort((a,b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
  //   fruits.sort((a,b) => a.calories - b.calories); // NUMERIC
  //   fruits.sort((a,b) => b.calories - a.calories); // REVERSE NUMERIC

  // const lowCalFruit = fruits.filter(fruit => fruit.calories < 100);
  // const highCalFruit = fruits.filter(fruit => fruit.calories >= 100);

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      <b>{item.name}</b>: &nbsp;{item.calories}
    </li>
  ));

  return (
    <>
      <h3>{category}</h3>
      <ol>{listItems}</ol>
    </>
  );
}

List.defaultProps = {
  category: "List",
  items: [],
};

List.propTypes = {
  category: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default List;
