import dvaliImage from '../assets/dvali.jpg';  // დარწმუნდი, რომ სწორი გზა მიუთითე

const Home = () => {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${dvaliImage})` }}
    >
      <h1 className="text-4xl text-white font-bold shadow-md z-10">Welcome to MMA Zone</h1>
    </div>
  );
};

export default Home;
