export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* ファーストビュー */}
      <section className="text-center py-24 px-4">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          福岡エリア対応｜24時間365日<br />
          事故車・故障車レッカー
        </h1>

        <p className="mt-6 text-gray-300">
          最短30分で現場到着｜夜間・緊急対応OK<br />
          アメ車・輸入車も対応可能
        </p>

        <p className="mt-2 text-red-400 font-bold">
          緊急対応OK｜今すぐお電話ください
        </p>

        <p className="mt-2 text-gray-400">
          年間対応実績1000件以上
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
  <a href="tel:0922925881" className="bg-white text-black px-6 py-3 rounded-xl font-bold">
    📞 今すぐ電話（24時間対応）
  </a>

  <a href="https://line.me/R/ti/p/%40394fvejx" className="border border-white px-6 py-3 rounded-xl">
    LINEで相談
  </a>
          <a href="/delivery" className="border border-white px-6 py-3 rounded-xl">
  軽運送を見る
</a>

  <a href="/price" className="border border-white px-6 py-3 rounded-xl">
    料金を見る
  </a>
</div>
      </section>

      {/* 安心訴求 */}
      <section className="bg-white text-black py-16 px-6 text-center">
        <h2 className="text-2xl font-bold">安心してご依頼いただけます</h2>

        <div className="mt-10 space-y-3">
          <p>✔ 明確な料金説明</p>
          <p>✔ 無理な営業なし</p>
          <p>✔ 迅速・丁寧対応</p>
        </div>
      </section>

      {/* 対応内容 */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold">対応内容</h2>

        <div className="mt-10 space-y-3">
          <p>・事故車のレッカー引き取り</p>
          <p>・故障車の搬送</p>
          <p>・バッテリー上がり</p>
          <p>・エンジントラブル</p>
          <p>・動かない車の引き取り</p>
        </div>
      </section>

      {/* 強み */}
      <section className="bg-white text-black py-16 px-6">
        <h2 className="text-2xl font-bold text-center">当社の強み</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
          <div className="border p-6 rounded-xl">
            <h3 className="font-bold">24時間365日対応</h3>
            <p className="mt-2 text-sm">
              深夜・早朝でもすぐ対応可能
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold">アメ車対応</h3>
            <p className="mt-2 text-sm">
              輸入車・アメ車も対応可能
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold">スピード対応</h3>
            <p className="mt-2 text-sm">
              最短30分で現場到着
            </p>
          </div>
        </div>
      </section>

      {/* サービス */}
      <section className="py-16 px-6">
        <h2 className="text-2xl font-bold text-center">その他サービス</h2>
        <a
  href="/works"
  className="border border-white px-6 py-3 rounded-xl"
>
  実績を見る
</a>

        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold">中古車販売</h3>
            <p className="text-sm mt-2">
              アメ車・輸入車に強い販売対応
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold">軽運送事業</h3>
            <p className="text-sm mt-2">
              委託・請負どちらも対応可能
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold">黒ナンバー支援</h3>
            <p className="text-sm mt-2">
              取得・代車・コンサル対応
            </p>
          </div>

        </div>
      </section>

      {/* CTA（中） */}
      <section className="text-center py-16">
        <a
          href="tel:0922925881"
          className="bg-white text-black px-6 py-3 rounded-xl font-bold"
        >
          📞 今すぐ電話（24時間対応）
        </a>
      </section>

      {/* CTA（下） */}
      <section className="bg-white text-black text-center py-16">
        <h2 className="text-xl font-bold">
          事故・故障など緊急時はすぐご連絡ください
        </h2>

        <div className="mt-6">
          <a
            href="tel:0922925881"
            className="bg-black text-white px-6 py-3 rounded-xl font-bold"
          >
            今すぐ電話する
          </a>
        </div>
      </section>

      {/* 固定電話ボタン */}
      <div className="fixed bottom-0 left-0 w-full bg-black p-4 flex justify-center">
        <a
          href="tel:0922925881"
          className="bg-white text-black px-6 py-3 rounded-xl font-bold w-full text-center"
        >
          📞 今すぐ電話（24時間対応）
        </a>
      </div>

    </main>
  );
}
