"use client";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { NativeProcessGroups, NativeSelectGroups } from "./nativeSelectGroups";
import { useActionState } from "react";
import { xfunction } from "./SSfun";

export function InputForm() {
  const [state, formAction] = useActionState(xfunction, {});
  console.log("state=", state);

  return (
    <main className="text-center pt-10 justify-center mx-auto w-100 bg-emerald-500 rounded-2xl p-5 gap-10 items-center flex flex-col">
      <form className="w-full max-w-sm" action={formAction}>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="form-name">Σκάλα</FieldLabel>
            <NativeSelectGroups />
          </Field>
          <Field>
            <FieldLabel>Τεμάχια (unit)</FieldLabel>
            <Input
              id="form-email"
              name="sktemaxia"
              type="number"
              placeholder="Enter pcs"
            />
            {/* <FieldDescription>
            We&apos;ll never share your email with anyone.
          </FieldDescription> */}
          </Field>

          <Field>
            <FieldLabel htmlFor="form-name">
              Ειδική επεξεργασία πατημάτων
            </FieldLabel>
            {/* <Input
            id="form-name"
            type="text"
            placeholder="Evil Rabbit"
            required
          /> */}
            <NativeProcessGroups />
          </Field>

          <h1 className="text-left font-bold">Ρίχτια</h1>
          <hr />
          <div className="grid grid-cols-3 gap-4">
            <Field>
              <FieldLabel htmlFor="form-email">Τεμάχια (unit)</FieldLabel>
              <Input
                name="rixtemaxia"
                id="form-email"
                type="number"
                placeholder="Enter pcs"
              />
              {/* <FieldDescription>
            We&apos;ll never share your email with anyone.
          </FieldDescription> */}
            </Field>
            <Field>
              <FieldLabel htmlFor="form-email">Μήκος (cm)</FieldLabel>
              <Input
                name="rixmikos"
                id="form-email"
                type="number"
                placeholder="25 (cm)"
              />
              {/* <FieldDescription>
            We&apos;ll never share your email with anyone.
          </FieldDescription> */}
            </Field>
            <Field>
              <FieldLabel htmlFor="form-email">Πλάτος (cm)</FieldLabel>
              <Input
                name="rixplatos"
                id="form-email"
                type="number"
                placeholder="3 (cm)"
              />
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
              <Input
                name="sovtemaxia"
                id="form-email"
                type="number"
                placeholder="Enter pcs"
              />
              {/* <FieldDescription>
            We&apos;ll never share your email with anyone.
          </FieldDescription> */}
            </Field>
            <Field>
              <FieldLabel htmlFor="form-email">Μήκος (cm)</FieldLabel>
              <Input
                name="sovmikos"
                id="form-email"
                type="number"
                placeholder="25 (cm)"
              />
              {/* <FieldDescription>
            We&apos;ll never share your email with anyone.
          </FieldDescription> */}
            </Field>
            <Field>
              <FieldLabel htmlFor="form-email">Πλάτος (cm)</FieldLabel>
              <Input
                name="sovplatos"
                id="form-email"
                type="number"
                placeholder="3 (cm)"
              />
              {/* <FieldDescription>
            We&apos;ll never share your email with anyone.
          </FieldDescription> */}
            </Field>
          </div>

          <Field orientation="horizontal">
            {/* <Button type="button" variant="outline">
            Clear
          </Button> */}
            <button
              type="reset"
              className="bg-white hover:opacity-80 active:scale-110 transition duration-100 text-black p-2 rounded-xl cursor-pointer"
            >
              Reset
            </button>
            <Button
              className={"cursor-pointer hover:opacity-80 active:scale-125"}
              type="submit"
            >
              Submit
            </Button>
          </Field>
        </FieldGroup>
      </form>
      <h1>{state?.sktemaxia}</h1>
      <h1>{state?.process}</h1>
      <h1>{state?.rixtemaxia}</h1>
      <h1>{state?.rixmikos}</h1>
      <h1>{state?.rixplatos}</h1> 
      <h1>{state?.sovtemaxia}</h1>
      <h1>{state?.sovmikos}</h1>
      <h1>{state?.sovplatos}</h1>
    </main>
  );
}
