import { InputForm } from "@/components/form/searchForm";
import {} from "@/components/form/SSfun";

export async function xfunction(prevState, formData) {
  const sktemaxia = formData.get("sktemaxia");
  const rixtemaxia = formData.get("rixtemaxia");
  const rixmikos = formData.get("rixmikos");
  const rixplatos = formData.get("rixplatos");
  const sovtemaxia = formData.get("sovtemaxia");
  const sovmikos = formData.get("sovmikos");
  const sovplatos = formData.get("sovplatos");
  const process = formData.get("process");

  // console.log("sktemaxia=", sktemaxia);
  // console.log("rixtemaxia=", rixtemaxia);
  // console.log("rixmikos=", rixmikos);
  // console.log("rixplatos=", rixplatos);
  // console.log("sovtemaxia=", sovtemaxia);
  // console.log("sovmikos=", sovmikos);
  // console.log("sovplatos=", sovplatos);
  // console.log("process=", process);
}

export default function CreatePage() {
  return (
    <>
      <main className="text-center pt-10 justify-center mx-auto w-100 bg-emerald-500 rounded-2xl p-5 gap-10 items-center flex flex-col">
        {/* <h1 className="font-mono text-sm text-center">
          Επίλεξε τα φίλτρα που ταιριάζουν στην παραγγελία σου
        </h1> */}
        <InputForm />
      </main>
    </>
  );
}
