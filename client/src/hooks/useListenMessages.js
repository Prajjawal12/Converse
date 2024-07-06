import { useEffect } from 'react';
import { useSocketContext } from '../context/SocketContext.jsx';
import useConversation from '../zustand/useConversation.js';
import notificationSounnd from '../assets/sounds/notification-sound.mp3';
const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();
  useEffect(() => {
    socket?.on('newMessage', (newMessage) => {
      newMessage.shouldShake = true;
      const sound = new Audio(notificationSounnd);
      sound.play();
      setMessages([...messages, newMessage]);
    });
    return () => socket?.off('newMessage');
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
