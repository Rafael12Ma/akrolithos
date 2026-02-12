import { products } from "../products/products";

export async function xfunction(prevState, formData) {
  const p = products;

  return {
    product: formData.get("product"),
    sktemaxia: formData.get("sktemaxia"),
    skmikos: formData.get("skmikos"),
    skplatos: formData.get("skplatos"),
    rixtemaxia: formData.get("rixtemaxia"),
    rixmikos: formData.get("rixmikos"),
    rixplatos: formData.get("rixplatos"),
    sovtemaxia: formData.get("sovtemaxia"),
    sovmikos: formData.get("sovmikos"),
    sovplatos: formData.get("sovplatos"),
    process: formData.get("process"),
  };
}
