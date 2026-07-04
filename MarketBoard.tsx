export default function MarketBoard() {
  return (
    <section className="max-w-6xl mx-auto py-16">
      <h2 className="text-3xl font-bold">
        Live Markets
      </h2>

      <div className="grid md:grid-cols-3 gap-6 mt-8">

        <div className="border rounded-xl p-6">
          BTC-PERP
        </div>

        <div className="border rounded-xl p-6">
          SOL-PERP
        </div>

        <div className="border rounded-xl p-6">
          ETH-PERP
        </div>

      </div>
    </section>
  );
}
