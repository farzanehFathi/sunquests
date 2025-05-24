"use client";

import FavItem from "@/components/custom/favitem";
import Header from "@/components/custom/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CheckCheckIcon,
  CheckIcon,
  Search,
  SearchCheckIcon,
} from "lucide-react";

function SubmitButton() {
  return (
    <Button className="w-full mt-4 bg-black/50 hover:bg-white/50 text-white hover:text-black font-bold py-2 px-4 rounded">
      <div className="flex items-center justify-center gap-2">
        <p>Let's Compare</p> <CheckIcon />
      </div>
    </Button>
  );
}

export default function Home() {
  const handleSubmit = () => {
    alert("Form submitted!");
  };

  return (
    <div className="  bg-[url('https://wallpapershome.com/images/pages/pic_h/11591.jpg')] bg-cover bg-center bg-opacity-35 bg-no-repeat">
      <div className="fixed inset-0 bg-black/20 z-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        <Header />

        <form action={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl ">
            <div className="col-span-1  bg-blue-100/25 shadow-md rounded-lg p-6 ">
              <h2 className="font-patrick_hand text-3xl pb-6">
                {" "}
                Where you're dreaming of?
              </h2>

              <>
                {" "}
                <div className="space-y-4">
                  <Input
                    placeholder="London"
                    className="bg-white/25 font-spinnaker"
                    required
                  />
                  <Input
                    placeholder="Madrid"
                    className="bg-white/25 font-spinnaker"
                  />
                  <Input
                    placeholder="Paris"
                    className="bg-white/25 font-spinnaker"
                  />
                  <Input
                    placeholder="Tokyo"
                    className="bg-white/25 font-spinnaker"
                  />
                  <Input
                    placeholder="Milan"
                    className="bg-white/25 font-spinnaker"
                  />{" "}
                </div>
              </>
            </div>
            <div className="col-span-1 flex flex-col item-center justify-center bg-blue-100/25 shadow-md rounded-lg p-6">
              <h2 className="text-3xl font-patrick_hand  pb-6  ">
                What's your ideal weather?
              </h2>
              <>
                <div className="flex flex-col justify-center items-center space-y-4">
                  <FavItem
                    labelText="Min Temparature"
                    inputName="favTempMin"
                    inputType="number"
                    inputDefaultValue="21"
                  />
                  <FavItem
                    labelText="Max Temparature"
                    inputName="favTempMax"
                    inputType="number"
                    inputDefaultValue="25"
                  />
                  <FavItem
                    labelText="Min Humidity"
                    inputName="favHumMin"
                    inputType="number"
                    inputDefaultValue="30"
                  />
                  <FavItem
                    labelText="Max Humidity"
                    inputName="favHumMax"
                    inputType="number"
                    inputDefaultValue="50"
                  />
                  <FavItem
                    labelText="Weather Condition"
                    inputName="favWeatherCondition"
                    inputType="text"
                    inputDefaultValue="Sunny"
                  />
                </div>
              </>
            </div>
          </div>
          <SubmitButton />
        </form>
      </div>
    </div>
  );
}
