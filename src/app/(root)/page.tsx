import StartupCard from '@/components/StartupCard'

const Page = () => {
  return (
    <section className="pink-container">
      <div className="bg-[#EE2B69] p-10 text-center">
        <div className="font-bold m-auto px-4 py-3 bg-[#FBE843]">PITCH,VOTE AND GROW</div>
        <div className="bg-black text-white font-bold lg:text-[64px]  mx-auto my-4 p-3">
          PITCH YOUR STARTUP, <br /> CONNECT WITH ENTREPRENEURS
        </div>
        <div className="text-xl text-white">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </div>
      </div>
      <StartupCard />
    </section>
  )
}

export default Page
