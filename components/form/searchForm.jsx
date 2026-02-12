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
    <main className="pt-10 justify-center lg:w-120 mx-auto w-100 bg-emerald-500 rounded-2xl p-5 gap-10 items-center flex flex-col ">
      <form className="w-full max-w-sm" action={formAction}>
        <FieldGroup>
          <Field>
            <FieldLabel className={"font-bold text-xl"} htmlFor="form-name">
              Σκάλα
            </FieldLabel>
            <NativeSelectGroups />
          </Field>
          <div className="grid grid-cols-3 gap-4">
            <Field>
              <FieldLabel htmlFor="form-email">Τεμάχια (unit)</FieldLabel>
              <Input
                name="sktemaxia"
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
                name="skmikos"
                id="form-email"
                type="number"
                placeholder="Length"
              />
              {/* <FieldDescription>
            We&apos;ll never share your email with anyone.
          </FieldDescription> */}
            </Field>
            <Field>
              <FieldLabel htmlFor="form-email">Πλάτος (cm)</FieldLabel>
              <Input
                name="skplatos"
                id="form-email"
                type="number"
                placeholder="3 (cm)"
              />
              {/* <FieldDescription>
            We&apos;ll never share your email with anyone.
          </FieldDescription> */}
            </Field>
          </div>

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
      <section className="text-left flex flex-col">
        <h1>{state ? state.product : null}</h1>
        <h1>{state ? state.sktemaxia : null}</h1>
        <h1>{state ? state.skmikos : null}</h1>
        <h1>{state ? state.skplatos : null}</h1>
        <h1>{state ? state.process : null}</h1>
        <h1>{state ? state.rixtemaxia : null}</h1>
        <h1>{state ? state.rixmikos : null}</h1>
        <h1>{state ? state.rixplatos : null}</h1>
        <h1>{state ? state.sovtemaxia : null}</h1>
        <h1>{state ? state.sovmikos : null}</h1>
        <h1>{state ? state.sovplatos : null}</h1>
      </section>
    </main>
  );
}
