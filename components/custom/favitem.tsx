import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FavItemProps = {
  labelText: string;
  inputName: string;
  inputType: string;
  inputDefaultValue: number | string;
};

export default function FavItem({
  labelText,
  inputName,
  inputType,
  inputDefaultValue,
}: FavItemProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 max-w-96 justify-center items-center space-x-4">
      <Label className="text-md sm:text-2xl text-left font-patrick_hand ">
        {" "}
        {labelText}{" "}
      </Label>

      <Input
        className="w-full sm:w-auto bg-white/25 font-mono font-medium"
        name={inputName}
        type={inputType}
        defaultValue={inputDefaultValue}
      />
    </div>
  );
}
