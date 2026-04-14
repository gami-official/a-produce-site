export default function Car() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* タイトル */}
      <section className="text-center py-24 px-4">
        <h1 className="text-3xl md:text-5xl font-bold">
          中古車販売（アメ車・輸入車対応）
        </h1>

        <p className="mt-6 text-gray-300">
          アメ車・輸入車に強い中古車販売<br />
          ご希望に合わせた車両をご提案します
        </p>
      </section>

      {/* 強み */}
      <section className="bg-white text-black py-16 px-6 text-center">
        <h2 className="text-2xl font-bold">当社の強み</h2>

        <div className="mt-10 space-y-3">
          <p>✔ アメ車・輸入車対応</p>
          <p>✔ ご希望に合わせた仕入れ可能</p>
          <p>✔ 全国対応可能</p>
        </div>
      </section>

      {/* 在庫 */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-2xl font-bold">在庫車両</h2>

        <p className="mt-6 text-gray-300">
          最新の在庫はこちらからご確認ください
        </p>

        <div className="mt-8">
          <a
            href="https://www.carsensor.net/shop/fukuoka/315192001/stocklist/"
            className="bg-white text-black px-6 py-3 rounded-xl font-bold"
            target="_blank"
          >
            在庫一覧を見る（カーセンサー）
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white text-black text-center py-16">
        <h2 className="text-xl font-bold">
          車探し・購入のご相談はこちら
        </h2>

        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <a
            href="tel:0922925881"
            className="bg-black text-white px-6 py-3 rounded-xl font-bold"
          >
            📞 電話する
          </a>

          <a
            href="https://line.me/R/ti/p/%40394fvejx"
            className="border border-black px-6 py-3 rounded-xl"
          >
            LINE相談
          </a>
        </div>
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
