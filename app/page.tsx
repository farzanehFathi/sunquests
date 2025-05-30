"use client";

import { useRouter } from "next/navigation";

// Shadcn UI components
import { Input } from "@/components/ui/input";

// custom components
import SubmitButton from "@/components/custom/submitButton";
import FavItem from "@/components/custom/favitem";

// Lucide React
import { PaperclipIcon } from "lucide-react";

export default function Home() {
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const city = formData.get("city1") as string;
    if (!city) return;

    const prefs = {
      favTempMin: formData.get("favTempMin"),
      favTempMax: formData.get("favTempMax"),
      favHumMin: formData.get("favHumMin"),
      favHumMax: formData.get("favHumMax"),
      favWind: formData.get("favWind"),
      favWeatherCondition: formData.get("favWeatherCondition"),
    };

    localStorage.setItem("weatherPrefs", JSON.stringify(prefs));

    router.push(`/forecasts?city=${encodeURIComponent(city)}`);
  };

  return (
    <div className=" ">
      <div className=" flex flex-col items-center p-4">
        <form action={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 w-full ">
            <div
              className="p-6 col-span-1 backdrop-blur bg-mainAccent/25 shadow-md shadow-mainAccent rounded-lg flex flex-col item-center justify-center transition-all duration-300 ease-in-out
            hover:scale-105 hover:shadow-xl hover:-translate-y-1
            cursor-pointer"
            >
              <PaperclipIcon
                size={36}
                className="relative -inset-y-12 text-zinc-400"
              />
              <h2 className="text-3xl font-architects_daughter pb-9  ">
                What's your ideal weather?
              </h2>
              <>
                <div className="flex flex-col justify-center items-center space-y-4">
                  <FavItem
                    labelText="Min Temparature"
                    inputName="favTempMin"
                    inputType="number"
                    InputUnit="°C"
                    inputDefaultValue="21"
                  />
                  <FavItem
                    labelText="Max Temparature"
                    inputName="favTempMax"
                    inputType="number"
                    InputUnit="°C"
                    inputDefaultValue="25"
                  />
                  <FavItem
                    labelText="Min Humidity"
                    inputName="favHumMin"
                    inputType="number"
                    InputUnit="%"
                    inputDefaultValue="30"
                  />
                  <FavItem
                    labelText="Max Humidity"
                    inputName="favHumMax"
                    inputType="number"
                    InputUnit="%"
                    inputDefaultValue="50"
                  />

                  <FavItem
                    labelText="Wind Speed"
                    inputName="favWind"
                    inputType="number"
                    InputUnit="m/s"
                    inputDefaultValue="2"
                  />
                  <FavItem
                    labelText="Weather Condition"
                    inputName="favWeatherCondition"
                    inputType="text"
                    InputUnit=""
                    inputDefaultValue="Sunny"
                    electOptions={[
                      "clear sky",
                      "few clouds",
                      "scattered clouds",
                      "broken clouds",
                      "shower rain",
                      "rain",
                      "thunderstorm",
                      "snow",
                      "mist",
                    ]}
                  />
                </div>
              </>
            </div>

            <div className="col-span-1 p-6">
              <div className="invisible md:visible ">
                <SubmitButton />
              </div>
              <h2 className="font-architects_daughter text-3xl pb-6">
                {" "}
                Where you're dreaming of?
              </h2>

              <div className="space-y-4">
                <Input name="city1" placeholder="London" required />
                <Input placeholder="Madrid" />
                <Input placeholder="Paris" />
                <Input placeholder="Tokyo" />
                <Input placeholder="Milan" />{" "}
              </div>
            </div>
          </div>
          <div className="visible md:invisible ">
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
}
