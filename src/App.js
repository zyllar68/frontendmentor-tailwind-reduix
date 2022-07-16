import { Sidebar, Header, TaskCard } from './components';

const App = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <main className="bg-dark-bullace w-screen">
        <Header />
        <div className="p-xl">
          <TaskCard />
        </div>
      </main>
    </div>
  );
};

export default App;
