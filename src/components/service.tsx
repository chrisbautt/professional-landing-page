interface ServiceProps {
    image: string;
    service: string;
    description: string;
}

export default function Service({ image, service, description }: ServiceProps) {
    return (
        <>
            <div className="max-w-[400px] min-h-[150px] flex flex-col justify-start items-center gap-[15px] md:flex-row md:max-w-[600px]">
                <div className="max-full flex justify-center items-center">
                    <img src={image} alt={service} className="max-w-[100px]" />
                </div>
                <div>
                    <p className="text-lg mb-[5px]"><b>{service}</b></p>
                    <p>{description}</p>
                </div>
            </div>
        </>
    );
}
