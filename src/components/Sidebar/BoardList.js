import { ReactComponent as TodoLogo } from '../../assets/todo.svg';
import { ReactComponent as AddIcon } from '../../assets/add-icon.svg';

const BoardList = () => {
  return (
    <>
      <li className="flex p rounded-tr-full rounded-br-full mr-8 cursor-pointer hover:bg-dark-bullace hover:text-font">
        <TodoLogo className="h-6 mr-2" style={{ fill: '#ffffff' }} />
        <p className="text-font text-sm">Plat Form Launch</p>
      </li>
      <li className="flex p rounded-tr-full rounded-br-full mr-8 cursor-pointer hover:bg-dark-bullace hover:text-font">
        <AddIcon className="h-6 mr-2" style={{ fill: '#ffffff' }} />
        <p className="text-font text-sm">Create New Board </p>
      </li>
    </>
  );
};

export default BoardList;
