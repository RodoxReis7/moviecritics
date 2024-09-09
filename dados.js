let dados = [
    {
        titulo: 'Oppenheimer',
        descricao: 'Oppenheimer é uma imersão profunda e tensa na vida de J. Robert Oppenheimer, o pai da bomba atômica. Christopher Nolan entrega uma cinebiografia visceral e reflexiva, explorando não apenas os feitos científicos, mas as consequências morais e psicológicas da criação de uma arma de destruição em massa. O filme, com suas longas sequências e diálogos densos, divide opiniões: alguns elogiam a complexidade e a fotografia espetacular, enquanto outros criticam o ritmo lento e a dificuldade em conectar-se emocionalmente com os personagens. No fim, Oppenheimer é um filme que provoca reflexão sobre o poder da ciência e a responsabilidade humana, mas exige do espectador uma atenção e engajamento consideráveis.',
        link: 'https://www.imdb.com/title/tt15398776/reviews',
        tags: 'bomba atomica segunda guerra christopher nolan'
    },
    {
        titulo: 'Parasita',
        descricao: 'Parasita é uma sátira social sul-coreana que explora as disparidades de classe através da história de duas famílias com realidades opostas. O filme, repleto de reviravoltas e suspense, oferece uma crítica contundente ao capitalismo e à desigualdade social. Com uma direção impecável e atuações memoráveis, Parasita conquistou o mundo e se tornou um fenômeno cultural.',
        link: 'https://www.imdb.com/title/tt6759218/',
        tags: 'coreia'
    },
    {
        titulo: 'Green Book',
        descricao: 'Green Book: O Guia é uma comovente jornada pela América segregada dos anos 1960. O filme acompanha a improvável amizade entre um pianista negro e seu motorista branco, explorando temas como racismo, preconceito e a força da humanidade. A química entre os atores principais e a trilha sonora memorável contribuem para a emoção da história.',
        link: 'https://www.imdb.com/title/tt4548502/',
        tags: 'racismo 1960 motorista preconceito'
    },
    {
        titulo: 'Moonlight',
        descricao: 'Moonlight é uma delicada e poética jornada pela vida de um jovem negro que cresce em um bairro pobre de Miami. Dividido em três atos, o filme explora temas como sexualidade, identidade e a busca por aceitação. Com atuações sensíveis e uma direção visual deslumbrante, Moonlight conquistou o coração da crítica e do público.',
        link: 'https://www.imdb.com/title/tt5095042/',
        tags: 'miami negro sexualidade'
    },
    {
        titulo: 'La La Land',
        descricao: 'La La Land é um musical moderno que celebra o sonho de Hollywood e as dificuldades de seguir a carreira artística. A história de amor entre um pianista de jazz e uma aspirante a atriz, ambientada nos cenários vibrantes de Los Angeles, encanta com suas coreografias exuberantes e trilha sonora inesquecível.',
        link: 'https://www.imdb.com/title/tt3783788/',
        tags: 'musical los angeles hollywood'
    },
    {
        titulo: '12 Anos de Escravidão',
        descricao: '12 Anos de Escravidão é um drama histórico que retrata a vida de Solomon Northup, um homem livre que foi sequestrado e vendido como escravo nos Estados Unidos do século XIX. O filme, com suas cenas impactantes e atuações intensas, é um poderoso retrato das atrocidades da escravidão e uma denúncia contra o racismo.',
        link: 'https://www.imdb.com/title/tt2024544/',
        tags: 'escravidao escravos sequestrado '
    },
    {
        titulo: 'O Regresso',
        descricao: 'Uma jornada brutal e visceral pela sobrevivência nas montanhas rochosas. O Regresso acompanha a vingança de um caçador que foi abandonado para morrer por seus companheiros. As paisagens deslumbrantes e as performances intensas dos atores, especialmente Leonardo DiCaprio, transformam este filme em uma experiência cinematográfica inesquecível.',
        link: 'https://www.imdb.com/title/tt2379713/',
        tags: 'montanhas vinganca cacador'
    },

    {
        titulo: 'Birdman ou (A Inesperada Virtude da Ignorância)',
        descricao: 'Um ator de Hollywood em decadência busca reavivar sua carreira ao estrelar uma peça na Broadway. Birdman é uma comédia dramática que explora os bastidores do teatro e os desafios da fama. A câmera única e as longas sequências do filme criam uma sensação de imersão e claustrofobia, enquanto a performance de Michael Keaton é simplesmente brilhante.',
        link: 'https://www.imdb.com/title/tt2562232/',
        tags: 'hollywood'
    },

    {
        titulo: 'Spotlight',
        descricao: 'Uma investigação jornalística que revela um dos maiores escândalos da Igreja Católica. Spotlight acompanha a equipe de repórteres do Boston Globe que expõe os casos de pedofilia praticados por padres. O filme é um tributo ao poder do jornalismo e uma crítica contundente à instituição religiosa.',
        link: 'https://www.imdb.com/title/tt3187982/',
        tags: 'polemico investigar'
    },

    {
        titulo: 'A Teoria de Tudo',
        descricao: 'Uma comovente história de amor entre o físico Stephen Hawking e sua esposa Jane. A Teoria de Tudo retrata a vida do cientista desde a juventude até a descoberta da doença de Lou Gehrig. As performances de Eddie Redmayne e Felicity Jones são condecoradas, e o filme nos convida a refletir sobre o amor, a vida e a morte.',
        link: 'https://www.imdb.com/title/tt2329908/',
        tags: 'reflexao'
    },

    {
        titulo: 'Argo',
        descricao: 'Uma história real de suspense e espionagem durante a crise dos reféns no Irã. Argo conta a história de um agente da CIA que organiza uma operação ousada para resgatar seis americanos que se esconderam na embaixada canadense. O filme é um thriller emocionante e um tributo à criatividade e à coragem humana.',
        link: 'https://www.imdb.com/title/tt1790909/',
        tags: 'espiao canada'
    },
    
    {
        titulo: 'O Iluminado',
        descricao: 'Um escritor em crise leva sua família para um isolado hotel de montanha durante o inverno, na esperança de terminar seu novo romance. Mas forças sobrenaturais começam a atormentá-los, revelando a obscura verdade por trás do local.',
        tags: 'Terror psicológico',
        link: 'https://www.imdb.com/title/tt0080795/'
    },
    {
        titulo: 'A Hora do Pesadelo',
        descricao: 'Um grupo de adolescentes é perseguido por Freddy Krueger, um assassino em série que utiliza os pesadelos de suas vítimas para matá-las. A única maneira de detê-lo é confrontar seus medos mais profundos.',
        tags: 'Slasher terror sobrenatural',
        link: 'https://www.imdb.com/title/tt0087883/'
    },
    {
        titulo: 'Poltergeist - O Fenômeno',
        descricao: 'Uma família americana é assombrada por espíritos malignos que sequestram a filha mais nova. A casa se torna um portal para o outro mundo, e a família precisa lutar para salvar a menina.',
        tags: 'Terror sobrenatural',
        link: 'https://www.imdb.com/title/tt0084786/'
    },
    {
        titulo: 'O Enigma de Outro Mundo',
        descricao: 'Uma equipe de pesquisa na Antártida descobre uma nave alienígena e a forma de vida alienígena que a habita. A criatura se liberta e começa a causar terror entre os cientistas.',
        tags: 'Terror ficção científica',
        link: 'https://www.imdb.com/title/tt0084787/'
    },
    {
        titulo: 'Uma Noite Alucinante',
        descricao: 'Um grupo de amigos viaja para uma cabana isolada e encontra um livro antigo que libera forças demoníacas.',
        tags: 'Splatter',
        link: 'https://www.imdb.com/title/tt0084757/'
    },
    {
        titulo: 'A Mosca',
        descricao: 'Um cientista, após um experimento mal sucedido, se funde com uma mosca, transformando-se em uma criatura horrível e mutante.',
        tags: 'Terror ficção científica',
        link: 'https://www.imdb.com/title/tt0089883/'
    },
    {
        titulo: 'Brinquedo Assassino',
        descricao: 'Uma boneca aparentemente inofensiva se revela um assassino em série, aterrorizando uma família.',
        tags: 'Slasher',
        link: 'https://www.imdb.com/title/tt0087362/'
    },
    {
        titulo: 'Os Garotos Perdidos',
        descricao: 'Um grupo de jovens descobre um segredo obscuro em uma pequena cidade, onde vampiros se alimentam de adolescentes.',
        tags: 'Terror vampiros',
        link: 'https://www.imdb.com/title/tt0092759/'
    },
    {
        titulo: 'A Coisa',
        descricao: 'Uma equipe de pesquisa na Antártida é perseguida por uma criatura alienígena que se transforma e se multiplica.',
        tags: 'Terror ficção científica',
        link: 'https://www.imdb.com/title/tt0083658/'
    },
    {
        titulo: 'Hellraiser - Renascido do Inferno',
        descricao: 'Um homem encontra uma caixa misteriosa que, ao ser aberta, invoca criaturas demoníacas conhecidas como Cenobitas.',
        tags: 'Terror sobrenatural',
        link: 'https://www.imdb.com/title/tt0093278/'
    }
];