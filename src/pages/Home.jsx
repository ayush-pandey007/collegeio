import Sidepanel from '../components/Sidepanel';
import ChatSection from '../components/ChatSection';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-col text-white"
      style={{ backgroundColor: '#161223' }}
    >
      <Navbar />
      <div className="flex-1 grid grid-cols-10">
        <Sidepanel className="col-span-3" />
        <ChatSection className="col-span-7" />
      </div>
    </div>
  );
};

export default Home;
