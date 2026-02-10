import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { products } from "../products/products";

export function NativeSelectGroups() {
  const prods = products;

  return (
    <NativeSelect>
      <NativeSelectOption value="">Select department</NativeSelectOption>

      {prods.map((product) => {
        let a = product.name;
        return (
          <NativeSelectOptGroup label={product.material} key={product.name}>
            {a.map((n) => (
              <NativeSelectOption key={n} value={n}>
                {n}
              </NativeSelectOption>
            ))}
          </NativeSelectOptGroup>
        );
      })}
    </NativeSelect>
  );
}
