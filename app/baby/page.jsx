import logo from "./love.jpg";

export default function Baby() {
  return (
    <>
      <main className="h-screen justify-center flex flex-col items-center">
        <img src={logo.src} alt="" />
        <h1 className="text-red-500">Θα γίνεις η βαλεντίνα μου ;</h1>
      </main>{" "}
    </>
  );
}
