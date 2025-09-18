import Image from "next/image";
import NavBar from "@/components/navbar";
import Form from "@/components/form";
import Service from "@/components/service";
import Project from "@/components/project";
import "@/app/globals.css"

export default function Home() {
    return (
    <main>
      <NavBar />
      <section className="relative h-screen overflow-hidden text-[#E2E8DD] flex justify-start items-center pt-[100px] px-[25px] md:px-[100px]" id="acuell">
        <div className="absolute w-full h-full bg-[#111111] top-0 left-0 -z-30">
          <Image 
            src="/bussines-woman-size-reduce.jpg"
            alt="background"
            width={7360}
            height={4912}
            className="object-cover w-full h-full"
          />
          <div className="bg-[rgba(0,0,0,.8)] w-full h-full absolute top-0 left-0"></div>
        </div>
        <div className="max-w-[750px]">
          <h1 className="text-4xl md:text-5xl leading-tight md:leading-none"><b>Wallet et marketing de projets sociaux et humanitaires</b></h1>
          <h2 className="mt-[10px] mb-[40px] text-lg text-[#cccccc]">Humaid transforme les entités sociales en leaders digitaux</h2>
          <a href="#services" className="btn-primary py-3 px-9 rounded-full text-lg">Découvir comment</a>
        </div>
      </section>
      <section className="bg-[#E2E8DD] py-[50px] px-[25px] md:px-[100px]" id="services">
        <div className="mx-auto py-[50px]">
          <div className="text-center mx-auto">
            <h2 className="text-4xl my-[5px]">Services</h2>
            <p className="text-lg">Humaid propose des solutions efficces et personnalisées:</p>
          </div>
          <div className="flex flex-col justify-start items-center my-[50px] gap-[50px] md:flex-row md:justify-center">
            <div className="flex flex-col justify-center items-start gap-[50px] md:gap-[25px]">
              <Service image="/estrategia.png" service="Stratégie de marketing digital" description="Audit et création de stratégies de communication efficaces et personnalisées pour atteindre les objectifs et développer les réseaux sociaux." />
              <Service image="/estrategia-de-contenido.png" service="Création de Contenu" description="Rédaction darticles pour les blogs, conception dinfographies et logos, Motion Design et réalisation et montage de vidéos lors de missions humanitaires." />
              <Service image="/seo.svg" service="Optimisation pour les Moteurs de Recherche (SEO)" description="Audit du site web pour identifier les axes damélioration, stratégie de mots-clés et optimisation des contenus pour améliorer le référencement sur Google." />
            </div>
            <div className="flex flex-col justify-center items-start gap-[50px] md:gap-[25px]">
              <Service image="/marketing-email.svg" service="Campagnes Publicitaires et Mailing" description="Gestion de la publicité (SEM), mise en œuvre de stratégies d Email Marketing avec un design de newsletter attractif et suivi des résultats." />
              <Service image="/marketing-laptop.svg" service="Analyse des métriques et reporting" description="Fournir des rapports clairs et compréhensibles avec des recommandations d actions spécifiques." />
              <Service image="/online-course.svg" service="Formation et mise à jour continue " description="Accès à du matériel de formation exclusif d Humaid et à des outils de marketing digital pour automatiser les équipes et améliorer l efficience de l organisation à long terme." />
            </div>
          </div>
          <div className="flex flex-col justify-start items-center gap-[25px] pt-[50px] md:flex-row">
            <div className="w-full flex justify-center items-center md:justify-end">
              <div className="max-w-[500px] md:max-w-[80%] relative">
                <Image
                  src="/professional.avif"
                  alt="Professional"
                  width={720}
                  height={808}
                  sizes="fill"
                />
                <div className="flex justify-center items-center gap-[30px] bg-[#111111] text-[#E2E8DD] py-3 px-4 absolute bottom-[25px] left-0 right-[25px] md:-left-[50px] md:right-[50px] max-w-[90%]">
                  <div>
                    <p className="text-3xl"><b>+20</b></p>
                    <p className="text-lg">Projects soutenus</p>
                  </div>
                  <div>
                    <p className="text-3xl"><b>5</b></p>
                    <p className="text-lg">Ans dexperience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:px-[50px]">
              <p className="text-3xl">Je suis Ariadna, consultante en marketing digital de projets sociaux et humanitaires</p>
              <p className="mt-[10px] mb-[40px]">Depuis 5 ans, je me spécialise dans les stratégies de contenu et de marketing pour aider les ONG internationales à atteindre leurs objectifs de visibilité et dimpact.</p>
              <a href="#contact" className="btn-secondary py-3 px-9 rounded-full text-lg">Réserve audit gratuit</a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#E2E8DD] pt-[100px] pb-[50px] px-[25px] md:px-[100px]" id="a propos">
        <div className="mx-auto flex flex-col justify-center items-start gap-[30px] md:flex-row">
          <div className="w-full">
            <h2 className="text-4xl mb-[25px]">A propos dHumaid</h2>
            <p className="paragraph">On a soutenu plus de 20 projets de coopération et daide humanitaire liés à la santé, à léducation, à laccès à leau, à la migration et à la protection de lenfance.</p>
            <p className="paragraph">Et avec une notable expérience en missions humanitaires dans des pays tels que le Sénégal, le Maroc, le Togo et le Bénin.</p>
            <p className="paragraph hidden md:block">Notre objectif Devenir une référence en communication pour les ONG internationales et dautomatiser de petites équipes pour assurer un marketing efficace et durable.</p>
          </div>
          <div className="w-full flex justify-center items-center md:max-w-[80%]">
            <Image
              src="/photo.avif"
              alt="Photo"
              width={720}
              height={685}
              sizes="fill"
            />
          </div>
          <p className="paragraph block md:hidden">Notre objectif Devenir une référence en communication pour les ONG internationales et dautomatiser de petites équipes pour assurer un marketing efficace et durable.</p>
        </div>
      </section>
      <section className="bg-[#E2E8DD] py-[100px] px-[50px] md:px-[100px]" id="projets">
        <div className="text-center mx-auto">
          <h2 className="text-4xl my-[5px]">Projets</h2>
          <p className="text-lg">Humaid propose des solutions efficces et personnalisées:</p>
        </div>
        <div className="max-w-[400px] mt-[50px] mx-auto flex flex-col justify-center items-center gap-[50px] md:gap-[30px] md:max-w-full md:flex-row md:items-start">
          <Project image="/photo-post.avif" name="La couverture des crises humanitaires par les médias :" previewContent="Éthique, responsabilité et défis" />
          <Project image="/photo-post-two.avif" name="Le rôle des ONG dans la crise des réfugiés en Europe :" previewContent="Communication, impact et perspectives" />
          <Project image="/photo-post-three.avif" name="L impact de la crise climatique sur les communautés vulnérables :" previewContent="Comment la communication peut générer la sensibilisation et l action ?" />
        </div>
      </section>

      <section className="text-[#E2E8DD] py-[50px] px-[50px] md:px-[100px] min-h-[75vh] flex flex-col justify-center md:items-start">
        <div className="fixed w-full h-[100vh] top-0 left-0 -z-50">
          <Image 
            src="/secondary-background.avif"
            alt="Secondary Background"
            width={3840}
            height={2560}
            className="object-cover w-full h-full"
          />
          <div className="bg-[rgba(0,0,0,.7)] w-full h-full absolute top-0 left-0"></div>
        </div>
        <div className="max-w-[750px] mx-auto md:mx-0">
          <h2 className="text-4xl">As-tu un projet à développer ?</h2>
          <p className="text-lg mt-[15px] mb-[40px]">On peut taider à donner vie à tes idées. Discutons de ce que nous pouvons construire ensemble pour créer plus dimpact</p>
          <a href="#contact" className="py-3 px-9 rounded-full btn-primary text-lg">Contacter</a>
        </div>
      </section>

      <section className="bg-[#E2E8DD] py-[50px] px-[25px] md:px-[100px]" id="contact">
        <div>
          <h2 className="text-4xl text-center">Contact</h2>
          <Form />
        </div>
      </section>

      <footer className="bg-[#111111] text-[#E2E8DD] px-[30px] md:px-[100px]">
        <div className="max-w-[400px] mx-auto py-[25px] text-center flex flex-col md:max-w-full md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col justify-center items-center gap-[10px] my-[25px] md:flex-row md:gap-[30px]">
            <p>© Humaid Communication</p>
            <a href="" className="md:hover:text-white"><u>ariadna@humaidcommunication.com</u></a>
          </div>
          <nav className="flex justify-center items-center gap-[30px]">
            <ul className="">
              <li><a href="" className="md:hover:text-white"><u>Terms et conditions</u></a></li>
            </ul>
            <ul>
              <li><a href="" className="md:hover:text-white"><u>Politique de confidentialté</u></a></li>
            </ul>
          </nav>
        </div>
      </footer>
    </main>
  );
}
