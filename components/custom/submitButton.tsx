import { Button } from "../ui/button";

export default function SubmitButton() {
  return (
    <div className="mb-8 flex items-center justify-end">
      <Button className="h-100 bg-mainAccent hover:bg-mainAccent/70">
        <img
          className="w-64 rounded-md"
          src="/img/letsFly.svg"
          width={200}
          alt=""
        />
      </Button>
    </div>
  );
}
