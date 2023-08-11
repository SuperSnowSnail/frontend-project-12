import { useSelector } from 'react-redux';

import messagesSelectors from '../selectors/messagesSelectors';

const MessagesBox = () => {
  const messages = useSelector(messagesSelectors.selectCurrentChannelMessages);

  return (
    <div className="chat-messages overflow-auto px-5" id="messages-box">
      {messages.map(({ body, username, id }) => (
        <div key={id} className="text-break mb-2">
          <b>{username}</b>
          {`: ${body}`}
        </div>
      ))}
    </div>
  );
};

export default MessagesBox;
