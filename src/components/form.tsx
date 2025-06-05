export default function Form() {
    return (
        <>
            <form action="" className="max-w-[750px] mx-auto">
                <div className="flex flex-col justify-center items-start my-[20px] gap-[5px]">
                  <label htmlFor="prénom">Nom et prénom*</label>
                  <input type="text" name="prénom" id="prénom" placeholder="Nom et prénom" required className="w-full px-2 py-3 border-[1px] border-gray-500 rounded-[5px]" />
                </div>
                <div className="flex flex-col justify-center items-start my-[20px] gap-[5px]">
                  <label htmlFor="societé">Nom de la societé</label>
                  <input type="text" name="societé" id="societé" placeholder="Nom de la societé" className="w-full px-2 py-3 border-[1px] border-gray-500 rounded-[5px]" />
                </div>
                <div className="flex flex-col justify-center items-start my-[20px] max-w-[750px] mx-auto">
                  <label htmlFor="email">E-mail*</label>
                  <input type="email" name="email" id="email" placeholder="E-mail" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" className="w-full px-2 py-3 border-[1px] border-gray-500 rounded-[5px]" />
                </div>
                <div className="flex flex-col justify-center items-start my-[20px] gap-[5px]">
                  <label htmlFor="message">Message*</label>
                  <textarea name="message" id="message" placeholder="Message" required className="w-full px-2 py-3 h-[150px] resize-none border-[1px] border-gray-500 rounded-[5px]"></textarea>
                </div>
                <div className="flex justify-center items-center w-full my-[20px] gap-[5px]">
                  <input type="submit" value="Envoye" className="btn-secondary py-3 px-9 w-full rounded-full cursor-pointer text-lg" />
                </div>
            </form>
        </>
    )
}