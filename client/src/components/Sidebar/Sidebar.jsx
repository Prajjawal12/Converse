import Conversation from './Conversation/Conversation';
import LogoutButton from './Logout/Logout';
import SearchInput from './SearchInput/SearchInput';

const Sidebar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversation />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
