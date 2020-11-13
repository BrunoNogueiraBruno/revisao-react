import React from 'react';
function Card(props) {
  return (
    <div className="card">
      <img className="card-img-top" src={props.featureImage} alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.link} className="link">Saiba mais</a>
      </div>
    </div>
  );
}

function CardList() {
return (
  <div>
    <div>
      <Card
        featureImage="https://s2.glbimg.com/slaVZgTF5Nz8RWqGrHRJf0H1PMQ=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/U/e/NTegqdSe6SoBAoQDjKZA/cachorro.jpg"
        title="Cachorro"
        description="O cachorro (nome científico: Canis lupus familiaris),[1] no Brasil também chamado de cachorro, é um mamífero carnívoro da família dos canídeos, subespécie do lobo, e talvez o mais antigo animal domesticado pelo ser humano."
        link="https://pt.m.wikipedia.org/wiki/C%C3%A3o"
      />
    </div>
    <div>
      <Card
        featureImage="https://static.poder360.com.br/2020/04/GATO-CORONAVIRUS.jpg"
        title="Gato"
        description="O gato (Felis silvestris catus), também conhecido como gato caseiro, gato urbano ou gato doméstico,[4] é um mamífero carnívoro da família dos felídeos, muito popular como animal de estimação."
        link="https://pt.m.wikipedia.org/wiki/Gato"
      />
    </div>
    <div>
      <Card
        featureImage="https://i.pinimg.com/originals/7f/f6/99/7ff69990f0b8386eb3deea88f2309956.jpg"
        title="Tartaruga"
        description="Testudinata é um grupo de Diapsida (classicamente considerados Anapsida) caracterizado pela presença de um casco, cuja parte dorsal é chamada de carapaça (fundido às costelas achatadas e à coluna vertebral) e a parte ventral é chamada de plastrão (fundido às clavículas e à interclavícula)."
        link="https://pt.wikipedia.org/wiki/Tartaruga"
      />
    </div>
    <div>
      <Card
        featureImage="https://i.pinimg.com/originals/32/88/c3/3288c38b7d09d1008ef0318dcaed9e2f.jpg"
        title="Leão"
        description="O leão [feminino: leoa] (nome científico: Panthera leo) é uma espécie de mamífero carnívoro do gênero Panthera e da família Felidae. A espécie é atualmente encontrada na África subsaariana e na Ásia, com uma única população remanescente em perigo, no Parque Nacional da Floresta de Gir, Gujarat, Índia."
        link="https://pt.wikipedia.org/wiki/Le%C3%A3o"
      />
    </div>
    <div>
      <Card
        featureImage="https://www.mundoecologia.com.br/wp-content/uploads/2018/09/Filhote-de-Zebra-Correndo-500x330.jpg"
        title="Zebra"
        description="As zebras são mamíferos que pertencem à família dos cavalos, os equídeos, nativos da África central e do sul. A pelagem deste animal consiste num conjunto de listras contrastantes de cor, com o seu corpo todo branco e algumas listras pretas, dispostas na vertical, exceptuando nas patas, onde se encontram na horizontal."
        link="https://pt.wikipedia.org/wiki/Zebra"
      />
    </div>
  </div>
);
}

export default CardList();