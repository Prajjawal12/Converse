/* eslint-disable react/prop-types */
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import extractTime from '../../utils/extractedTime.js';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe
    ? authUser.profilePicture
    : selectedConversation?.profilePicture;
  const bubbleBgColor = fromMe
    ? 'bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 text-white'
    : 'bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-black';
  const formattedTime = extractTime(message.createdAt);
  const shakeClass = message.shouldShake ? 'shake' : '';

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Chat Bubble Component" src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble ${shakeClass} ${bubbleBgColor}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
