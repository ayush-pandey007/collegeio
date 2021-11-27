import Sidepanel from '../components/Sidepanel';
import ChatSection from '../components/ChatSection';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div
      className="min-h-screen max-h-screen flex flex-col text-white"
      style={{ backgroundColor: '#161223' }}
    >
      <Navbar />
      <div className="flex flex-1 min-h-full">
        <Sidepanel className="w-[30%]" />
        <ChatSection className="flex-1" />
      </div>
    </div>
  );
};

export default Home;
