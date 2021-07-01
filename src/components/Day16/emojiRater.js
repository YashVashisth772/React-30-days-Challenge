import React from "react";

export default function App() {
  const [list, setList] = React.useState([
    {
      id: 1,
      emoji: "😁"
    },
    {
      id: 2,
      emoji: "😘"
    },
    {
      id: 3,
      emoji: "🤪"
    },
    {
      id: 4,
      emoji: "🤗"
    }
  ]);
  const deleteEmoji = (id) => {
    console.log("y", id);
    const newList = list.filter((list) => {
      return list.id !== id;
    });
    setList(newList);
    console.log(newList);
  };
  const displayEmojies = list.map((lst, i) => {
    return (
      <div>
        <li key={lst.id}>{lst.emoji}</li>
        <select>
          <option value="bad">Bad</option>
          <option value="good">Good</option>
          <option value="Very good">Very Good</option>
        </select>
        <button onClick={() => deleteEmoji(lst.id)}>Delete</button>
      </div>
    );
  });
  return <div>{displayEmojies}</div>;
}


