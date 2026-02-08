"use client";
import MDEditor from "@uiw/react-md-editor";
import { TextField, Button } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";

interface NewIssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<NewIssueForm>();
  console.log(register("title"));

  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <TextField.Root placeholder="Title" {...register("title")} />
      <Controller
        name="description"
        control={control}
        render={({ field }) => <MDEditor {...field} />}
      />
      <Button>Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
