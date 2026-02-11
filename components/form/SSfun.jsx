export async function xfunction(prevState, formData) {
  return {
    sktemaxia: formData.get("sktemaxia"),
    rixtemaxia: formData.get("rixtemaxia"),
    rixmikos: formData.get("rixmikos"),
    rixplatos: formData.get("rixplatos"),
    sovtemaxia: formData.get("sovtemaxia"),
    sovmikos: formData.get("sovmikos"),
    sovplatos: formData.get("sovplatos"),
    process: formData.get("process"),
  };
}
