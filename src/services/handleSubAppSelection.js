const handleSubAppSelection = ({ setCurrentApp, appCode, appUrl }) => {
  if (appUrl) {
    window.open(appUrl, '_blank'); // redirection to URL
  }
  setCurrentApp(appCode); // currentApp state update
}

export { handleSubAppSelection }