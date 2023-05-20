import Image from "next/image"

export default function _Image( {src, alt, priority } = props) {

    const prty = priority ? true : false

    return (
        <div>
            <Image 
                src={src}
                alt={alt}
                width={800}
                height={800}
                priority={prty}
            />
        </div>
    )
}
