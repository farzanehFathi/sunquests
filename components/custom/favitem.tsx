import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FavItemProps = {
  labelText: string;
  inputName: string;
  inputType: string;
  InputUnit: string;
  inputDefaultValue: number | string;
};

export default function FavItem({
  labelText,
  inputName,
  inputType,
  InputUnit,
  inputDefaultValue,
}: FavItemProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 max-w-96 justify-center items-center space-x-6">
      <Label className="text-md sm:text-xl text-left sm:text-right font-architects_daughter ">
        {" "}
        {labelText}{" "}
      </Label>

      <div className="grid grid-cols-2 items-baseline w-full">
        <Input
          className="w-full sm:w-auto font-spinnaker"
          name={inputName}
          type={inputType}
          defaultValue={inputDefaultValue}
        />

        <Label className="text-left font-spinnaker ">{InputUnit}</Label>
      </div>
    </div>
  );
}
