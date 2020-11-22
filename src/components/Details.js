const Details = ({ user, handleClick }) => {
  if (user) {
    return (
      <div>
        <div className="container-details">
          <ul>
            <li>name: {user.name}</li>
            <li>username: {user.username}</li>
            <li>email: {user.email}</li>
            <li>phone: {user.phone}</li>
            <li>company: {user.company.name}</li>
            <li>website: {user.website}</li>
            <li>address:</li>
            <ul>
              <li>street: {user.address.street}</li>
              <li>suite: {user.address.suite}</li>
              <li>city: {user.address.city}</li>
              <li>zipcode: {user.address.zipcode}</li>
            </ul>
          </ul>
        </div>
        <div>
          <button
            type="submit"
            onClick={() => handleClick(null, false)}
            style={{ marginTop: "10px" }}
          >
            Back to user cards
          </button>
        </div>
      </div>
    );
  }
};

export default Details;
