export default function Home() {
  return (
    <main className="bg-white text-black">

      {/* ファーストビュー */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          24時間365日対応<br />
          レッカー・事故車引き取り
        </h1>
        <p className="mt-6 text-lg">
          夜間・緊急対応OK / 即日対応可能<br />
          アメ車・故障車も対応します
        </p>
        <div className="mt-8 space-x-4">
          <a href="tel:0000000000" className="bg-white text-black px-6 py-3 rounded-xl font-bold">
            今すぐ電話
          </a>
          <a href="#" className="border border-white px-6 py-3 rounded-xl">
            LINE相談
          </a>
        </div>
      </section>

      {/* サービス */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center">サービス内容</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold">レッカー引き取り</h3>
            <p className="mt-3 text-sm">
              事故車・故障車を24時間365日対応。夜間でもすぐ駆けつけます。
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold">中古車販売</h3>
            <p className="mt-3 text-sm">
              国産車からアメ車まで対応。特にアメ車の取り扱いに強みがあります。
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold">軽運送業</h3>
            <p className="mt-3 text-sm">
              委託・請負対応。黒ナンバー取得や車両貸出もサポート。
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold">車両販売</h3>
            <p className="mt-3 text-sm">
              軽幌・軽クール・軽トラ・軽バンなど事業用車両を販売。
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold">軽運送コンサル</h3>
            <p className="mt-3 text-sm">
              開業支援・黒ナンバー取得・仕事の取り方まで支援します。
            </p>
          </div>

          <div className="border p-6 rounded-xl">
            <h3 className="text-xl font-bold">物流事業</h3>
            <p className="mt-3 text-sm">
              法人向け物流サービスも対応可能です。
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-16 text-center">
        <h2 className="text-2xl font-bold">
          まずはお気軽にご相談ください
        </h2>
        <p className="mt-4">
          24時間いつでも対応可能です
        </p>
        <div className="mt-6">
          <a href="tel:0000000000" className="bg-white text-black px-6 py-3 rounded-xl font-bold">
            電話する
          </a>
        </div>
      </section>

    </main>
  );
}