export async function fetchCityImage(city: string) {
  const res = await fetch(
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(
      city
    )}&per_page=1`,
    {
      headers: {
        Authorization: process.env.PexelsAPIKey || "",
      },
    }
  );

  if (!res.ok) return null;

  const data = await res.json();
  const photo = data.photos[0];

  if (!photo) return null;

  return {
    src: photo.src.medium,
    alt: photo.alt || `Photo of ${city}`,
  };
}
