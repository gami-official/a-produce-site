export default function Blog() {
  return (
    <main className="bg-black text-white min-h-screen">

      <section className="text-center py-20 px-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          お役立ち情報
        </h1>

        <p className="mt-6 text-gray-300">
          レッカー・軽運送・車に関する情報を発信
        </p>
      </section>

      <section className="bg-white text-black py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-6">

          <a href="/blog/1" className="block border p-6 rounded-xl">
            <h2 className="font-bold">事故車をレッカーする流れ</h2>
            <p className="text-sm mt-2">初めての方でも安心して依頼できます</p>
          </a>

          <a href="/blog/2" className="block border p-6 rounded-xl">
            <h2 className="font-bold">レッカー料金の目安とは？</h2>
            <p className="text-sm mt-2">知らないと損するポイント解説</p>
          </a>

        </div>
      </section>

    </main>
  );
}
