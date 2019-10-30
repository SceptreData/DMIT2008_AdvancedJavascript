const fStyles = {
  listStyle: "none"
};
const Friends = ({ data }) => {
  return (
    <ul style={fStyles}>
      {data.map(friend => (
        <li key={friend.email}>
          <Friend friend={friend} />
        </li>
      ))}
    </ul>
  );
};
