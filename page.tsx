export default function Wrecker() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* ファーストビュー */}
      <section className="text-center py-24 px-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          事故車・故障車<br />
          即レッカー対応
        </h1>

        <p className="mt-6 text-gray-300">
          24時間365日対応｜夜間・緊急OK<br />
          最短30分で現場到着
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a href="tel:あなたの番号" className="bg-white text-black px-6 py-3 rounded-xl font-bold">
            今すぐ電話
          </a>

          <a href="あなたのLINE" className="border border-white px-6 py-3 rounded-xl">
            LINE相談
          </a>
        </div>
      </section>

      {/* 対応内容 */}
      <section className="bg-white text-black py-16 px-6">
        <h2 className="text-2xl font-bold text-center">対応内容</h2>

        <div className="mt-10 space-y-4 max-w-xl mx-auto text-center">
          <p>・事故車のレッカー引き取り</p>
          <p>・故障車の搬送</p>
          <p>・バッテリー上がり</p>
          <p>・エンジントラブル</p>
          <p>・動かない車の引き取り</p>
        </div>
      </section>

      {/* 強み */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold">当社の強み</h2>

        <div className="mt-10 space-y-4">
          <p>✔ 24時間365日対応</p>
          <p>✔ 夜間・緊急でも即対応</p>
          <p>✔ アメ車・輸入車対応可能</p>
          <p>✔ スピード対応</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white text-black text-center py-16">
        <h2 className="text-xl font-bold">
          緊急時はすぐご連絡ください
        </h2>

        <div className="mt-6">
          <a href="tel:あなたの番号" className="bg-black text-white px-6 py-3 rounded-xl font-bold">
            今すぐ電話する
          </a>
        </div>
      </section>

    </main>
  );
}
