const Escena = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};

export default Escena;
