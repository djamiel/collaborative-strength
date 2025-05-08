import Button from "./components/Button";

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative w-[100vw] h-[100vh] overflow-hidden bg-black">
        {/* Background video */}
        <video
          className="fixed inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.6)" }}
          src="/background.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Content container */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-[5vw] text-center">
          <p className="text-[1.5vw] font-bold tracking-widest mb-[1.5vw] text-[var(--light-gray)] pt-[8vw] pb-[1.5vw] opacity-80">
            COLLABORATIVE STRENGTH.
          </p>

          {/* Hoofdtitel - zonder witte achtergrond */}
          <h1 className="text-[5.5vw] font-black leading-[5vw] mb-[3vw] max-w-[80vw] text-[var(--light-gray)] relative">
            <span className="text-[var(--light-gray)] mix-blend-difference inline-block pb-[4vw]">
              POWERLIFTING COACHING <br /> OP INDIVIDUELE BASIS
            </span>
          </h1>

          <div>
            <Button href="/contact" text="BOEK EEN GESPREK" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-[2vw] right-[2vw] z-30 flex items-center text-[var(--light-gray)] text-[1.5vw] animate-bounce">
          <span className="mr-[1vw]">Scroll down</span>
          <svg
            className="w-[2vw] h-[2vw]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* Section 2 */}
      <section className="relative w-[100vw] min-h-[100vh] bg-[var(--light-gray)] text-black px-[5vw] py-[10vh]">
        <div className="text-[3vw]">hello worldskjsdbnisjdnbcs</div>
      </section>
    </div>
  );
}
