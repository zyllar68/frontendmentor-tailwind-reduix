import {
  Sidebar, Header, TaskBoard, ViewTask,
} from './components';

const App = () => {
  return (
    <>
      <ViewTask />
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <main className="col-span-11 bg-dark-bullace w-full">
          <Header />
          <div className="min-w-full overflow-x-auto" style={{ minHeight: 'calc(100% - 95px)' }}>
            <ul className="p flex gap-4 mr-8">
              <li>
                <TaskBoard />
              </li>
              <li>
                <TaskBoard />
              </li>
              <li>
                <TaskBoard />
              </li>
              <li>
                <TaskBoard />
              </li>
              <li>
                <TaskBoard />
              </li>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};

export default App;
