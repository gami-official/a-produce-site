export default function BlogPost() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="py-20 px-6 max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold">
          タイトルここに入れる
        </h1>

        <p className="mt-6 text-gray-300">
          導入文（適当でOK）
        </p>

        <h2 className="mt-10 text-xl font-bold">ポイント①</h2>
        <p className="mt-2">説明を書く</p>

        <h2 className="mt-6 text-xl font-bold">ポイント②</h2>
        <p className="mt-2">説明を書く</p>

        <h2 className="mt-6 text-xl font-bold">ポイント③</h2>
        <p className="mt-2">説明を書く</p>

        <div className="mt-10 text-center">
          <a href="tel:0922925881" className="bg-white text-black px-6 py-3 rounded-xl font-bold">
            📞 今すぐ電話
          </a>
        </div>

      </section>
    </main>
  );
}
