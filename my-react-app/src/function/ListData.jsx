import List from "./List.jsx";

function ListData() {
    const fruits = [
        { id: 1, name: "apple", calories: 95 },
        { id: 2, name: "banana", calories: 45 },
        { id: 3, name: "watermelon", calories: 105 },
        { id: 4, name: "kiwi", calories: 159 },
        { id: 5, name: "strawberry", calories: 37 },
      ];
    
      const vegetables = [
        { id: 1, name: "carrot", calories: 41 },
        { id: 2, name: "broccoli", calories: 55 },
        { id: 3, name: "potato", calories: 77 },
        { id: 4, name: "spinach", calories: 23 },
        { id: 5, name: "cabbage", calories: 22 },
      ];

    return(
        <>  
          <List category="Fruits" items={fruits}></List>
          <List category="Vegetables" items={vegetables}></List>
        </>
    );
    
}

export default ListData;