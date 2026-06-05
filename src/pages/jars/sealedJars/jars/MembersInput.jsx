import { useFieldArray, useFormContext } from "react-hook-form";
import { LuX } from "react-icons/lu";
import AppForm from "../../../../components/AppForm";
import Button from "../../../../components/Button";
import Chip from "../../../../components/Chip";

function MembersInput() {
  const {
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors?.people?.root?.message;

  const inputValue = watch("personInput");
  const isPrivateJar = watch("privacy");

  const { fields, append, remove } = useFieldArray({
    control,
    name: "people",
    rules:
      isPrivateJar !== "private"
        ? { required: "Please enter a name" }
        : undefined,
  });

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;

    e.preventDefault();

    const username = inputValue.trim().toLowerCase();

    if (!username) return;

    const alreadyExists = fields.some((person) => person.value === username);

    if (alreadyExists) return;

    append({ value: username });

    setValue("personInput", "");
  };

  if (isPrivateJar === "private") return null;

  return (
    <AppForm.FormField>
      <AppForm.Label label="People" />

      <AppForm.Input
        name="personInput"
        placeholder="Type a username and press enter"
        onKeyDown={handleKeyDown}
      />

      {errorMessage && <AppForm.Error name="people" />}

      <div className="people-list">
        {fields.map((person, index) => (
          <Chip
            key={person.id}
            label={person.value}
            variant="border"
            rightIcon={
              <Button
                type="button"
                className="chip"
                onClick={() => remove(index)}
                rightIcon={<LuX />}
              />
            }
          />
        ))}
      </div>
    </AppForm.FormField>
  );
}

export default MembersInput;
