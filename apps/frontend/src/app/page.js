import TrademarkCalculator from '@/components/TrademarkCalculator';

export default async function Home() {
  async function getTrademarkClasses() {
    //TODO move to config
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/classes`);
    return res.json();
  }
  const trademarkClasses = await getTrademarkClasses();

  return (
    <div className="font-sans min-h-screen p-6 pb-16 sm:p-12">
      <header className="w-full text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Trademark Registration Calculator
        </h1>
      </header>

      <section className="flex flex-col gap-8 w-full">
        <TrademarkCalculator trademarkClasses={trademarkClasses} />
      </section>

      <footer className="flex gap-6 flex-wrap items-center justify-center mt-8"></footer>
    </div>
  );
}
