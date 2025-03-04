export default function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.checked}
        onChange={() => {
          onToggleItem(item.id);
        }}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quqntitly} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
