import { useState } from 'react';
import PropTypes from 'prop-types';

function List(props) {
  // CSS for category header
  const cssCategory = {
    fontSize: "2.5em",
    fontWeight: "bold",
    color: "hsl(0, 0%, 20%)",
    marginBottom: "10px",
    textAlign: "center",
    border: "3px solid",
    borderRadius: "5px",
    backgroundColor: "hsl(0, 0%, 90%)",
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const cssItems = {
    fontSize: "1.5em",
    listStyle: "none",
    color: "hsl(0, 0%, 25%)",
    textAlign: "center",
    margin: "0",
    cursor: "pointer"
  };

  const cssItemHover = {
    color: "hsl(0, 0%, 45%)",
  };

  const category = props.category;
  const itemList = props.items;

  itemList.sort((a, b) => a.name.localeCompare(b.name));

  const listItems = itemList.map((item, index) => (
    <li
      key={item.id}
      style={index === hoveredIndex ? { ...cssItems, ...cssItemHover } : cssItems}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <b>{item.name}</b>: &nbsp;{item.calories}
    </li>
  ));

  return (
    <>
      <h3 style={cssCategory}>{category}</h3>
      <ol>{listItems}</ol>
    </>
  );
}

List.defaultProps = {
  category: "List",
  items: null,
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
