export default function Header() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center p-12">
      <h1 className="text-7xl text-black pt-4 pb-6 z-20 font-dancing_script">
        Bon Voyage
      </h1>
      <img
        src="/img/bonVoyage.svg"
        alt="Logo"
        className="w-96 rounded-full cover"
      />
    </div>
  );
}
