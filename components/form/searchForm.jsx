import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeProcessGroups, NativeSelectGroups } from "./nativeSelectGroups";

export function InputForm() {
  return (
    <form className="w-full max-w-sm">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="form-name">Σκάλα</FieldLabel>
          {/* <Input
            id="form-name"
            type="text"
            placeholder="Evil Rabbit"
            required
          /> */}
          <NativeSelectGroups />
        </Field>
        <Field>
          <FieldLabel htmlFor="form-email">Τεμάχια (unit)</FieldLabel>
          <Input id="form-email" type="number" placeholder="e.g : 10" />
          {/* <FieldDescription>
            We&apos;ll never share your email with anyone.
          </FieldDescription> */}
        </Field>
        <h1 className="text-left font-bold">Ρίχτια</h1>
        <hr />
        <div className="grid grid-cols-3 gap-4">
          <Field>
            <FieldLabel htmlFor="form-email">Τεμάχια (unit)</FieldLabel>
            <Input id="form-email" type="number" placeholder="Enter pcs" />
            {/* <FieldDescription>
            We&apos;ll never share your email with anyone.
          </FieldDescription> */}
          </Field>
          <Field>
            <FieldLabel htmlFor="form-email">Μήκος (cm)</FieldLabel>
            <Input id="form-email" type="number" placeholder="25 (cm)" />
            {/* <FieldDescription>
            We&apos;ll never share your email with anyone.
          </FieldDescription> */}
          </Field>
          <Field>
            <FieldLabel htmlFor="form-email">Πλάτος (cm)</FieldLabel>
            <Input id="form-email" type="number" placeholder="3 (cm)" />
            {/* <FieldDescription>
            We&apos;ll never share your email with anyone.
          </FieldDescription> */}
          </Field>
        </div>
        <h1 className="text-left font-bold">Σοβατεπί</h1>
        <hr />
        <div className="grid grid-cols-3 gap-4">
          <Field>
            <FieldLabel htmlFor="form-email">Τεμάχια (unit)</FieldLabel>
            <Input id="form-email" type="number" placeholder="Enter pcs" />
            {/* <FieldDescription>
            We&apos;ll never share your email with anyone.
          </FieldDescription> */}
          </Field>
          <Field>
            <FieldLabel htmlFor="form-email">Μήκος (cm)</FieldLabel>
            <Input id="form-email" type="number" placeholder="25 (cm)" />
            {/* <FieldDescription>
            We&apos;ll never share your email with anyone.
          </FieldDescription> */}
          </Field>
          <Field>
            <FieldLabel htmlFor="form-email">Πλάτος (cm)</FieldLabel>
            <Input id="form-email" type="number" placeholder="3 (cm)" />
            {/* <FieldDescription>
            We&apos;ll never share your email with anyone.
          </FieldDescription> */}
          </Field>
        </div>

        <Field>
          <FieldLabel htmlFor="form-name">Ειδική επεξεργασία</FieldLabel>
          {/* <Input
            id="form-name"
            type="text"
            placeholder="Evil Rabbit"
            required
          /> */}
          <NativeProcessGroups />
        </Field>

        <Field orientation="horizontal">
          {/* <Button type="button" variant="outline">
            Clear
          </Button> */}
          <button
            type="reset"
            className="bg-white text-black p-2 rounded-xl cursor-pointer"
          >
            Reset
          </button>
          <Button className={"cursor-pointer"} type="submit">
            Submit
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
