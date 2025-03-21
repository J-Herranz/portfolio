const checkImagesExist = async ({ urls, imageSuffixes, imgFormat }) => {
  // function to check if a image exist
  const checkImageExists = async (url) => {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      
      // Check if the response is successful and the content type is an image
      if (response.ok && response.headers.get('Content-Type').includes('image')) {
        return true;
      }
      return false;  // Image does not exist or is not an image file
    } catch (error) {
      return false;  // if error, we asume that the image doesn't exist
    }
  };

  // creation of an array to store the results
  const results = [];

  // check every url in array
  for (const url of urls) {
    // creation of an object to show the results for this URL
    const result = {};
    result['url'] = url;

    for (const suffix of imageSuffixes) {
      // Construct the full URL and check if it exists
      const exist = await checkImageExists(`${url}_${suffix}.${imgFormat}`);
      result[suffix] = exist; // Set 'true' or 'false' based on image existence
    }

    // add the result object to the results array
    results.push(result);
  }

  return results; 
}

export { checkImagesExist }