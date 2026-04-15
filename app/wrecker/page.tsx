export const metadata = {
  title: "福岡のレッカー対応ならA-PRODUCE株式会社 | 事故・故障・緊急対応",
  description:
    "福岡でレッカー対応ならA-PRODUCE株式会社。事故車・故障車・緊急搬送に対応。24時間対応のご相談も可能です。アメ車・輸入車のご相談もお任せください。",
};

export default function WreckerPage() {
  const PHONE_LINK = "tel:092-292-5881";
  const LINE_URL = "https://line.me/R/ti/p/@394fvejx";

  return (
    <main className="bg-black text-white min-h-screen">
      {/* ヒーロー */}
      <section className="relative py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-gray-400">福岡でレッカー対応をお探しの方へ</p>

          <h1 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
            福岡のレッカー対応なら
            <br />
            A-PRODUCE株式会社
          </h1>

          <p className="mt-6 text-gray-300 leading-relaxed">
            事故車・故障車・バッテリー上がり・緊急搬送まで対応。
            <br />
            福岡でレッカーのご相談はお気軽にお問い合わせください。
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href={PHONE_LINK}
              className="bg-white text-black px-6 py-3 rounded-xl font-bold"
            >
              今すぐ電話する
            </a>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-6 py-3 rounded-xl font-bold"
            >
              LINEで相談する
            </a>
          </div>
        </div>
      </section>

      {/* 強み */}
      <section className="py-20 px-6 bg-white text-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center">
            A-PRODUCE株式会社のレッカー対応
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="border border-black/10 rounded-2xl p-6 text-center">
              <h3 className="font-bold text-lg">事故車・故障車に対応</h3>
              <p className="mt-3 text-sm leading-relaxed">
                急なトラブル時も、まずは状況をご相談ください。
                レッカー搬送の流れを分かりやすくご案内します。
              </p>
            </div>

            <div className="border border-black/10 rounded-2xl p-6 text-center">
              <h3 className="font-bold text-lg">福岡エリア対応</h3>
              <p className="mt-3 text-sm leading-relaxed">
                福岡市を中心に、周辺エリアのご相談にも対応。
                緊急時でもできる限り迅速に動きます。
              </p>
            </div>

            <div className="border border-black/10 rounded-2xl p-6 text-center">
              <h3 className="font-bold text-lg">輸入車の相談も可能</h3>
              <p className="mt-3 text-sm leading-relaxed">
                アメ車・輸入車の取り扱い経験を活かし、
                車両に合わせたご相談にも対応しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* こんな時に */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center">
            こんな時はご相談ください
          </h2>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="border border-white/10 rounded-2xl p-6">
              <p>・事故で車が動かない</p>
              <p className="mt-2">・故障で走行できない</p>
              <p className="mt-2">・バッテリー上がりで困っている</p>
              <p className="mt-2">・夜間や緊急時に搬送先を探している</p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6">
              <p>・福岡でレッカー業者を探している</p>
              <p className="mt-2">・輸入車の搬送を相談したい</p>
              <p className="mt-2">・修理先や今後の流れも相談したい</p>
              <p className="mt-2">・まずは電話やLINEで確認したい</p>
            </div>
          </div>
        </div>
      </section>

      {/* 流れ */}
      <section className="py-20 px-6 bg-white text-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center">ご相談の流れ</h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-black/10 p-6 text-center">
              <p className="text-sm text-gray-500">STEP 1</p>
              <h3 className="mt-2 font-bold">電話・LINEで相談</h3>
              <p className="mt-3 text-sm">
                現在地や車の状態をわかる範囲でお伝えください。
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 p-6 text-center">
              <p className="text-sm text-gray-500">STEP 2</p>
              <h3 className="mt-2 font-bold">状況確認・ご案内</h3>
              <p className="mt-3 text-sm">
                搬送方法や対応内容をご案内します。
              </p>
            </div>

            <div className="rounded-2xl border border-black/10 p-6 text-center">
              <p className="text-sm text-gray-500">STEP 3</p>
              <h3 className="mt-2 font-bold">レッカー対応</h3>
              <p className="mt-3 text-sm">
                搬送後のご相談まで含めてサポートします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">
            福岡でレッカー対応が必要な時は
            <br />
            A-PRODUCE株式会社へご相談ください
          </h2>

          <p className="mt-4 text-gray-300">
            まずはお電話またはLINEからお気軽にどうぞ
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href={PHONE_LINK}
              className="bg-white text-black px-6 py-3 rounded-xl font-bold"
            >
              今すぐ電話する
            </a>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-6 py-3 rounded-xl font-bold"
            >
              LINEで相談する
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
