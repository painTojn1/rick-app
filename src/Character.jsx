const Character = ({ id, image, name, status, species, origin, location }) => {
  return (
    <div
      key={id}
      className="m-3 font-mono text-xl text-gray-100 bg-gray-700 rounded-md"
    >
      <div className="flex w-8/12">
        <img src={image} className="rounded-l-md" />
        <div className="flex">
          <span className="m-4">
            {name}
            <br />
            {status == "Alive" && (
              <div className="inline-block w-3 h-3 bg-green-500 rounded-full"></div>
            )}
            {status == "Dead" && (
              <div className="inline-block w-3 h-3 bg-red-700 rounded-full"></div>
            )}
            {status == "unknown" && (
              <div className="inline-block w-3 h-3 bg-gray-500 rounded-full"></div>
            )}
            <a> </a>
            {status} - {species}
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

export default Character;
