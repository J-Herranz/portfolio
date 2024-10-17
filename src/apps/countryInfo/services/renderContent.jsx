import { SubAppTitle } from "../../../components/SubAppTitle";

function renderContent({ apiResponse, t, isLoading, error, content, darkmodeBool, renderAppTitle = false, countryCode = true }) {
  const buildReturn = (message, additionalComponents = null) => {
    return (<>
      {renderAppTitle && <SubAppTitle appTitle={t?.subAppInfo?.appName} darkmodeBool={darkmodeBool} toolTipInfo={t?.subAppInfo?.toolTipInfo} />}
      {message && <p className='errorMessage'>{message}</p>}
      {additionalComponents}
    </>);
  }

  if (!countryCode) {
    return buildReturn(t?.subAppInfo?.emptyCode);
  }

  if (isLoading) {
    return buildReturn(t?.subAppInfo?.loading);
  }

  if (error) {
    return buildReturn(apiResponse?.message);
  }

  return buildReturn('', content)
}

export { renderContent }