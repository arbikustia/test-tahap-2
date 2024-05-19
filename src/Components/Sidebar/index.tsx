import { LIST_SIDEBAR } from '@/Types/Sidebar.types';
import SidebarList from './SidebarList';

const Sidebar = () => {
  return (
    <div className="fixed w-[254px] h-screen bg-white-400 dark:bg-grey-700 p-4 flex flex-col">
      <div className="flex flex-col gap-4 items-start bg-white-400 dark:bg-grey-700">
        {LIST_SIDEBAR.map((item, index) => (
          <SidebarList
            key={`list-sidebar-${index}`}
            title={item.title}
            path={item.path!}
            image={item.image}
            child={item.child}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
