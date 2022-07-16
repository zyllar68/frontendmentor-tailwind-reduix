const Header = () => {
  return (
    <div className="flex flex-row items-center justify-between  p h-24 bg-semi-dark-bullace">
      <h1 className="text-2xl font-medium text-font">Platform Launch</h1>
      <button type="button" className="p-xsm w-40 text-font rounded-full text-center float-right bg-dark-bullace hover:bg-bullace" onClick={() => { return alert('yeah'); }}>
        Add New Task
      </button>
    </div>
  );
};

export default Header;
