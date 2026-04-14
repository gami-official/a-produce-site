export default function Works() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* タイトル */}
      <section className="text-center py-20 px-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          対応実績
        </h1>

        <p className="mt-6 text-gray-300">
          これまでの対応事例の一部をご紹介します
        </p>
      </section>

      {/* 実績一覧 */}
      <section className="bg-white text-black py-16 px-6">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          <div className="border p-6 rounded-xl">
            <h2 className="font-bold">事故車レッカー</h2>
            <p className="text-sm mt-2">
              夜間の事故現場にて迅速対応
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h2 className="font-bold">故障車搬送</h2>
            <p className="text-sm mt-2">
              エンジントラブル車を安全に搬送
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h2 className="font-bold">アメ車対応</h2>
            <p className="text-sm mt-2">
              輸入車・アメ車のレッカー対応
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h2 className="font-bold">バッテリー上がり</h2>
            <p className="text-sm mt-2">
              現地で迅速対応
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h2 className="font-bold">動かない車の引き取り</h2>
            <p className="text-sm mt-2">
              放置車・長期不動車も対応
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h2 className="font-bold">法人案件</h2>
            <p className="text-sm mt-2">
              物流・業務車両の対応実績あり
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16">
        <a
          href="tel:0922925881"
          className="bg-white text-black px-6 py-3 rounded-xl font-bold"
        >
          📞 今すぐ電話（24時間対応）
        </a>
      </section>

      {/* 固定ボタン */}
      <div className="fixed bottom-0 left-0 w-full bg-black p-4 flex justify-center">
        <a
          href="tel:0922925881"
          className="bg-white text-black px-6 py-3 rounded-xl font-bold w-full text-center"
        >
          📞 今すぐ電話
        </a>
      </div>

    </main>
  );
}
