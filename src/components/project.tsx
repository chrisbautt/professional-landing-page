import Image from "next/image";

interface ProjectProps {
    image: string;
    name: string;
    previewContent: string;
}

export default function Project({ image, name, previewContent }: ProjectProps) {
    return (
        <>
            <div>
                <a href="">
                    <Image 
                        src={image}
                        alt={name}
                        width={1800}
                        height={1080}
                        sizes="fill" 
                        className="rounded-[10px]"
                    />
                </a >
                <div className="mt-[10px]">
                    <h3 className="uppercase text-lg text-[#111] md:hover:text-black"><a href=""><b>{name}</b></a></h3>
                    <p>{previewContent}</p>
                </div>
            </div>
        </>
    )
}