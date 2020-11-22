const Card = ({ user, handleClick }) => {
  return (
    <div>
      <img
        alt=""
        src={`https://robohash.org/${user.id}?200x200`}
        width="50"
        height="50"
      />

      <h3>{user.name}</h3>
      <p style={{ color: "gray", fontStyle: "italic" }}>@{user.username}</p>
      <p>
        <a href={"http://" + user.website}>http://{user.website}</a>
      </p>

      <div>
        <button type="submit" onClick={() => handleClick(user, true)}>
          MORE DETAILS
        </button>
      </div>
    </div>
  );
};

export default Card;
