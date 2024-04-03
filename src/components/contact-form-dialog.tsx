import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SelectField } from "./custom-select";

import { useState } from "react";

export function ContactFormDialog({ children }: { children: React.ReactNode }) {
  const [selectValues, setSelectValues] = useState({
    budget: "",
    type: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true); // Disable the form

    const formData = new FormData(event.currentTarget);
    const formProps = Object.fromEntries(formData);
    formProps.budget = selectValues.budget;
    formProps.type = selectValues.type;

    console.log(formProps);

    // Simulate an API call or any async operation
    try {
      // await someAsyncOperation();
      console.log("Form submitted successfully");
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      // Re-enable the form after operation is complete
    }
  }

  function handleSelectChange(name: string, newValue: string) {
    setSelectValues((prevValues) => ({
      ...prevValues,
      [name]: newValue,
    }));
  }

  const selectItems: {
    type: { value: string; label: string }[];
    budget: { value: string; label: string }[];
  } = {
    type: [
      { label: "Web App", value: "web" },
      { label: "Mobile App", value: "mobile" },
      { label: "Other", value: "other" },
    ],
    budget: [
      { label: "R$1.000", value: "lowest" },
      { label: "R$1.000 - R$5.000", value: "low" },
      { label: "R$5.000 - R$10.000", value: "medium" },
      { label: "R$10.000+", value: "high" },
    ],
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact form</DialogTitle>
          <DialogDescription>
            Send me a message and I will get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="w-full gap-8 flex flex-col ">
          <div className="w-full flex justify-between gap-4">
            <Input
              name="name"
              placeholder="Name"
              style={{ marginRight: "0.5rem" }}
            />
            <Input name="email" type="email" placeholder="Email" />
          </div>
          <div className="w-full flex justify-between gap-4">
            <SelectField
              setValue={(value) => handleSelectChange("budget", value)}
              placeholder="Budget"
              items={selectItems.budget}
            />
            <SelectField
              setValue={(value) => handleSelectChange("type", value)}
              placeholder="Project Type"
              items={selectItems.type}
            />
          </div>
          <Textarea name="details" placeholder="More details" rows={4} />
          <button
            type="submit"
            disabled={isSubmitting} // Disable button when form is submitting
            className={`px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
            <span className="relative z-20">
              {isSubmitting ? "Submitting..." : "Send"}
            </span>
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
