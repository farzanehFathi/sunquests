import { Button } from "../ui/button";

export default function SubmitButton() {
  return (
    <div className="mb-8 flex items-center justify-end  ">
      <Button className="h-100 bg-mainAccent hover:bg-mainAccent/70">
        <img
          className="w-64 scale-75 rounded-md transition-all duration-300 ease-in-out hover:scale-100 hover:rotate-2"
          src="/img/letsFly.svg"
          width={200}
          alt=""
        />
      </Button>
    </div>
  );
}
