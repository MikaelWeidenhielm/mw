import Image from "next/image"

export default function BossImg() {
  return (
    <section>
        <Image 
            src="/images/unsplash.jpg"
            width={200}
            height={200}
            alt="cool pic B)"
            priority={true}
        />
    </section>
  )
}
