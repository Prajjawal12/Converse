import { useRef, useEffect } from 'react';
import useGetMessages from '../../hooks/useGetMessages';
import MessageSkeleton from '../../skeletons/MessageSkeleton';
import Message from './Message';
import useListenMessages from '../../hooks/useListenMessages';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  };

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading
        ? messages.map((message, index) => (
            <div
              key={message._id}
              ref={index === messages.length - 1 ? messagesEndRef : null}
            >
              <Message message={message} />
            </div>
          ))
        : [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center text-pink-400">
          Send a message to start the conversation!
        </p>
      )}
    </div>
  );
};

export default Messages;
