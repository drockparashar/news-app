import { News } from "./News"

export function Home() {
  return (
    <div className="bg-[#f5f5f5] text-[#333] font-sans">
      <main className="container mx-auto py-8 px-6">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Latest News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <News/>
            <News/>
            <News/>
          </div>
        </section>
      </main>
    </div>
  )
}