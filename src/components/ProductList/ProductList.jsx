export default function ProductList({ array }) {
  return (
    <ul>
      {array.map(item => {
        return (
          <li key={item.id}>
            <p>{item.name}</p>
            <p></p>
            <img src="" alt="" />
          </li>
        );
      })}
    </ul>
  );
}
