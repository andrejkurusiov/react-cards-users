import Card from "./Card";

const CardList = ({ users, handleClick }) => {
  return (
    <div className="container">
      {users.map((user) => {
        return <Card user={user} handleClick={handleClick} key={user.id} />;
      })}
    </div>
  );
};

export default CardList;
