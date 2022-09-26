import React from 'react';

const AppContext = React.createContext();

export default function AppWrapper({ children }) {
  const [notificationPopup, setNotificationPopup] = React.useState({
    message: '',
    icon: 'hint',
    inHTML: false,
    isActive: false,
  });

  const [downloadListPopup, setDownloadListPopup] = React.useState({
    inHTML: false,
    isActive: false,
    downloads: null,
  });

  const [videoPopup, setVideoPopup] = React.useState({
    inHTML: false,
    isActive: false,
    video: {
      url: null,
      title: null,
      poster: null,
    },
  });
  const [fullScreenViewer, setFullScreenViewer] = React.useState({
    inHTML: false,
    imageURL: null,
    activeSlide: null,
    visibility: false,
    viewMode: 'single',
    sliderSlides: null,
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

  const deactivateDownloadListPopup = () => {
    setDownloadListPopup({
      ...downloadListPopup,
      isActive: false,
    });
    setTimeout(() => {
      setDownloadListPopup({
        ...downloadListPopup,
        isActive: false,
        inHTML: false,
        downloads: null,
      });
    }, 400);
  };

  const activateDownloadListPopup = (downloads) => {
    setDownloadListPopup({
      isActive: false,
      inHTML: true,
      downloads,
    });
    setTimeout(() => {
      setDownloadListPopup({
        isActive: true,
        inHTML: true,
        downloads,
      });
    }, 200);
  };

  const deactivateVideoPopup = () => {
    setVideoPopup({
      ...videoPopup,
      isActive: false,
    });
    setTimeout(() => {
      setVideoPopup({
        ...videoPopup,
        isActive: false,
        inHTML: false,
        video: {
          url: null,
          title: null,
          poster: null,
        },
      });
    }, 400);
  };

  const activateVideoPopup = ({ video }) => {
    setVideoPopup({
      ...videoPopup,
      isActive: false,
      inHTML: true,
    });
    setTimeout(() => {
      setVideoPopup({
        ...videoPopup,
        isActive: true,
        inHTML: true,
        video,
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
      deactivateNotificationPopup,
      activateNotificationPopup,
      downloadListPopup,
      deactivateDownloadListPopup,
      activateDownloadListPopup,
      videoPopup,
      deactivateVideoPopup,
      activateVideoPopup,
      fullScreenViewer,
      activateFullScreenViewer,
      deactivateFullScreenViewer,
    }),
    [notificationPopup, videoPopup, fullScreenViewer, downloadListPopup]
  );
  return (
    <AppContext.Provider value={ContextData}>{children}</AppContext.Provider>
  );
}

export const useAppContext = () => React.useContext(AppContext);
