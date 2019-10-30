const Friend = ({ friend }) => (
  <div>
    <h3>{friend.avatar}</h3>
    <div>
      {friend.firstName} {friend.lastName}
    </div>
    <div>{friend.email}</div>
    <hr />
  </div>
);
