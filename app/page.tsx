export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* ファーストビュー */}
      <section className="text-center py-24 px-4">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          福岡エリア対応｜24時間365日<br />
          レッカー・事故車引き取り
        </h1>

        <p className="mt-6 text-gray-300">
          最短30分で現場到着<br />
          アメ車・輸入車も対応可能
        </p>

        <p className="mt-2 text-gray-400">
          年間対応実績1000件以上
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="tel:あなたの電話番号"
            className="bg-white text-black px-6 py-3 rounded-xl font-bold"
          >
            今すぐ電話（24時間対応）
          </a>

          <a
            href="あなたのLINEリンク"
            className="border border-white px-6 py-3 rounded-xl"
          >
            LINEで相談
          </a>
        </div>
      </section>

      {/* 強み */}
      <section className="bg-white text-black py-16 px-6">
        <h2 className="text-2xl font-bold text-center">選ばれる理由</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
          <div className="border p-6 rounded-xl">
            <h3 className="font-bold">24時間365日対応</h3>
            <p className="mt-2 text-sm">
              深夜・早朝・緊急でもすぐ対応します。
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold">アメ車対応可能</h3>
            <p className="mt-2 text-sm">
              輸入車・アメ車の対応も可能です。
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold">迅速対応</h3>
            <p className="mt-2 text-sm">
              福岡エリア最短30分で現場到着。
            </p>
          </div>
        </div>
      </section>

      {/* サービス */}
      <section className="py-16 px-6">
        <h2 className="text-2xl font-bold text-center">サービス内容</h2>

        <div className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold">レッカー引き取り</h3>
            <p className="text-sm mt-2">
              事故車・故障車を24時間対応で引き取り。
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold">中古車販売（アメ車強い）</h3>
            <p className="text-sm mt-2">
              アメ車・輸入車の取り扱いに強み。
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold">軽運送事業</h3>
            <p className="text-sm mt-2">
              委託・請負どちらも対応可能。
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold">黒ナンバーサポート</h3>
            <p className="text-sm mt-2">
              取得支援・代車貸出・コンサル対応。
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold">事業用軽車両販売</h3>
            <p className="text-sm mt-2">
              軽幌・軽バン・軽トラ・冷蔵車など。
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold">物流事業</h3>
            <p className="text-sm mt-2">
              法人向け物流サービス対応。
            </p>
          </div>

        </div>
      </section>

      {/* CTA（中） */}
      <section className="text-center py-16">
        <a
          href="tel:あなたの電話番号"
          className="bg-white text-black px-6 py-3 rounded-xl font-bold"
        >
          今すぐ電話（24時間対応）
        </a>
      </section>

      {/* CTA（下） */}
      <section className="bg-white text-black text-center py-16">
        <h2 className="text-xl font-bold">
          事故・故障など緊急時はすぐご連絡ください
        </h2>

        <div className="mt-6">
          <a
            href="tel:あなたの電話番号"
            className="bg-black text-white px-6 py-3 rounded-xl font-bold"
          >
            電話する
          </a>
        </div>
      </section>

    </main>
  );
}
