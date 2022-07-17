import logo from '../../assets/companyLogo.jpg';
import BoardList from './BoardList';

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-semi-dark-bullace min-h-screen border-r-2 border-[#7e7f80]">
      <div className="mt-6 flex justify-center">
        <img className="h-32 rounded-full" src={logo} alt="company logo" />
      </div>
      <div className="ml-8 mt-6">
        <h5 className="text-lg uppercase text-font font-medium">all boards (4)</h5>
      </div>
      <ul className="mt-6">
        <BoardList />
      </ul>
    </div>
  );
};
export default Sidebar;
