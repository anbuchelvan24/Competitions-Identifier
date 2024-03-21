const Connect = (Props) => {
  return (
    <div className="connect mt-5">
      <h2>CONNECT WITH</h2>
      <ul className="list-group list-group-flush">
        {Props.connect.map((item) => (
          <li className="list-group-item">
            <a className="link-offset-1" href="#">
              {" "}
              {item}{" "}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Connect;
