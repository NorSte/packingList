import { initialList } from "./data/data";
import "./App.css";
import { useState } from "react";

let nextId = 3;

function App() {
  const [packingList, setPackingList] = useState(Object.values(initialList));

  function handleSubmit(e, text) {
    e.preventDefault();

    setPackingList((prev) => [
      ...prev,
      { id: nextId++, text: text, done: false },
    ]);
  }

  function handleDelete(id) {
    console.log(id);

    setPackingList(packingList.filter((item) => item.id !== id));
  }

  function handleCheck(packed, id) {
    setPackingList(
      packingList.map((item) => {
        if (item.id === id) {
          return { ...item, done: packed };
        } else {
          return item;
        }
      }),
    );
  }

  return (
    <>
      <h1>Packing List Practice</h1>
      <hr />
      <AddItem onSubmit={handleSubmit} />
      <hr />
      <PackingList
        packingList={packingList}
        onDelete={handleDelete}
        onCheck={handleCheck}
      />
    </>
  );
}

export default App;

function AddItem({ onSubmit }) {
  const [text, setText] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          onSubmit(e, text);
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

function PackingList({ packingList, onDelete, onCheck }) {
  return (
    <>
      {packingList.map((item) => (
        <ItemComponent
          key={item.id}
          item={item}
          onDelete={onDelete}
          onCheck={onCheck}
        />
      ))}
    </>
  );
}

function ItemComponent({ item, onDelete, onCheck }) {
  const [packed, setPacked] = useState(item.done);

  return (
    <p>
      <input
        type="checkbox"
        checked={packed}
        onChange={(e) => {
          onCheck(packed, item.id);
          setPacked(e.target.checked);
        }}
      />
      <>{item.text}</>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </p>
  );
}
