import Image from "next/image";
import NavBar from "@/components/navbar";
import Form from "@/components/form";
import Service from "@/components/service";
import Post from "@/components/post";
import '@/app/globals.css'

export default function Home() {
    return (
    <main className="lg:text-lg">
      <NavBar />
      <section className="text-black h-screen px-[50px] py-[100px] md:px-[100px]" id="acuell">
        <div className="flex flex-col justify-end items-start h-full gap-[20px] md:max-w-[60%] pb-[50px]">
          <h1 className="text-4xl md:text-5xl"><b>Ballet et marketing de projets sociaux et humanitaires</b></h1>
          <h2 className="">Humaid transforme les entités sociales en leaders digitaux</h2>
          <a href="#services" className="py-3 px-9 bg-black text-white border-[1px] border-black rounded-full hover:bg-white hover:text-black">Découvir comment</a>
        </div>
      </section>
      <section className="bg-primary py-[50px] px-[50px] md:px-[100px]" id="services">
        <div className="max-w-[400px] mx-auto py-[50px] md:max-w-full">
          <div className="text-center mx-auto">
            <h2 className="text-4xl">Service's</h2>
            <p className="">Humaid propose des solutions efficces et personnalisées:</p>
          </div>
          <div className="flex flex-col justify-start items-start py-[50px] gap-[50px] md:flex-row">
            <div className="flex flex-col justify-center items-start gap-[30px]">
              <Service image="/estrategia.png" service="Stratégie de marketing digital" description="Audit et création de stratégies de communication efficaces et personnalisées pour atteindre les objectifs et développer les réseaux sociaux." />
              <Service image="/estrategia-de-contenido.png" service="Création de Contenu" description="Rédaction d'articles pour les blogs, conception d'infographies et logos, Motion Design et réalisation et montage de vidéos lors de missions humanitaires." />
              <Service image="/seo.svg" service="Optimisation pour les Moteurs de Recherche (SEO)" description="Audit du site web pour identifier les axes d'amélioration, stratégie de mots-clés et optimisation des contenus pour améliorer le référencement sur Google." />
            </div>
            <div className="flex flex-col justify-center items-start gap-[30px]">
              <Service image="/marketing-email.svg" service="Campagnes Publicitaires et Mailing" description="Gestion de la publicité (SEM), mise en œuvre de stratégies d'Email Marketing avec un design de newsletter attractif et suivi des résultats." />
              <Service image="/marketing-laptop.svg" service="Analyse des métriques et reporting" description="Fournir des rapports clairs et compréhensibles avec des recommandations d'actions spécifiques." />
              <Service image="/online-course.svg" service="Formation et mise à jour continue " description="Accès à du matériel de formation exclusif d'Humaid et à des outils de marketing digital pour automatiser les équipes et améliorer l'efficience de l'organisation à long terme." />
            </div>
          </div>
          <div className="flex flex-col justify-start items-center gap-[25px] py-[50px] md:flex-row">
            <div className="w-full flex justify-end items-center">
              <div className="max-w-[350px] md:max-w-[80%] relative">
                <Image
                  src='/professional.avif'
                  alt='Professional'
                  width={720}
                  height={808}
                  sizes='fill'
                />
                <div className="flex justify-center items-center gap-[25px] bg-black text-white py-3 px-4 absolute bottom-[25px] left-0 right-[25px] md:-left-[50px] md:right-[50px] max-w-[400px]">
                  <div>
                    <p className="text-2xl lg:text-3xl"><b>+20</b></p>
                    <p className="lg:text-lg">Projects soutenus</p>
                  </div>
                  <div>
                    <p className="text-2xl lg:text-3xl"><b>5</b></p>
                    <p className="lg:text-lg">Ans d'experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-[15px] w-full md:px-[50px] lg:px-[100px]">
              <p className="text-3xl">Je suis Ariadna, consultante en marketing digital de projets sociaux et humanitaires</p>
              <p>Depuis 5 ans, je me spécialise dans les stratégies de contenu et de marketing pour aider les ONG internationales à atteindre leurs objectifs de visibilité et d'impact.</p>
              <a href="#contact" className="py-3 px-9 bg-black text-white border-[1px] border-black rounded-full my-[15px] hover:bg-white hover:text-black">Réserve audit gratuit</a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-secondary text-primary py-[50px] px-[50px] md:px-[100px]" id="a propos">
        <div className="max-w-[400px] mx-auto md:max-w-full flex flex-col justify-center items-start gap-[30px] md:flex-row">
          <div className="flex flex-col justify-center items-start gap-[30px] w-full">
            <h2 className="text-4xl text-center">A propos d'Humaid</h2>
            <p>On a soutenu plus de 20 projets de coopération et d'aide humanitaire liés à la santé, à l'éducation, à l'accès à l'eau, à la migration et à la protection de l'enfance.</p>
            <p>Et avec une notable expérience en missions humanitaires dans des pays tels que le Sénégal, le Maroc, le Togo et le Bénin.</p>
            <p className="hidden md:block">Notre objectif ? Devenir une référence en communication pour les ONG internationales et d'automatiser de petites équipes pour assurer un marketing efficace et durable.</p>
          </div>
          <div className="w-full max-w-[400px] flex justify-center items-center md:max-w-[80%]">
            <Image
              src='/photo.avif'
              alt='Photo'
              width={720}
              height={685}
              sizes="fill"
            />
          </div>
          <p className="block md:hidden">Notre objectif ? Devenir une référence en communication pour les ONG internationales et d'automatiser de petites équipes pour assurer un marketing efficace et durable.</p>
        </div>
      </section>
      <section className="min-h-[75vh] bg-primary py-[50px] px-[50px] md:px-[100px] py-[50px] flex items-center" id="blog">
        <div className="max-w-[400px] mx-auto flex flex-col justify-center items-center gap-[30px] md:max-w-full md:flex-row md:items-start">
          <Post image="/photo-post.avif" title="La couverture des crises humanitaires par les médias :" previewContent="Éthique, responsabilité et défis" />
          <Post image="/photo-post-two.avif" title="Le rôle des ONG dans la crise des réfugiés en Europe :" previewContent="Communication, impact et perspectives" />
          <Post image="/photo-post-three.avif" title="L'impact de la crise climatique sur les communautés vulnérables :" previewContent="Comment la communication peut générer la sensibilisation et l'action ?" />
        </div>
      </section>
      <section className="text-white py-[50px] px-[50px] md:px-[100px] min-h-[75vh] flex flex-col md:justify-center md:items-start relative">
        <div className="absolute w-full h-full top-0 left-0 -z-50 bg-secondary">
          <Image 
            src='/secondary-background.avif'
            alt='Secondary Background'
            width={3840}
            height={2560}
            className="object-cover w-full h-full"
          />
          <div className="opacity w-full h-full absolute top-0 left-0"></div>
        </div>
        <div className="max-w-[400px] mx-auto md:max-w-[60%] md:mx-0">
          <h2 className="text-4xl">As-tu un projet à développer ?</h2>
          <p className="text-xl mt-[15px] mb-[30px]">On peut t'aider à donner vie à tes idées. Discutons de ce que nous pouvons construire ensemble pour créer plus d'impact !</p>
          <a href="#contact" className="py-3 px-9 rounded-full border-[1px] border-black bg-black text-white hover:bg-white hover:text-black">Contacter</a>
        </div>
      </section>
      <section className="bg-primary py-[50px] px-[50px] md:px-[100px]" id="contact">
        <div className="max-w-[400px] mx-auto py-[50px] md:max-w-full">
          <h2 className="text-4xl text-center">Contact</h2>
          <Form />
        </div>
      </section>
      <footer className="bg-secondary text-primary px-[30px] md:px-[100px] text-base">
        <div className="max-w-[400px] mx-auto py-[25px] text-center flex flex-col md:max-w-full md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col justify-center items-center gap-[10px] my-[25px] md:flex-row md:gap-[30px]">
            <p className="">© Humaid Communication</p>
            <a href=""><u>ariadna@humaidcommunication.com</u></a>
          </div>
          <nav className="flex justify-center items-center gap-[30px]">
            <ul className="">
              <li><a href=""><u>Terms et conditions</u></a></li>
            </ul>
            <ul>
              <li><a href=""><u>Politique de confidentialté</u></a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </main>
  );
}
