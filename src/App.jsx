import "./App.css";

let nextId = 3;

function App() {
  return (
    <>
      <h1>Packing List Practice</h1>
      <hr />
      <AddItem />
      <hr />
      <PackingList />
    </>
  );
}

export default App;

function AddItem() {
  return (
    <>
      <form>
        <input />
        <button>Submit</button>
      </form>
    </>
  );
}

function PackingList() {
  return <ItemComponent />;
}

function ItemComponent() {
  return (
    <p>
      <input type="checkbox" />
      <>{"Toothbrush"}</>
      <button>Delete</button>
    </p>
  );
}
