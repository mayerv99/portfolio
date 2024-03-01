import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";

export const SelectField = ({
  placeholder,
  items,
  setValue,
}: {
  placeholder: string;
  items: { value: string; label: string }[];
  setValue: (value: string) => void;
}) => {
  return (
    <Select onValueChange={(value) => setValue(value)}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {items.map((item) => (
          <SelectItem value={item.value}>{item.label}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
