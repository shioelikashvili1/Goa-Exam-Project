import bronxImage from '../assets/bronx.jpg';  // იმპორტირება src/assets ფოლდერიდან

const eventsData = [
  {
    id: 1,
    title: "MMA Championship 2025",
    date: "March 25, 2025",
    description: "The biggest MMA championship of the year featuring top fighters.",
  },
  {
    id: 2,
    title: "Ultimate Fight Night",
    date: "April 10, 2025",
    description: "Exciting fights with undercard fighters looking to prove themselves.",
  },
  {
    id: 3,
    title: "Summer Brawl 2025",
    date: "June 5, 2025",
    description: "A summer event with thrilling matches and surprise fighters.",
  },
];

const Events = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed p-6"
      style={{
        backgroundImage: `url(${bronxImage})`,  // აქ ხდება სურათის გამოყენება
        backgroundSize: 'cover',  // სურათი მთლიანად იფარავს სივრცეს
        backgroundPosition: 'center',  // სურათი იქნება ცენტრში
      }}
    >
      <h1 className="text-4xl text-white font-bold text-center mb-6">Upcoming MMA Events</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventsData.map((event) => (
          <div key={event.id} className="bg-black bg-opacity-50 p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl text-white font-semibold">{event.title}</h2>
            <p className="text-lg text-gray-300">{event.date}</p>
            <p className="text-gray-200 mt-2">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
