export default function BlogPost() {
  return (
    <main className="bg-black text-white min-h-screen">

      <section className="py-20 px-6 max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold">
          福岡 レッカー 料金の目安
        </h1>

        <p className="mt-6 text-gray-300">
          レッカー料金がどれくらいかかるのか解説します。
        </p>

        <h2 className="mt-10 text-xl font-bold">
          基本料金
        </h2>
        <p className="mt-2">
          一般的にレッカーは8000円〜が目安です。
        </p>

        <h2 className="mt-6 text-xl font-bold">
          距離料金
        </h2>
        <p className="mt-2">
          搬送距離によって料金が変動します。
        </p>

        <h2 className="mt-6 text-xl font-bold">
          夜間対応
        </h2>
        <p className="mt-2">
          夜間は追加料金がかかる場合があります。
        </p>

        <div className="mt-10 text-center">
          <a href="tel:0922925881" className="bg-white text-black px-6 py-3 rounded-xl font-bold">
            📞 今すぐ電話
          </a>
        </div>

      </section>

    </main>
  );
}
