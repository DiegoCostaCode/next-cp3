import Image from "next/image";
import CardFilm from "./components/CardFilm";

export default function Home() {
  return(
    <>
      <main className="flex flex-auto w-full items-center justify-center">

        <div className="flex flex-row flex-wrap align justify-center align items-center">
          <CardFilm
            title="Até o último homem"
            image="img/AteOUltimoHomem.jpg"
            link="https://www.youtube.com/watch?v=4s4UCxCv_OE"
          />
          <CardFilm
            title="The Amazing Spider-Man"
            image="img/theAmazingSpiderMan.jpg"
            link="https://www.youtube.com/watch?v=-tnxzJ0SSOw"
          />

          <CardFilm
            title="Blade Runner 2049"
            image="img/bladeRunner2049.jpg"
            link="https://www.youtube.com/watch?v=gCcx85zbxz4"
          />
          <CardFilm
            title="Até o último homem"
            image="img/AteOUltimoHomem.jpg"
            link="https://www.youtube.com/watch?v=4s4UCxCv_OE"
          />
          <CardFilm
            title="The Amazing Spider-Man"
            image="img/theAmazingSpiderMan.jpg"
            link="https://www.youtube.com/watch?v=-tnxzJ0SSOw"
          />

          <CardFilm
            title="Blade Runner 2049"
            image="img/bladeRunner2049.jpg"
            link="https://www.youtube.com/watch?v=gCcx85zbxz4"
          />
          <CardFilm
            title="Até o último homem"
            image="img/AteOUltimoHomem.jpg"
            link="https://www.youtube.com/watch?v=4s4UCxCv_OE"
          />
          <CardFilm
            title="The Amazing Spider-Man"
            image="img/theAmazingSpiderMan.jpg"
            link="https://www.youtube.com/watch?v=-tnxzJ0SSOw"
          />


        </div>

      </main>
      
    </>
  );
}
