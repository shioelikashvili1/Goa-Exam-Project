import khabibImage from '../assets/khabib.jpg';  // დარწმუნდი, რომ სწორი გზა მიუთითე

const Fighters = () => {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${khabibImage})`,
      }}
    >
      <h1 className="text-4xl text-white font-bold shadow-md z-10">Fighters Page</h1>
    </div>
  );
};

export default Fighters;
