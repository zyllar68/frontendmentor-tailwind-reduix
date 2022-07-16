import logo from '../../assets/companyLogo.jpg';
import BoardList from './BoardList';

const Sidebar = () => {
  return (
    <div className=" w-[300px] h-screen bg-semi-dark-bullace border-r border-[#6e6e6e]">
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
