export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* ファーストビュー */}
      <section className="text-center py-24 px-4">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          福岡で24時間365日対応<br />
          レッカー・事故車引き取り
        </h1>

        <p className="mt-6 text-gray-300">
          夜間・緊急OK / 最短対応<br />
          事故車・故障車も対応可能
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a
            href="tel:092-284-9392"
            className="bg-white text-black px-6 py-3 rounded-xl font-bold"
          >
            今すぐ電話
          </a>
          <a
            href="#"
            className="border border-white px-6 py-3 rounded-xl"
          >
            LINE相談
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
              深夜・早朝でも即対応可能。緊急時も安心です。
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold">アメ車対応OK</h3>
            <p className="mt-2 text-sm">
              国産車はもちろん、アメ車の対応も可能です。
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold">福岡全域対応</h3>
            <p className="mt-2 text-sm">
              福岡市・近郊エリア迅速対応します。
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
              事故車・故障車を24時間対応で引き取り可能。
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold">中古車販売（アメ車強い）</h3>
            <p className="text-sm mt-2">
              アメ車・輸入車の取り扱いに強みがあります。
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold">軽運送事業</h3>
            <p className="text-sm mt-2">
              委託・請負どちらも対応可能です。
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold">黒ナンバーサポート</h3>
            <p className="text-sm mt-2">
              取得支援・代車貸出・コンサルまで対応。
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold">事業用軽車両販売</h3>
            <p className="text-sm mt-2">
              軽幌・軽バン・軽トラック・冷蔵車など。
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="font-bold">物流事業</h3>
            <p className="text-sm mt-2">
              法人向け物流サービスも対応可能。
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-center py-16">
        <h2 className="text-2xl font-bold">
          まずはお気軽にご相談ください
        </h2>

        <p className="mt-4 text-gray-400">
          24時間いつでも対応可能です
        </p>

        <div className="mt-6">
          <a
            href="tel:0000000000"
            className="bg-white text-black px-6 py-3 rounded-xl font-bold"
          >
            電話する
          </a>
        </div>
      </section>

    </main>
  );
}