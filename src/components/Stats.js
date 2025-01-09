export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>start to add somthing in your memo!</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "All set!"
          : `You have ${numItems} items on your list, and you already packed
            ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
