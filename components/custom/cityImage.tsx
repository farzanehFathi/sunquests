import React, { useEffect, useState } from "react";

interface Props {
  city: string;
}

interface ImageResult {
  src: string;
  alt: string;
}

const CityImage: React.FC<Props> = ({ city }) => {
  const [image, setImage] = useState<ImageResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      const res = await fetch(
        `/api/city-image?city=${encodeURIComponent(city)}`
      );
      const data = await res.json();
      setImage(data);
      setLoading(false);
    };

    fetchImage();
  }, [city]);

  if (loading) return <p>Loading...</p>;
  if (!image) return <p>No image found for {city}.</p>;

  return (
    <img src={image.src} alt={image.alt} className="rounded-xl max-w-full" />
  );
};

export default CityImage;
