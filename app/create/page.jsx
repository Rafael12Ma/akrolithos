import { InputForm } from "@/components/form/searchForm";

export default function CreatePage() {
  return (
    <>
      <main className="text-center h-screen justify-center mx-auto w-100 bg-emerald-500 rounded-2xl p-5 gap-10 items-center flex flex-col">
        <h1 className="font-mono text-sm text-center">
          *Επίλεξε τα φίλτρα που ταιριάζουν στην παραγγελία σου
        </h1>
        {/* <div className="flex justify-evenly">
            <label htmlFor="">Σκάλα</label>
            <select name="" id="">
              0<option value="">-</option>
              <option value="">Καβάλας</option>
              <option value="">Καβάλας Ματ</option>
              <option value="">Κίτρο Σαγρέ</option>
              <option value="">Κίτρο Σφυρήλατη</option>
              <option value="">Γρανίτης Γκρι</option>
              <option value="">Γρανίτης Γκρι Σφυρήλατη</option>
              <option value="">Astron black</option>
              <option value="">Βακτρίς</option>
              <option value="">Puma Dark</option>
              <option value="">Καβάλας</option>
              <option value="">Γαία Ματ</option>
              <option value="">Γαία Σαγρέ</option>
              <option value="">Ιον Σαγρέ</option>
            </select>
          </div>
          <div className="flex justify-evenly">
            <label htmlFor="">Πάχος πατήματος</label>
            <select name="" id="">
              0<option value="">-</option>
              <option value="">3cm</option>
              <option value="">4cm</option>
              <option value="">8cm</option>
              <option value="">15cm</option>
            </select>
          </div>
          <div className="flex justify-evenly">
            <label htmlFor="">Ρίχτυα</label>
            <select name="" id="">
              <option value="">-</option>
              <option value="">a</option>
              <option value="">b</option>
              <option value="">c</option>
              <option value="">d</option>
            </select>
          </div>{" "}
          <div className="flex justify-evenly">
            <label htmlFor="">Σοβατεπί</label>
            <select name="" id="">
              <option value="">-</option>
              <option value="">a</option>
              <option value="">b</option>
              <option value="">c</option>
              <option value="">d</option>
            </select>
          </div>
          <div className="flex justify-evenly">
            <label htmlFor="">Ειδ. Επεξ.</label>
            <select name="" id="">
              <option value="">-</option>
              <option value="">a</option>
              <option value="">b</option>
              <option value="">c</option>
              <option value="">d</option>
            </select>
          </div> */}
        <InputForm />
      </main>
    </>
  );
}
