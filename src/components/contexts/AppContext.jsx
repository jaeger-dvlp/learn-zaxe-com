import React from 'react';

const AppContext = React.createContext();

export default function AppWrapper({ children }) {
  const [notificationPopup, setNotificationPopup] = React.useState({
    isActive: false,
    inHTML: false,
    message: '',
    icon: 'hint',
  });
  const [fullScreenViewer, setFullScreenViewer] = React.useState({
    inHTML: false,
    visibility: false,
    imageURL: null,
    viewMode: 'single',
    sliderSlides: null,
    activeSlide: null,
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

  const activateFullScreenViewer = ({
    imageURL,
    sliderSlides,
    viewMode,
    activeSlide,
  }) => {
    setFullScreenViewer({
      ...fullScreenViewer,
      inHTML: true,
      visibility: false,
    });
    if (sliderSlides && viewMode === 'slider') {
      setTimeout(() => {
        setFullScreenViewer({
          inHTML: true,
          visibility: true,
          sliderSlides,
          activeSlide,
          viewMode,
        });
      });
    } else {
      setTimeout(() => {
        setFullScreenViewer({
          inHTML: true,
          visibility: true,
          imageURL,
          viewMode,
        });
      }, 150);
    }
  };

  const deactivateFullScreenViewer = () => {
    setFullScreenViewer({
      ...fullScreenViewer,
      inHTML: true,
      visibility: false,
    });
    setTimeout(() => {
      setFullScreenViewer({
        ...fullScreenViewer,
        inHTML: false,
        visibility: false,
        imageURL: null,
        sliderSlides: null,
        activeSlide: null,
        viewMode: 'single',
      });
    }, 350);
  };

  const ContextData = React.useMemo(
    () => ({
      notificationPopup,
      setNotificationPopup,
      deactivateNotificationPopup,
      activateNotificationPopup,
      fullScreenViewer,
      activateFullScreenViewer,
      deactivateFullScreenViewer,
    }),
    [notificationPopup, fullScreenViewer]
  );
  return (
    <AppContext.Provider value={ContextData}>{children}</AppContext.Provider>
  );
}

export const useAppContext = () => React.useContext(AppContext);
