const Unit = ({
  id,
  image,
  name,
  status,
  species,
  type,
  gender,
  origin,
  location,
}) => {
  return (
    <div
      key={id}
      className="m-3 font-mono text-xl text-gray-100 bg-gray-700 rounded-md"
    >
      <div className="justify-center">
        <img src={image} alt="Couldn't load this." className="rounded-sm" />
        <div className="flex">
          <span className="m-4">
            {name}
            <br />
            {status === "Alive" && (
              <div className="inline-block w-3 h-3 bg-green-500 rounded-full"></div>
            )}
            {status === "Dead" && (
              <div className="inline-block w-3 h-3 bg-red-700 rounded-full"></div>
            )}
            {status === "unknown" && (
              <div className="inline-block w-3 h-3 bg-gray-500 rounded-full"></div>
            )}
            <span> </span>
            {status} - {species}
            <br />
            <span className="text-gray-500 text-lg">Type:</span>
            <br />
            {type}
            <br />
            <br />
            <span className="text-gray-500 text-lg">Gender:</span>
            <br />
            {gender}
            <br />
            <br />
            <span className="text-gray-500 text-lg">Last known location:</span>
            <br />
            {origin}
            <br />
            <br />
            <span className="text-gray-500 text-lg">First seen in:</span>
            <br />
            {location}
            <br />
          </span>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Unit;
