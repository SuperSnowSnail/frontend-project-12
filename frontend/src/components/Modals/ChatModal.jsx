import { useSelector } from 'react-redux';

import Add from './Add';
import Remove from './Remove';
import Rename from './Rename';

const ChatModal = () => {
  const modalType = useSelector((state) => state.modal.type);
  const isModalOpen = useSelector((state) => state.modal.isOpen);

  const modals = {
    add: Add,
    remove: Remove,
    rename: Rename,
  };

  const Component = modals[modalType];

  return isModalOpen ? <Component /> : null;
};

export default ChatModal;
