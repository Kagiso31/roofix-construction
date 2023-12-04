const Map = () => {
  const MAP_MODE = "place";
  const API_KEY = "AIzaSyCcwdOYYX5HSKY6Rq_5_kX3FJzofePEvv4";
  const PARAMETERS = "Eiffel+Tower,Paris+France";

  return (
    <section>
      <iframe
        className="border-none w-full grayscale"
        height="550px"
        frameborder="0"
        src={`https://www.google.com/maps/embed/v1/${MAP_MODE}?key=${API_KEY}&q=${PARAMETERS}`}
        referrerpolicy="no-referrer-when-downgrade"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default Map;
