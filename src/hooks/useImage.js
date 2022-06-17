import { useState, useEffect } from "react";

// Lifted from @Jaden Rose https://stackoverflow.com/questions/53775936/import-image-dynamically-in-react-component
const useImage = (fileName) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    setImage(fileName);
    setLoading(false);
    // const fetchImage = async () => {
    //   try {
    //     const response = await import(`../assets/${fileName}`);
    //     setImage(response.default);
    //   } catch (err) {
    //     setError(err);
    //   } finally {
    //     setLoading(false);
    //   }
    // };

    // fetchImage();
  }, [fileName]);

  return {
    loading,
    error,
    image,
  };
};

export default useImage;
