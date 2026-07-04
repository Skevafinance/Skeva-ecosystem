export default function EscrowOverview() {
  return (
    <section className="max-w-5xl mx-auto py-20">
      <div className="grid md:grid-cols-4 gap-6">

        <div className="border rounded-xl p-6">
          TVL
          <h2>$86.4M</h2>
        </div>

        <div className="border rounded-xl p-6">
          Escrow
          <h2>$24.7M</h2>
        </div>

        <div className="border rounded-xl p-6">
          Open Interest
          <h2>$52.9M</h2>
        </div>

        <div className="border rounded-xl p-6">
          Solvency
          <h2>100%</h2>
        </div>

      </div>
    </section>
  );
}
