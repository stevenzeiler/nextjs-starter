import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <Image
        src="/zenlens-logo.png"
        alt="ZenLens"
        width={512}
        height={512}
        priority
        className="h-auto w-[60vmin] max-w-[512px]"
      />
    </main>
  );
}
