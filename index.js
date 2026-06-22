const express = require('express');
const app = express();
const path = require('path');

// ✅ Serve arquivos estáticos da pasta atual
app.use(express.static(path.join(__dirname)));

// ═══════════════════════════════════════════════════════════════════
//  DADOS DA API - COSMOLOGIA AFRICANA v3.0 (INKICES + LÍNGUAS + ESCRITAS)
// ═══════════════════════════════════════════════════════════════════

const dados = {
  // ─── CONCEITOS ───────────────────────────────────────────────────
  conceitos: [
    {
      nome: "Ubuntu",
      tradicao: "Bantu (Sul da África)",
      descricao: "Princípio ético-ontológico: 'Eu sou porque nós somos'. A pessoa se constitui na comunidade."
    },
    {
      nome: "Zamani e Sasa",
      tradicao: "Bantu / John Mbiti",
      descricao: "Concepção de tempo dividida entre o passado profundo coletivo (Zamani) e o presente vivido (Sasa)."
    },
    {
      nome: "Ntu, Kintu, Hantu, Kuntu, Bintu",
      tradicao: "Bantu / Placide Tempels",
      descricao: "As quatro categorias fundamentais do ser na filosofia bantu (Força Vital)."
    },
    {
      nome: "Kalunga",
      tradicao: "Bakongo",
      descricao: "Linha/fronteira cosmológica entre o mundo dos vivos e o mundo dos ancestrais."
    },
    {
      nome: "Dikenga",
      tradicao: "Bakongo",
      descricao: "Cosmograma em cruz que representa o ciclo de vida-morte-renascimento."
    },
    {
      nome: "Ngozi e Amadlozi",
      tradicao: "Zulu",
      descricao: "Espíritos ancestrais que medeiam entre os vivos e o Criador."
    },
    {
      nome: "Ma'at",
      tradicao: "Egito Antigo / Kemetic",
      descricao: "Princípio de ordem cósmica, justiça e equilíbrio. A verdade que sustenta o universo."
    },
    {
      nome: "Ka e Ba",
      tradicao: "Egito Antigo",
      descricao: "Ka = força vital, energia que anima o corpo. Ba = personalidade, alma que viaja após a morte."
    },
    {
      nome: "Nommo",
      tradicao: "Dogon",
      descricao: "Força criadora da palavra falada — a palavra que cria a realidade."
    },
    {
      nome: "Asé",
      tradicao: "Yoruba / Candomblé",
      descricao: "Força vital, energia sagrada que sustenta toda a existência. Substância que se acumula, transmite e alimenta."
    },
    {
      nome: "Heka",
      tradicao: "Egito Antigo",
      descricao: "Magia como força criadora e palavra de poder. A capacidade de transformar a realidade."
    },
    {
      nome: "Sankofa",
      tradicao: "Akan / Gana",
      descricao: "Princípio de retornar ao passado para buscar o que foi deixado para trás. 'Não é vergonha voltar atrás para buscar o que se esqueceu'."
    },
    {
      nome: "Mandombe",
      tradicao: "Kikongo / Wabeladio Payi",
      descricao: "Sistema de escrita sagrada inspirado pelos espíritos ancestrais. Cada letra representa uma força cósmica."
    },
    {
      nome: "Tempo Circular",
      tradicao: "Cosmologia Africana",
      descricao: "O tempo não é linear — é espiral, cíclico, vivo. Os ancestrais retornam através dos descendentes; os mitos não pertencem ao passado, mas ao eterno presente."
    },
    {
      nome: "Axé",
      tradicao: "Yoruba / Candomblé / Umbanda",
      descricao: "Força vital, energia sagrada que sustenta toda a existência. Presente nas ervas, pedras, água, sangue, palavras e pessoas iniciadas. O terreiro existe para cultivar e distribuir axé."
    },
    {
      nome: "Nkisi",
      tradicao: "Kongo / Angola",
      descricao: "Objeto sagrado carregado de força espiritual. Cada nkisi contém substâncias específicas que canalizam poderes de cura, proteção ou justiça."
    }
  ],

  // ─── DIVINDADES ──────────────────────────────────────────────────
  divindades: [
    { nome: "Olorun / Olodumare", tradicao: "Yoruba / Nagô", descricao: "Deus supremo, criador do universo." },
    { nome: "Nyame", tradicao: "Akan / Gana", descricao: "Deus supremo que se retirou após a criação." },
    { nome: "Amma", tradicao: "Dogon", descricao: "Deus criador que fez o mundo a partir de um ovo cósmico." },
    { nome: "Unkulunkulu", tradicao: "Zulu", descricao: "O Primeiro, ancestral primordial e criador." },
    { nome: "Rá", tradicao: "Egito Antigo", descricao: "Deus do sol, criador e fonte de toda a vida. O faraó era considerado filho de Rá." },
    { nome: "Ísis", tradicao: "Egito Antigo", descricao: "Deusa mãe e poderosa protetora mágica. Senhora da magia, do amor e da fertilidade." },
    { nome: "Osíris", tradicao: "Egito Antigo", descricao: "Deus da morte, ressurreição e fertilidade. Juiz dos mortos no além." },
    { nome: "Hórus", tradicao: "Egito Antigo", descricao: "Divindade da realeza e do céu. Representado como falcão ou homem com cabeça de falcão." },
    { nome: "Thoth", tradicao: "Egito Antigo", descricao: "Deus da sabedoria, da escrita e da magia. Inventou a escrita hieroglífica." },
    { nome: "Apedemak", tradicao: "Reino de Cuxe / Núbia", descricao: "Deus-leão da guerra e da fertilidade. Principal divindade do Reino de Cuxe." },
    { nome: "Iemanjá", tradicao: "Yoruba / Candomblé", descricao: "Mãe das águas do mar. Senhora da maternidade, proteção e amor incondicional." },
    { nome: "Oxum", tradicao: "Yoruba / Candomblé", descricao: "Senhora das águas doces, do amor, da fertilidade e da beleza." },
    { nome: "Nanã Buruku", tradicao: "Fon / Candomblé", descricao: "Senhora da terra e da lama primordial. A mais ancestral das orixás." },
    { nome: "Xangô", tradicao: "Yoruba / Candomblé", descricao: "Orixá do fogo, do trovão e da justiça. Senhor do raio e do ferro." },
    { nome: "Ogum", tradicao: "Yoruba / Candomblé", descricao: "Orixá da guerra, do ferro e da forja. Quem abre caminhos com o facão." },
    { nome: "Oxóssi", tradicao: "Yoruba / Candomblé", descricao: "Orixá da caça, da fartura e do conhecimento da floresta." },
    { nome: "Oxumaré", tradicao: "Yoruba / Candomblé", descricao: "Orixá da serpente arco-íris, princípio da renovação e da riqueza." },
    { nome: "Exu / Elegba", tradicao: "Yoruba / Candomblé", descricao: "Senhor dos caminhos e encruzilhadas. Guardião do limiar, primeiro a ser saudado." },
    { nome: "Iansã / Oyá", tradicao: "Yoruba / Candomblé", descricao: "Orixá dos ventos, tempestades e raios. Senhora das mudanças radicais." },
    { nome: "Iroko", tradicao: "Yoruba / Candomblé", descricao: "Orixá da árvore gameleira, do tempo, da justiça e dos ancestrais." },
    { nome: "Ossaim", tradicao: "Yoruba / Candomblé", descricao: "Senhor das folhas sagradas e do conhecimento que mora na árvore." },
    { nome: "Loko", tradicao: "Candomblé de Angola", descricao: "Divindade da clareza, da sabedoria e da justiça. Associado ao sol e à luz." },
    { nome: "Katendê", tradicao: "Candomblé de Angola", descricao: "Nkisi das folhas sagradas e da mata fechada. O saber que existe antes da linguagem." },
    { nome: "Nzambi", tradicao: "Bantu / Angola", descricao: "Deus criador supremo. O sol (ntangu) é sinal da sua presença." }
  ],

  // ─── INKICES (NKISIS) ────────────────────────────────────────────
  inkices: [
    {
      nome: "Aluvaiá",
      tradicao: "Candomblé de Angola / Bantu-Kongo",
      descricao: "Senhor das encruzilhadas e dos limites entre mundos. Nenhuma cerimônia Angola começa sem sua licença. Guardião da fronteira entre o humano e o sagrado, entre o tempo ordinário e o tempo ritual. Elemento: Terra. Cor: Preto e vermelho."
    },
    {
      nome: "Mukumbi — Inkosi",
      tradicao: "Candomblé de Angola / Bantu-Kongo",
      descricao: "Nkisi da realeza espiritual — não do poder político, mas da autoridade que emana do alinhamento com os ancestrais. Governa a liderança, a hierarquia sagrada e a transmissão do conhecimento de geração em geração. Elemento: Ar e terra. Cor: Branco e dourado."
    },
    {
      nome: "Mutakalambô",
      tradicao: "Candomblé de Angola / Bantu-Kongo",
      descricao: "Senhor absoluto da floresta densa — o mato fechado onde a civilização não chega e onde os espíritos habitam livremente. Governa os animais, a caça, os segredos da mata, as plantas de poder. Elemento: Terra e vegetação. Cor: Verde escuro e preto."
    },
    {
      nome: "Katendê",
      tradicao: "Candomblé de Angola / Bantu-Kongo",
      descricao: "Guardião do conhecimento das plantas — o Nkisi que sabe o segredo de cada folha, raiz e casca. Governa a fitoterapia sagrada, os banhos rituais, as defumações e os preparos de cura. Elemento: Vegetação e água. Cor: Verde e amarelo."
    },
    {
      nome: "Kawungo",
      tradicao: "Candomblé de Angola / Bantu-Kongo",
      descricao: "Governa o território onde a vida e a morte se tocam — a doença como limiar, como passagem. Governa a cura pelo conhecimento da morte: é preciso conhecer o que mata para saber o que cura. Elemento: Terra e osso. Cor: Branco e preto."
    },
    {
      nome: "Angorô",
      tradicao: "Candomblé de Angola / Bantu-Kongo",
      descricao: "A serpente arco-íris — mediadora entre o mundo celeste e o mundo terrestre. Governa a diplomacia, a mediação, a tradução entre mundos e entre linguagens. O arco-íris como renovação depois da tempestade. Elemento: Água e ar. Cor: Todas as cores do arco-íris."
    },
    {
      nome: "Zaze",
      tradicao: "Candomblé de Angola / Bantu-Kongo",
      descricao: "Nkisi do raio e da justiça divina — a força que desce do céu com poder absoluto. Governa a justiça, o julgamento, a punição dos que rompem as leis sagradas. O fogo purificador que transforma. Elemento: Fogo e ar. Cor: Vermelho, branco e dourado."
    },
    {
      nome: "Kitembu",
      tradicao: "Candomblé de Angola / Bantu-Kongo",
      descricao: "Governa o vento e o tempo mítico dos ancestrais. A memória ancestral que chega como vento — as vozes dos que partiram que sussurram no ouvido dos que ficaram. O arquivo vivo da tradição. Elemento: Ar. Cor: Roxo e branco."
    },
    {
      nome: "Matamba",
      tradicao: "Candomblé de Angola / Bantu-Kongo",
      descricao: "Rainha guerreira — figura histórica e mítica. Governa a guerra sagrada, a proteção do povo e da tradição, a resistência à opressão. O Nkisi das mulheres que lideram, que protegem, que não recuam. Elemento: Vento e fogo. Cor: Roxo, preto e vermelho."
    },
    {
      nome: "Dandalunda",
      tradicao: "Candomblé de Angola / Bantu-Kongo",
      descricao: "Senhora das águas doces — rios, lagos, cachoeiras. Governa o amor, a fertilidade, a beleza e a cura pelas águas. A água que cura não pela violência da purificação mas pela gentileza da nutrição. Elemento: Água doce. Cor: Azul claro, rosa e branco."
    },
    {
      nome: "Kaitumba",
      tradicao: "Candomblé de Angola / Bantu-Kongo",
      descricao: "Governa as águas salgadas e profundas — o mar como Kalunga, como fronteira entre o mundo dos vivos e o mundo dos ancestrais. Guarda o que foi perdido no fundo do mar e o que foi preservado apesar de tudo. Elemento: Água salgada. Cor: Azul profundo e preto."
    },
    {
      nome: "Zumbarandá",
      tradicao: "Candomblé de Angola / Bantu-Kongo",
      descricao: "Nkisi dos ancestrais mais antigos — tão antigos que já não têm nome individual, já se tornaram força pura. Governa a velhice sagrada, a sabedoria que só o tempo acumula, o respeito pelos que vieram antes. Elemento: Terra e osso. Cor: Branco e preto."
    },
    {
      nome: "Wuji",
      tradicao: "Candomblé de Angola / Bantu-Kongo",
      descricao: "Nkisi do céu e da criação primordial — a força que estava antes de tudo e da qual tudo emergiu. Governa a criação, o cosmos, os grandes ciclos do tempo. O princípio antes da diferenciação. Elemento: Ar e éter. Cor: Azul celeste e dourado."
    },
    {
      nome: "Lembaranganga",
      tradicao: "Candomblé de Angola / Bantu-Kongo",
      descricao: "Protege o momento mais vulnerável da existência: o nascimento. O recém-nascido é um ancestral que voltou, e precisa de proteção especial nessa travessia de volta. Governa a proteção das crianças, das gestantes e dos recém-chegados. Elemento: Água e terra. Cor: Branco e azul claro."
    },
    {
      nome: "Mesa Jurema Sagrada — Caboclo",
      tradicao: "Candomblé de Angola / Brasil",
      descricao: "O ponto onde a tradição Angola toca o Brasil profundo — onde os Inkices africanos encontram os espíritos indígenas da floresta brasileira. Governa a síntese, o encontro de tradições, a sabedoria da floresta brasileira. Elemento: Terra, vegetação e fogo. Cor: Verde, vermelho e amarelo."
    }
  ],

  // ─── COSMOGONIAS ─────────────────────────────────────────────────
  cosmogonias: [
    { nome: "Obatala cria a Terra", tradicao: "Yoruba", descricao: "Obatala desce do céu com uma corrente de areia para formar o mundo seco." },
    { nome: "Ovo Cósmico de Amma", tradicao: "Dogon", descricao: "Amma cria o universo a partir de um ovo que se rompe em oito fragmentos." },
    { nome: "Criação de Unkulunkulu", tradicao: "Zulu", descricao: "Nasceu da junco e trouxe humanidade, medicina, fogo e agricultura." },
    { nome: "O Nilo como Deus Hapi", tradicao: "Egito Antigo", descricao: "O Nilo é o deus Hapi, dador de vida. Suas cheias anuais traziam fertilidade ao deserto." },
    { nome: "O Sol como Rá", tradicao: "Egito Antigo", descricao: "Rá cria o mundo com sua luz. O faraó é filho de Rá, mediador entre deuses e humanos." },
    { nome: "Osiris, Ísis e Hórus", tradicao: "Egito Antigo", descricao: "Osíris é morto, ressuscitado por Ísis, e Hórus vinga seu pai. Modelo de morte e ressurreição." },
    { nome: "Kalunga como Fronteira", tradicao: "Bakongo", descricao: "O mundo é dividido pelo Kalunga — a água que separa e conecta vivos e mortos." },
    { nome: "Dikenga como Ciclo Cósmico", tradicao: "Bakongo", descricao: "O cosmograma em cruz representa os quatro momentos do sol: nascimento, meio-dia, pôr do sol, meia-noite." }
  ],

  // ─── RITOS ───────────────────────────────────────────────────────
  ritos: [
    { nome: "Candomblé", tradicao: "Yoruba / Brasil", descricao: "Ritual de possessão e comunicação com orixás. Toque de atabaques, dança e oferendas." },
    { nome: "Vodun", tradicao: "Fon / Benin / Haiti", descricao: "Culto aos deuses e ancestrais com transe e oferendas. Tambor como portal entre mundos." },
    { nome: "Iniciação Elima", tradicao: "Bantu", descricao: "Rito de passagem feminino com dança e educação sexual." },
    { nome: "Kimpa Vita", tradicao: "Kongo", descricao: "Movimento messiânico liderado por Beatriz Kimpa Vita." },
    { nome: "Toque de Atabaques", tradicao: "Candomblé / Brasil", descricao: "Os três tambores sagrados (Rum, Rumpi, Lé) convocam os Orixás. O toque abre o portal entre os mundos." },
    { nome: "Culto dos Egunguns", tradicao: "Yoruba", descricao: "Culto dos ancestrais mascarados. Os mortos retornam para falar com os vivos." },
    { nome: "Rito de Passagem Bantu", tradicao: "Bantu", descricao: "Iniciação que marca a transição da infância para a vida adulta. Ubuntu se faz ao redor do tambor." }
  ],

  // ─── CIVILIZAÇÕES ───────────────────────────────────────────────
  civilizacoes: [
    { nome: "Grande Zimbabwe", tradicao: "Shona", descricao: "Civilização medieval com muralhas de pedra e comércio de ouro." },
    { nome: "Império do Kongo", tradicao: "Kongo", descricao: "Reino central-africano com 500 anos de história." },
    { nome: "Egito Antigo", tradicao: "Kemetic", descricao: "Civilização do Nilo com cosmologia e matemática avançadas. Pirâmides, hieróglifos e filosofia." },
    { nome: "Axum", tradicao: "Etíope", descricao: "Reino com obeliscos e cristianismo antigo." },
    { nome: "Reino de Cuxe", tradicao: "Núbia", descricao: "Reino africano que dominou o Egito como a 25ª Dinastia Núbia. Centro de ferro e ouro." },
    { nome: "Dinastias Núbias", tradicao: "Núbia / Sudão", descricao: "Reinos de Napata e Meroé. Conquistaram o Egito e preservaram a cultura kemetic." },
    { nome: "Reino de Mali", tradicao: "Mali", descricao: "Grande império do Oeste Africano. Mansa Musa, a peregrinação a Meca e a Universidade de Timbuktu." },
    { nome: "Reino de Benin", tradicao: "Edo / Nigéria", descricao: "Civilização conhecida pelas bronzes de Benin, sistema de muralhas e arte sofisticada." }
  ],

  // ─── LÍNGUAS ─────────────────────────────────────────────────────
  linguas: [
    { nome: "Árabe", tradicao: "África do Norte / Sahel", descricao: "Língua semítica introduzida no Norte da África no século VII. Tornou-se língua de comércio, religião e cultura em grande parte do continente. Exemplo: 'السلام عليكم' (As-salamu alaykum) = 'A paz esteja contigo'." },
    { nome: "Chokwe (Tchokwe)", tradicao: "Angola / RDC / Zâmbia", descricao: "Língua bantu falada pelos povos Tchokwe, conhecidos pela arte, máscaras e mitologia. Exemplo: 'Mukishi' = espírito ancestral / máscara ritual." },
    { nome: "Kassanje", tradicao: "Angola", descricao: "Língua bantu do centro-norte de Angola. Falada na região do rio Kassanje, importante centro cultural e histórico." },
    { nome: "Kikongo", tradicao: "Kongo / Angola / RDC / Gabão", descricao: "Língua bantu falada em Angola, Congo e Gabão. Base do Mandombe. Exemplo: 'Kalunga' = mar / fronteira entre mundos. 'Nza' = mundo / terra." },
    { nome: "Kimbundo", tradicao: "Angola", descricao: "Língua bantu do norte de Angola. Língua dos antigos reinos do Ndongo e Matamba. Exemplo: 'Nzambi' = Deus criador. 'Mbanza' = cidade / capital." },
    { nome: "Lingala", tradicao: "RDC / Congo", descricao: "Língua bantu falada em Kinshasa e Brazzaville. Língua da música congolesa (soukous, rumba). Exemplo: 'Mobali' = homem. 'Mwasi' = mulher." },
    { nome: "Ngangela / Ganguela", tradicao: "Angola / Zâmbia", descricao: "Grupo de línguas bantu do sudeste de Angola. Faladas pelos povos Ngangela, conhecidos pela tradição oral e cosmologia." },
    { nome: "Swahili", tradicao: "África Oriental", descricao: "Língua franca do Leste Africano. Mistura de bantu com árabe, português e inglês. Exemplo: 'Jambo' = olá. 'Asante' = obrigado. 'Hakuna matata' = sem problemas." },
    { nome: "Umbundo", tradicao: "Angola", descricao: "Língua bantu falada no centro de Angola (Benguela, Huambo, Kuito). Uma das línguas mais faladas do país. Exemplo: 'Ombembua' = ancestral. 'Ondumbo' = força vital." },
    { nome: "Yoruba", tradicao: "Yoruba / Nigéria / Benin", descricao: "Língua tonal falada na Nigéria e Benin. Língua sagrada do Candomblé e do Ifá. Exemplo: 'Ase' = força vital. 'Ori' = cabeça / destino." },
    { nome: "Akan / Twi", tradicao: "Akan / Gana", descricao: "Língua do Gana com provérbios e sabedoria oral rica. Exemplo: 'Sankofa' = volte e busque. 'Obra' = trabalho / criação." },
    { nome: "Wolof", tradicao: "Wolof / Senegal", descricao: "Língua principal do Senegal com poesia oral rica. Exemplo: 'Ndam' = paz. 'Jàmm' = tranquilidade." },
    { nome: "Zulu", tradicao: "Zulu / África do Sul", descricao: "Língua bantu com rica tradição oral e conceitos filosóficos profundos. Exemplo: 'Ubuntu' = eu sou porque nós somos. 'Sawubona' = eu te vejo." },
    { nome: "Ge'ez", tradicao: "Etiópia / Eritreia", descricao: "Língua semítica antiga usada na liturgia cristã etíope. Base do alfabeto Ge'ez. Exemplo: 'ሰላም' (Selam) = paz. 'አምላክ' (Amlak) = Deus." }
  ],

  // ─── ESCRITAS ────────────────────────────────────────────────────
  escritas: [
    {
      nome: "Adinkra",
      tradicao: "Akan / Gana",
      descricao: "Símbolos estampados em tecidos com significados filosóficos. Cada símbolo carrega um provérbio. Exemplos: 'Gye Nyame' (𓀀) = exceto Deus (supremacia divina). 'Sankofa' (𓀁) = volte e busque. 'Dwennimmen' (𓀂) = chifres de carneiro = humildade e força."
    },
    {
      nome: "Ge'ez",
      tradicao: "Etiópia / Eritreia",
      descricao: "Alfabeto semítico usado na liturgia cristã etíope. Um dos mais antigos do mundo. 26 letras básicas, cada uma com 7 formas. Exemplos: 'ሀ' (Ha) = som de 'h'. 'ለ' (La) = som de 'l'. 'መ' (Ma) = som de 'm'. 'ሰላም' = paz. 'አምላክ' = Deus."
    },
    {
      nome: "Kassanje",
      tradicao: "Angola",
      descricao: "Sistema de registro simbólico da região do rio Kassanje. Combina elementos pictográficos com marcas de identidade étnica e territorial. Usado em rituais de passagem e acordos comunitários."
    },
    {
      nome: "Hieróglifos Egípcios",
      tradicao: "Egito Antigo",
      descricao: "Sistema de escrita sagrada usado em monumentos e textos religiosos. Milhares de símbolos. Exemplos: '𓂀' (Wedjat) = olho de Hórus / proteção. '𓋹' (Ankh) = vida eterna. '𓁹' (Irt) = olho / ver. '𓆣' = escaravelho / transformação."
    },
    {
      nome: "Mandombe",
      tradicao: "Kikongo / Wabeladio Payi",
      descricao: "Sistema de escrita sagrada inspirado pelos espíritos ancestrais em 1978. Cada letra representa uma força cósmica. Baseada em formas de 5 e 2. Exemplos: '𐒀' (Ma) = som de 'm'. '𐒁' (Na) = som de 'n'. '𐒂' (Sa) = som de 's'. 'Kalunga' escrito em Mandombe: 𐒀𐒁𐒂𐒃."
    },
    {
      nome: "Nsibidi",
      tradicao: "Ekpe / Igbo / Nigéria",
      descricao: "Sistema de escrita ideográfico do sudeste da Nigéria. Usado em rituais secretos da sociedade Ekpe. Milhares de símbolos. Exemplos: '𑗊' = amor / união. '𑗋' = discurso / palavra. '𑗌' = guerra / conflito. '𑗍' = paz / reconciliação."
    },
    {
      nome: "Sona",
      tradicao: "Lunda / Tchokwe / Angola",
      descricao: "Sistema de escrita em linhas e pontos usado para registrar história e sabedoria. Desenhos feitos na areia ou em objetos. Cada figura conta uma história. Exemplos: 'Ciclo da vida' = linha contínua que se cruza formando padrões. 'Árvore genealógica' = ramificações que partem de um centro."
    },
    {
      nome: "Tifinagh",
      tradicao: "Tuareg / Berbere / Saara",
      descricao: "Alfabeto usado pelos povos tuareg do Saara. Símbolos de grande beleza geométrica. 55 letras básicas. Exemplos: 'ⴰ' (Ya) = som de 'a'. 'ⴱ' (Yab) = som de 'b'. 'ⴳ' (Yag) = som de 'g'. 'ⵜⴰⵎⴰⵣⵉⵖⵜ' (Tamaziɣt) = língua berbere."
    },
    {
      nome: "Vai",
      tradicao: "Vai / Libéria / Serra Leoa",
      descricao: "Sistema de escrita silábica criado por Momolu Duwalu Bukele em 1833. Uma das poucas escritas africanas indígenas. 200+ sílabas. Exemplos: 'ꔀ' (E) = som de 'e'. 'ꔤ' (I) = som de 'i'. 'ꕆ' (O) = som de 'o'. 'ꕉ' (U) = som de 'u'."
    }
  ],

  // ─── AUTORES ─────────────────────────────────────────────────────
  autores: [
    { nome: "Cheikh Anta Diop", tradicao: "Senegal", descricao: "Historiador e físico que provou a origem africana do Egito antigo. Obra: 'Nations nègres et culture'." },
    { nome: "Placide Tempels", tradicao: "Bélgica / Congo", descricao: "Missionário que sistematizou a filosofia bantu em 'La philosophie bantoue' (1945)." },
    { nome: "John S. Mbiti", tradicao: "Quênia", descricao: "Teólogo que estudou conceitos africanos de tempo e religião. Obra: 'African Religions and Philosophy'." },
    { nome: "Léopold Sédar Senghor", tradicao: "Senegal", descricao: "Poeta e fundador do movimento Negritude. Primeiro presidente do Senegal." },
    { nome: "Wole Soyinka", tradicao: "Nigéria", descricao: "Dramaturgo e Prêmio Nobel de Literatura. Obra: 'A Dança da Floresta'." },
    { nome: "Nei Lopes", tradicao: "Brasil", descricao: "Escritor, compositor e pesquisador da cultura afro-brasileira. Especialista em Candomblé e sincretismo." },
    { nome: "Marcien Towa", tradicao: "Camarões", descricao: "Filósofo africano que desenvolveu uma epistemologia africana crítica. Obra: 'Essai sur la problématique philosophique dans l\'Afrique actuelle'." },
    { nome: "Bunseki Fu-Kiau", tradicao: "RDC / Kongo", descricao: "Antropólogo e sábio kongo. Obra: 'N\'Kongo Ye Nza Yakun\'zungidila' (O Kongo e a sua Doutrina)." },
    { nome: "Théophile Obenga", tradicao: "Gabão", descricao: "Historiador e linguista. Especialista em Egito antigo e línguas africanas. Colaborador de Cheikh Anta Diop." },
    { nome: "Paulu Gerdes", tradicao: "Moçambique", descricao: "Matemático que descobriu a geometria africana em cestarias, desenhos na areia e arquitetura." },
    { nome: "Luiz Antonio Simas", tradicao: "Brasil", descricao: "Historiador e pesquisador da cultura afro-brasileira. Especialista em Candomblé, umbanda e sincretismo." },
    { nome: "Luiz Rufino", tradicao: "Brasil", descricao: "Pesquisador e escritor sobre religiosidade afro-brasileira e cosmologia bantu." },
    { nome: "José Beniste", tradicao: "Brasil", descricao: "Pesquisador de Candomblé e umbanda. Especialista em liturgia e simbologia afro-brasileira." },
    { nome: "Pierre Verger", tradicao: "França / Brasil", descricao: "Fotógrafo e etnógrafo. Documentou o Candomblé e as religiões afro-brasileiras por décadas." },
    { nome: "Juana Elbein dos Santos", tradicao: "Brasil", descricao: "Antropóloga e especialista em Candomblé de Angola. Obra: 'Os Nagô e a Morte'." },
    { nome: "Robert Farris Thompson", tradicao: "EUA", descricao: "Historiador da arte africana e afro-americana. Obra: 'Flash of the Spirit'." },
    { nome: "Molefi Kete Asante", tradicao: "EUA / Gana", descricao: "Fundador do Afrocentrismo acadêmico. Obra: 'The Afrocentric Idea'." },
    { nome: "Ivan Van Sertima", tradicao: "Guiana / Reino Unido", descricao: "Historiador. Obra: 'They Came Before Columbus' — sobre contatos africanos pré-colombianos." },
    { nome: "Runoko Rashidi", tradicao: "EUA", descricao: "Historiador e antropólogo. Especialista em história africana global e diáspora." },
    { nome: "Sophie Oluwole", tradicao: "Nigéria", descricao: "Filósofa yoruba. Especialista em Ifá e filosofia africana comparada com a grega." },
    { nome: "Kwasi Wiredu", tradicao: "Gana", descricao: "Filósofo africano. Defendeu uma filosofia africana sem colonialismo epistêmico. Obra: 'Philosophy and an African Culture'." },
    { nome: "Wabeladio Payi", tradicao: "RDC / Kongo", descricao: "Criador da escrita Mandombe. Recebeu a inspiração dos espíritos ancestrais em 1978." },
    { nome: "Gaston Bachelard", tradicao: "França", descricao: "Filósofo da imaginação material. Obras: 'A Psicanálise do Fogo', 'A Água e os Sonhos', 'A Terra e os Devaneios do Repouso'." },
    { nome: "Gilbert Durand", tradicao: "França", descricao: "Antropólogo do imaginário. Obra: 'As Estruturas Antropológicas do Imaginário'." },
    { nome: "Carl Gustav Jung", tradicao: "Suíça", descricao: "Psiquiatra e fundador da psicologia analítica. Conceitos: inconsciente coletivo, arquétipos, individuação. Obra: 'O Homem e seus Símbolos'." }
  ],

  // ─── ARQUÉTIPOS ──────────────────────────────────────────────────
  arquetipos: [
    {
      nome: "Fogo",
      tradicao: "Universal / Candomblé / Alquimia",
      descricao: "Arquétipo da transformação ativa. Elemento de Xangô e Ogum. Simboliza purificação, paixão, criatividade e destruição. Quatro estados: centelha, fogueira, incêndio, brasa."
    },
    {
      nome: "Água",
      tradicao: "Universal / Candomblé / Bantu",
      descricao: "Arquétipo do inconsciente, da origem e da renovação. Domínio de Iemanjá, Oxum e Nanã. Portal entre vivos e ancestrais. Quatro estados: parada, corrente, mar, chuva."
    },
    {
      nome: "Serpente",
      tradicao: "Universal / Yoruba / Egito / Hinduísmo",
      descricao: "Arquétipo da transformação pelo despojamento. Oxumaré (arco-íris serpentiforme), Uraeus (Egito), Kundalini (Hinduísmo). Ciclo de morte e renascimento no mesmo corpo."
    },
    {
      nome: "Tambor",
      tradicao: "Universal / Candomblé / Bantu",
      descricao: "Arquétipo da convocação. Atabaques (Rum, Rumpi, Lé) convocam os Orixás. Ngoma (Bantu) como presença ancestral. Sincroniza corações e corpos."
    },
    {
      nome: "Travessia",
      tradicao: "Universal / Bantu / Diáspora",
      descricao: "Arquétipo da passagem que transforma. Kalunga como fronteira entre mundos. O Atlântico Negro como maior travessia forçada da história. Três momentos: partida, meio, chegada."
    },
    {
      nome: "Ancestral",
      tradicao: "Universal / Bantu / Candomblé",
      descricao: "Arquétipo da origem viva. Não é o passado morto — é o passado que continua agindo. Egunguns, Pretos Velhos, Mifu (Bantu). Raiz que impede a árvore de cair."
    },
    {
      nome: "Árvore",
      tradicao: "Universal / Yoruba / Nórdico / Bíblia",
      descricao: "Arquétipo do eixo do mundo. Iroko (Candomblé), Yggdrasil (Nórdico), Figueira de Bodhi (Budismo). Une raízes (ancestrais), tronco (vivos) e galhos (céus)."
    },
    {
      nome: "Caçador",
      tradicao: "Universal / Yoruba / Grécia",
      descricao: "Arquétipo da busca precisa. Oxóssi (Candomblé), Ártemis (Grécia). Concentração, paciência e estratégia. Não mata por crueldade — caça por necessidade."
    },
    {
      nome: "Caminho",
      tradicao: "Universal / Yoruba / Budismo / Taoísmo",
      descricao: "Arquétipo do movimento com sentido. Exu (Candomblé), Dharma (Hinduísmo), Tao (Taoísmo). Não é o destino — é o próprio ser em movimento."
    },
    {
      nome: "Cruz",
      tradicao: "Universal / Bakongo / Egito / Cristianismo",
      descricao: "Arquétipo do encontro de forças opostas. Dikenga/Yowa (Bakongo), Ankh (Egito). Vertical (céu) encontra horizontal (terra). Centro onde tudo se decide."
    },
    {
      nome: "Encruzilhada",
      tradicao: "Universal / Yoruba / Vodu / Grécia",
      descricao: "Arquétipo da escolha radical. Exu/Legba (Candomblé), Hécate (Grécia). Ponto onde os caminhos se separam e nenhuma escolha pode ser desfeita."
    },
    {
      nome: "Sol",
      tradicao: "Universal / Egito / Candomblé / Bantu",
      descricao: "Arquétipo da consciência e da vida. Rá (Egito), Oxalá/Obatala (Candomblé), Nzambi (Bantu). Fonte primeira de energia vital. Sem o sol, não há axé."
    },
    {
      nome: "Lua",
      tradicao: "Universal / Candomblé / Bantu",
      descricao: "Arquétipo da transformação cíclica. Regula rituais, plantio e ciclos do corpo. Na cosmologia bantu (ngonda), marca meses e purificações."
    },
    {
      nome: "Pedra",
      tradicao: "Universal / Candomblé / Bantu",
      descricao: "Arquétipo da firmeza e permanência. Otás (Candomblé) — morada física dos orixás. Na tradição bantu, pedras guardam o espírito dos ancestrais."
    },
    {
      nome: "Vento",
      tradicao: "Universal / Candomblé / Bantu",
      descricao: "Arquétipo da liberdade e presença espiritual. Iansã/Oyá (Candomblé), muema (Bantu — sopro vital de Nzambi). Carrega mensagens entre visível e invisível."
    },
    {
      nome: "Terra",
      tradicao: "Universal / Candomblé / Bantu",
      descricao: "Arquétipo do corpo e da origem. Nanã Buruku (Candomblé), ntoto (Bantu). Corpo, sepultura e ventre. Recebe os mortos e dá origem aos vivos."
    },
    {
      nome: "Casa",
      tradicao: "Universal / Candomblé / Bantu",
      descricao: "Arquétipo da proteção e memória. Terreiro (Candomblé) — microcosmo que replica a ordem do universo. Nzo a bakulu (Bantu) — casa dos ancestrais."
    },
    {
      nome: "Chave",
      tradicao: "Universal / Candomblé / Bantu",
      descricao: "Arquétipo do acesso e da autoridade. Exu e Ogum (Candomblé). Acesso ao conhecimento oculto, à iniciação e aos mistérios."
    },
    {
      nome: "Sangue",
      tradicao: "Universal / Candomblé / Bantu",
      descricao: "Arquétipo da vida e da linhagem. Ejé (Candomblé) — veículo do axé. Une vivos, mortos e divindades. Fio contínuo de memória e poder espiritual."
    },
    {
      nome: "Porta",
      tradicao: "Universal / Candomblé / Bantu",
      descricao: "Arquétipo do limiar. Exu e Aluvaiá (Candomblé). Marca o limiar entre mundano e sagrado, vivos e mortos, interior e exterior."
    },
    {
      nome: "Porão (do Navio)",
      tradicao: "Diáspora Africana",
      descricao: "Arquétipo traumático e fundador. Espaço de confinamento nos navios negreiros. Ruptura forçada com a terra natal, mas também resistência e (re)criação de culturas."
    }
  ],

  // ─── LIVROS ──────────────────────────────────────────────────────
  livros: [
    { nome: "Nations nègres et culture", tradicao: "Cheikh Anta Diop", descricao: "Tese fundadora sobre a origem africana dos egípcios e a continuidade cultural entre África negra e Egito antigo." },
    { nome: "La philosophie bantoue", tradicao: "Placide Tempels", descricao: "Sistematização da filosofia bantu através do conceito de Força Vital (Ntu)." },
    { nome: "African Religions and Philosophy", tradicao: "John S. Mbiti", descricao: "Estudo dos conceitos africanos de tempo, Deus e religião. Introduziu Zamani e Sasa." },
    { nome: "O Homem e seus Símbolos", tradicao: "Carl Gustav Jung", descricao: "Última obra de Jung, acessível ao público geral, sobre arquétipos, sonhos e inconsciente coletivo." },
    { nome: "A Psicanálise do Fogo", tradicao: "Gaston Bachelard", descricao: "Análise do fogo como primeiro objeto de devaneio humano. Complexo de Prometeu e Empédocles." },
    { nome: "A Água e os Sonhos", tradicao: "Gaston Bachelard", descricao: "Água como imaginação material do devaneio. Análise poética do elemento líquido." },
    { nome: "A Terra e os Devaneios do Repouso", tradicao: "Gaston Bachelard", descricao: "Terra como elemento da intimidade, do repouso e da memória profunda." },
    { nome: "As Estruturas Antropológicas do Imaginário", tradicao: "Gilbert Durand", descricao: "Tipologia dos símbolos universais e das estruturas do imaginário humano." },
    { nome: "N'Kongo Ye Nza Yakun'zungidila", tradicao: "Bunseki Fu-Kiau", descricao: "'O Kongo e a sua Doutrina'. Cosmologia, religião e filosofia do povo Kongo." },
    { nome: "Flash of the Spirit", tradicao: "Robert Farris Thompson", descricao: "'O Relâmpago do Espírito'. Arte e filosofia africana nas Américas." },
    { nome: "The Afrocentric Idea", tradicao: "Molefi Kete Asante", descricao: "Fundamentos do Afrocentrismo como método acadêmico e epistemologia." },
    { nome: "They Came Before Columbus", tradicao: "Ivan Van Sertima", descricao: "Evidências de contatos africanos pré-colombianos com as Américas." },
    { nome: "Os Nagô e a Morte", tradicao: "Juana Elbein dos Santos", descricao: "Estudo antropológico do Candomblé de Angola e suas relações com a morte e os ancestrais." },
    { nome: "Grande Sertão: Veredas", tradicao: "Guimarães Rosa", descricao: "'O sertão é o mundo'. Riobaldo atravessa o sertão e a si mesmo. A travessia como condição ontológica." },
    { nome: "Philosophy and an African Culture", tradicao: "Kwasi Wiredu", descricao: "Filosofia africana desvinculada do colonialismo epistêmico. Conceito de 'consciencialismo'." }
  ]
};

// ═══════════════════════════════════════════════════════════════════
//  ROTAS DA API
// ═══════════════════════════════════════════════════════════════════

// ✅ Rota raiz - serve o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ✅ Rota de pesquisa por termo (em TODAS as categorias)
app.get('/pesquisar/:termo', (req, res) => {
  const termo = req.params.termo.toLowerCase();
  const resultados = [];

  for (const categoria in dados) {
    dados[categoria].forEach(item => {
      if (
        item.nome.toLowerCase().includes(termo) ||
        item.tradicao.toLowerCase().includes(termo) ||
        item.descricao.toLowerCase().includes(termo)
      ) {
        resultados.push({ categoria, ...item });
      }
    });
  }

  res.json({
    termo: req.params.termo,
    total: resultados.length,
    resultados
  });
});

// ✅ Rota por tradição/categoria
app.get('/tradicao/:termo', (req, res) => {
  const termo = req.params.termo.toLowerCase();
  const resultados = {};

  for (const categoria in dados) {
    resultados[categoria] = dados[categoria].filter(item =>
      item.tradicao.toLowerCase().includes(termo) ||
      item.nome.toLowerCase().includes(termo)
    );
  }

  res.json({ termo: req.params.termo, ...resultados });
});

// ✅ Rota por categoria específica
app.get('/categoria/:nome', (req, res) => {
  const categoria = req.params.nome.toLowerCase();
  const chaves = Object.keys(dados);
  const encontrada = chaves.find(k => k.toLowerCase() === categoria);

  if (encontrada) {
    res.json({ categoria: encontrada, total: dados[encontrada].length, dados: dados[encontrada] });
  } else {
    res.status(404).json({ erro: 'Categoria não encontrada', categoriasDisponiveis: chaves });
  }
});

// ✅ Rotas diretas para cada categoria
app.get('/conceitos', (req, res) => res.json({ categoria: 'conceitos', total: dados.conceitos.length, dados: dados.conceitos }));
app.get('/divindades', (req, res) => res.json({ categoria: 'divindades', total: dados.divindades.length, dados: dados.divindades }));
app.get('/inkices', (req, res) => res.json({ categoria: 'inkices', total: dados.inkices.length, dados: dados.inkices }));
app.get('/cosmogonias', (req, res) => res.json({ categoria: 'cosmogonias', total: dados.cosmogonias.length, dados: dados.cosmogonias }));
app.get('/ritos', (req, res) => res.json({ categoria: 'ritos', total: dados.ritos.length, dados: dados.ritos }));
app.get('/civilizacoes', (req, res) => res.json({ categoria: 'civilizacoes', total: dados.civilizacoes.length, dados: dados.civilizacoes }));
app.get('/linguas', (req, res) => res.json({ categoria: 'linguas', total: dados.linguas.length, dados: dados.linguas }));
app.get('/escritas', (req, res) => res.json({ categoria: 'escritas', total: dados.escritas.length, dados: dados.escritas }));
app.get('/autores', (req, res) => res.json({ categoria: 'autores', total: dados.autores.length, dados: dados.autores }));
app.get('/arquetipos', (req, res) => res.json({ categoria: 'arquetipos', total: dados.arquetipos.length, dados: dados.arquetipos }));
app.get('/livros', (req, res) => res.json({ categoria: 'livros', total: dados.livros.length, dados: dados.livros }));

// ═══════════════════════════════════════════════════════════════════
//  INICIA O SERVIDOR
// ═══════════════════════════════════════════════════════════════════

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('═══════════════════════════════════════════════════════════════════');
  console.log('  🌍 API DE COSMOLOGIA AFRICANA — SERVIDOR ATIVO v3.0');
  console.log('  INKICES + LÍNGUAS + ESCRITAS COM EXEMPLOS');
  console.log('═══════════════════════════════════════════════════════════════════');
  console.log(`  📡 Servidor rodando em: http://localhost:${PORT}`);
  console.log(`  📁 Pasta: ${__dirname}`);
  console.log('');
  console.log('  🔍 ROTAS DISPONÍVEIS:');
  console.log(`     • http://localhost:${PORT}/                    → Interface Web`);
  console.log(`     • http://localhost:${PORT}/pesquisar/bantu     → Pesquisar por termo`);
  console.log(`     • http://localhost:${PORT}/tradicao/bantu      → Filtrar por tradição`);
  console.log(`     • http://localhost:${PORT}/categoria/conceitos → Listar categoria`);
  console.log('');
  console.log('  📂 CATEGORIAS:');
  console.log(`     • /conceitos    → ${dados.conceitos.length} itens`);
  console.log(`     • /divindades   → ${dados.divindades.length} itens`);
  console.log(`     • /inkices      → ${dados.inkices.length} itens (NOVO!)`);
  console.log(`     • /cosmogonias  → ${dados.cosmogonias.length} itens`);
  console.log(`     • /ritos        → ${dados.ritos.length} itens`);
  console.log(`     • /civilizacoes → ${dados.civilizacoes.length} itens`);
  console.log(`     • /linguas      → ${dados.linguas.length} itens`);
  console.log(`     • /escritas     → ${dados.escritas.length} itens (com exemplos!)`);
  console.log(`     • /autores      → ${dados.autores.length} itens`);
  console.log(`     • /arquetipos   → ${dados.arquetipos.length} itens`);
  console.log(`     • /livros       → ${dados.livros.length} itens`);
  console.log('');
  console.log('  💡 Exemplos de pesquisa:');
  console.log(`     • http://localhost:${PORT}/pesquisar/aluvaia`);
  console.log(`     • http://localhost:${PORT}/pesquisar/matamba`);
  console.log(`     • http://localhost:${PORT}/pesquisar/mandombe`);
  console.log(`     • http://localhost:${PORT}/pesquisar/swahili`);
  console.log(`     • http://localhost:${PORT}/pesquisar/adinkra`);
  console.log('═══════════════════════════════════════════════════════════════════');
});
