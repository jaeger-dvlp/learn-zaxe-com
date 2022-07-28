import React from 'react';

const AppContext = React.createContext();

export default function AppWrapper({ children }) {
  const [notificationPopup, setNotificationPopup] = React.useState({
    isActive: false,
    inHTML: false,
    message: '',
    icon: 'hint',
  });

  const deactivateNotificationPopup = () => {
    setNotificationPopup({
      ...notificationPopup,
      isActive: false,
    });
    setTimeout(() => {
      setNotificationPopup({
        ...notificationPopup,
        isActive: false,
        inHTML: false,
      });
    }, 400);
  };

  const activateNotificationPopup = ({ message, icon }) => {
    setNotificationPopup({
      ...notificationPopup,
      isActive: false,
      inHTML: true,
    });
    setTimeout(() => {
      setNotificationPopup({
        ...notificationPopup,
        isActive: true,
        inHTML: true,
        message,
        icon,
      });
    }, 200);
  };

  const ContextData = React.useMemo(
    () => ({
      notificationPopup,
      setNotificationPopup,
      deactivateNotificationPopup,
      activateNotificationPopup,
    }),
    [notificationPopup]
  );
  return (
    <AppContext.Provider value={ContextData}>{children}</AppContext.Provider>
  );
}

export const useAppContext = () => React.useContext(AppContext);
