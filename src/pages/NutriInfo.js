import React from 'react';
import NutriCard from '../componenets/NutriCard';
import { motion } from 'framer-motion';

import CaldoAbobora from '../assets/caldp abóbora.jpg';
import CaldoFeijao from '../assets/caldo feijão.jpg';
import CaldoVerde from '../assets/caldo verde.jpg';
import PolpetoneSugo from '../assets/Polpetone ao sugo.jpg';
import CubosFrango from '../assets/cubos de frango ao açafrão.jpeg';
import EscondidinhoFrango from '../assets/Escodidinho de frango.jpg';
import LazanhaCogumelos from '../assets/Lazanha cogumelos.jpg';
import Salmao from '../assets/salmão.jpg';
import Nhoque from '../assets/nhoque.jpg';
import EscondidinhoCarne from '../assets/Escodidinho de carne.jpg';
import MoquecaPeixe from '../assets/moqueca.jpg';
import MoquecaBanana from '../assets/moqueca-de-banana.jpg';
import PureAbobora from '../assets/p pure abóbora.jpg';
import Arroz from '../assets/p arroz.jpg';
import Feijao from '../assets/p feijão.jpg';
import Legumes from '../assets/p legumes.jpg';
import Brocolis from '../assets/p brócolis.jpg';
import CarneMoida from '../assets/p carne moída.jpg';
import TirasFrango from '../assets/p franfo tiras.jpg';
import HamburguerBeterraba from '../assets/p hamburge beterraba.jpg';
import QuicheAlhoPoro from '../assets/Quiche de alho poró.jpg';
import QuicheShimeji from '../assets/Quiche de cogumelos frescos.jpg';
import QuichePernil from '../assets/Quiche de pernil com cebola caramelizada.jpg';
import QuicheCamarao from '../assets/Quiche de camarão.jpg';
import Galinhada from '../assets/Galinhada.jpg';

function NutriInfo() {
  return (
    <motion.div
      className='nutri-container container-fluid'
      initial={{ opacity: 0, filter: 'blur(8px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)', transition: { duration: 0.5 } }}
      exit={{ opacity: 0, filter: 'blur(8px)', transition: { duration: 0.7 } }}
    >
      <p className='h1 mt-5 mb-5 text-center'><strong>Informações Nutricionais</strong></p>
      {products.map((product, id) => {
        return (
          <NutriCard key={id} product={product} id={id} />
        )
      })}
    </motion.div>
  );
}

export default NutriInfo;


const products = [
  {
    name: 'Caldo de Abóbora com Gengibre',
    image: CaldoAbobora,
    portionText: 'Porção de 100g (1 porção)',
    subText1: '(**) VD não estabelecido.',
    subText2: 'Ingredientes: abóbora, cebola, alho, sal marinho, gengibre e salsinha.',
    subText3: 'NÃO CONTÉM ALERGÊNICOS.',
    subText4: 'NÃO CONTÉM GLÚTEN.',
    tableValues: {
      valorE: {
        value: '53 kcal = 222 kJ',
        porcentage: '2,64%'
      },
      carb: {
        value: '10,31 g',
        porcentage: '3,44%'
      },
      prot: {
        value: '1,52 g',
        porcentage: '2,02%'
      },
      gordTotais: {
        value: '0,61 g',
        porcentage: '1,12%'
      },
      gordS: {
        value: '0,09 g',
        porcentage: '0,40%'
      },
      gordTrans: {
        value: '0,31 g',
        porcentage: '**'
      },
      fibraA: {
        value: '2,39 g',
        porcentage: '9,56%'
      },
      sodio: {
        value: '2,28 mg',
        porcentage: '0,09%'
      }
    }
  },
  {
    name: 'Caldo de Feijão com Bacon',
    image: CaldoFeijao,
    portionText: 'Porção de 100g (1 porção)',
    subText1: '(**) VD não estabelecido.',
    subText2: 'Ingredientes: feijão preto, cebola, alho, bacon, sal marinho e azeite.',
    subText3: 'NÃO CONTÉM ALERGÊNICOS.',
    subText4: 'NÃO CONTÉM GLÚTEN.',
    tableValues: {
      valorE: {
        value: '150 kcal = 628 kJ',
        porcentage: '7,48%'
      },
      carb: {
        value: '19,77 g',
        porcentage: '6,59%'
      },
      prot: {
        value: '6,56 g',
        porcentage: '8,75%'
      },
      gordTotais: {
        value: '4,91 g',
        porcentage: '8,93%'
      },
      gordS: {
        value: '0,4 g',
        porcentage: '1,81%'
      },
      gordTrans: {
        value: '1,82 g',
        porcentage: '**'
      },
      fibraA: {
        value: '11,11 g',
        porcentage: '44,46%'
      },
      sodio: {
        value: '4,03 mg',
        porcentage: '0,17%'
      }
    }
  },
  {
    name: 'Caldo Verde com Calabresa',
    image: CaldoVerde,
    portionText: 'Porção de 100g (1 porção)',
    subText1: '(**) VD não estabelecido.',
    subText2: 'Ingredientes: batata, cebola, alho, couve, linguiça calabresa, azeite, sal marinho.',
    subText3: 'NÃO CONTÉM ALERGÊNICOS.',
    subText4: 'NÃO CONTÉM GLÚTEN.',
    tableValues: {
      valorE: {
        value: '89 kcal = 373 kJ',
        porcentage: '4,44%'
      },
      carb: {
        value: '8,55 g',
        porcentage: '2,85%'
      },
      prot: {
        value: '3,87 g',
        porcentage: '5,16%'
      },
      gordTotais: {
        value: '4,34 g',
        porcentage: '7,90%'
      },
      gordS: {
        value: '1,09 g',
        porcentage: '4,97%'
      },
      gordTrans: {
        value: '2,6 g',
        porcentage: '**'
      },
      fibraA: {
        value: '1,49 g',
        porcentage: '5,97%'
      },
      sodio: {
        value: '176,87 mg',
        porcentage: '7,37%'
      }
    }
  },
  {
    name: 'Polpetone ao sugo, com batata saute e brócolis cozido',
    image: PolpetoneSugo,
    portionText: 'Porção de 100g (1 porção)',
    subText1: '(**) VD não estabelecido.',
    subText2: 'Ingredientes: carne moída de acém, batata, brócolis, molho de tomate caseiro, ovo, farinha de rosca, manteiga, azeite, sal marinho, pimenta do reino, manjericão e salsinha.',
    subText3: 'ALÉRGICOS: CONTÉM, DERIVADOS DE LEITE, TRIGO, CENTEIO, CEVADA, AVEIA, OVOS, LEITE.',
    subText4: 'NÃO CONTÉM GLÚTEN.',
    tableValues: {
      valorE: {
        value: '139 kcal = 582 kJ',
        porcentage: '6,93%'
      },
      carb: {
        value: '10,99 g',
        porcentage: '3,66%'
      },
      prot: {
        value: '4,45 g',
        porcentage: '5,93%'
      },
      gordTotais: {
        value: '8,53 g',
        porcentage: '15,51%'
      },
      gordS: {
        value: '2,59 g',
        porcentage: '11,77%'
      },
      gordTrans: {
        value: '5,03 g',
        porcentage: '**'
      },
      fibraA: {
        value: '1,67 g',
        porcentage: '6,66%'
      },
      sodio: {
        value: '68,86 mg',
        porcentage: '2,87%'
      }
    }
  },
  {
    name: 'Cubos de Frango ao Açafrão com arroz branco e creme de milho',
    image: CubosFrango,
    portionText: 'Porção de 100g (1 porção)',
    subText1: '(**) VD não estabelecido.',
    subText2: 'Ingredientes: peito de frango, cebola, alho, arroz branco, azeite, açafrão, limão, leite, farinha de trigo, milho, sal marinho, pimenta do reino e noz moscada.',
    subText3: 'ALÉRGICOS: CONTÉM, DERIVADOS DE LEITE, TRIGO, LEITE, NOZES.',
    subText4: 'CONTÉM GLÚTEN. CONTÉM LACTOSE.',
    tableValues: {
      valorE: {
        value: '194 kcal = 815 kJ',
        porcentage: '9,70%'
      },
      carb: {
        value: '17,68 g',
        porcentage: '5,89%'
      },
      prot: {
        value: '13,33 g',
        porcentage: '17,77%'
      },
      gordTotais: {
        value: '7,77 g',
        porcentage: '14,13%'
      },
      gordS: {
        value: '3,21 g',
        porcentage: '14,58%'
      },
      gordTrans: {
        value: '3,44 g',
        porcentage: '**'
      },
      fibraA: {
        value: '1,46 g',
        porcentage: '5,83%'
      },
      sodio: {
        value: '60,8 mg',
        porcentage: '2,53%'
      }
    }
  },
  {
    name: 'Escondidinho de frango com batata doce',
    image: EscondidinhoFrango,
    portionText: 'Porção de 100g (1 porção)',
    subText1: '(**) VD não estabelecido.',
    subText2: 'Ingredientes: peito de frango, batata doce, cebola, alho, azeite, salsinha, leite, manteiga, requeijão, sal marinho, pimenta do reino e muçarela ralada.',
    subText3: 'ALÉRGICOS: CONTÉM, DERIVADOS DE LEITE, LEITE.',
    subText4: 'NÃO CONTÉM GLÚTEN. CONTÉM LACTOSE.',
    tableValues: {
      valorE: {
        value: '147 kcal = 617 kJ',
        porcentage: '7,34%'
      },
      carb: {
        value: '9,31 g',
        porcentage: '3,10%'
      },
      prot: {
        value: '10,96 g',
        porcentage: '14,61%'
      },
      gordTotais: {
        value: '7,29 g',
        porcentage: '13,26%'
      },
      gordS: {
        value: '3,59 g',
        porcentage: '16,30%'
      },
      gordTrans: {
        value: '2,36 g',
        porcentage: '**'
      },
      fibraA: {
        value: '1,41 g',
        porcentage: '5,64%'
      },
      sodio: {
        value: '84,66 mg',
        porcentage: '3,53%'
      }
    }
  },
  {
    name: 'Lasanha de Shimeji com brócolis',
    image: LazanhaCogumelos,
    portionText: 'Porção de 100g (1 porção)',
    subText1: '(**) VD não estabelecido.',
    subText2: 'Ingredientes: shimeji branco, brócolis, cebola, manteiga, leite integral, farinha de trigo, shoyu, noz moscada, requeijão, massa de lasanha e muçarela.',
    subText3: 'ALÉRGICOS: CONTÉM, DERIVADOS DE LEITE, TRIGO, OVOS, LEITE, NOZES.',
    subText4: 'CONTÉM GLÚTEN. CONTÉM LACTOSE.',
    tableValues: {
      valorE: {
        value: '119 kcal = 500 kJ',
        porcentage: '5,95%'
      },
      carb: {
        value: '10,14 g',
        porcentage: '3,38%'
      },
      prot: {
        value: '4,1 g',
        porcentage: '5,47%'
      },
      gordTotais: {
        value: '6,89 g',
        porcentage: '12,52%'
      },
      gordS: {
        value: '3,8 g',
        porcentage: '17,29%'
      },
      gordTrans: {
        value: '1,51 g',
        porcentage: '**'
      },
      fibraA: {
        value: '1,24 g',
        porcentage: '4,98%'
      },
      sodio: {
        value: '423,51 mg',
        porcentage: '17,65%'
      }
    }
  },
  {
    name: 'Salmão grelhado com arroz negro aromatizado no alecrim',
    image: Salmao,
    portionText: 'Porção de 100g (1 porção)',
    subText1: '(**) VD não estabelecido.',
    subText2: 'Ingredientes: posta de salmão, arroz negro, alho, azeite, sal marinho, pimenta do reino, limão siciliano, vinho branco e alecrim.',
    subText3: 'ALÉRGICOS: CONTÉM PEIXES.',
    subText4: 'NÃO CONTÉM GLÚTEN.',
    tableValues: {
      valorE: {
        value: '301 kcal = 1264 kJ',
        porcentage: '15,04%'
      },
      carb: {
        value: '29,83 g',
        porcentage: '9,94%'
      },
      prot: {
        value: '24,78 g',
        porcentage: '33,04%'
      },
      gordTotais: {
        value: '9,16 g',
        porcentage: '16,66%'
      },
      gordS: {
        value: '2,64 g',
        porcentage: '11,98%'
      },
      gordTrans: {
        value: '3,23 g',
        porcentage: '**'
      },
      fibraA: {
        value: '3,56 g',
        porcentage: '14,25%'
      },
      sodio: {
        value: '76,61 mg',
        porcentage: '3,19%'
      }
    }
  },
  {
    name: 'Nhoque de banana da terra ao molho de tomate',
    image: Nhoque,
    portionText: 'Porção de 100g (1 porção)',
    subText1: '(**) VD não estabelecido.',
    subText2: 'Ingredientes: banana da terra, molho de tomate, farinha de aveia, azeite, sal marinho, pimenta do reino e manjericão.',
    subText3: 'ALÉRGICOS: CONTÉM AVEIA.',
    subText4: 'NÃO CONTÉM GLÚTEN.',
    tableValues: {
      valorE: {
        value: '88 kcal = 789 kJ',
        porcentage: '9,39%'
      },
      carb: {
        value: '29,83 g',
        porcentage: '10,29% '
      },
      prot: {
        value: '2,89 g',
        porcentage: '3,85%'
      },
      gordTotais: {
        value: '5,87 g',
        porcentage: '10,66%'
      },
      gordS: {
        value: '0,88 g',
        porcentage: '4,00%'
      },
      gordTrans: {
        value: '3,78 g',
        porcentage: '**'
      },
      fibraA: {
        value: '2,3 g',
        porcentage: '9,19%'
      },
      sodio: {
        value: '70,56 mg',
        porcentage: '2,94%'
      }
    }
  },
  {
    name: 'Escondidinho de carne moída com purê de abóbora cabotiã',
    image: EscondidinhoCarne,
    portionText: 'Porção de 100g (1 porção)',
    subText1: '(**) VD não estabelecido.',
    subText2: 'Ingredientes: abóbora cabotiã, carne moída de acém, azeite, alho, leite, manteiga, pimenta do reino, noz moscada e muçarela ralada.',
    subText3: 'ALÉRGICOS: CONTÉM LEITE, NOZES.',
    subText4: 'NÃO CONTÉM GLÚTEN. CONTÉM LACTOSE',
    tableValues: {
      valorE: {
        value: '158 kcal = 667 kJ',
        porcentage: '7,93%'
      },
      carb: {
        value: '7,06 g',
        porcentage: '2,35% '
      },
      prot: {
        value: '12,44 g',
        porcentage: '16,58%'
      },
      gordTotais: {
        value: '8,97 g',
        porcentage: '16,30%'
      },
      gordS: {
        value: '3,92 g',
        porcentage: '17,84%'
      },
      gordTrans: {
        value: '4,41 g',
        porcentage: '**'
      },
      fibraA: {
        value: '1,64 g',
        porcentage: '6,55%'
      },
      sodio: {
        value: '31,85 mg',
        porcentage: '1,33%'
      }
    }
  },
  {
    name: 'Moqueca de Peixe',
    image: MoquecaPeixe,
    portionText: 'Porção de 100g (1 porção)',
    subText1: '(**) VD não estabelecido.',
    subText2: 'Ingredientes: cação, leite de coco, cebola, pimentão amarelo, tomate, azeite, alho, arroz integral, azeite de dendê, sal marinho, pimenta do reino, limão e salsinha.',
    subText3: 'ALÉRGICOS: CONTÉM, PEIXES.',
    subText4: 'NÃO CONTÉM GLÚTEN.',
    tableValues: {
      valorE: {
        value: '178 kcal = 745 kJ',
        porcentage: '8,86%'
      },
      carb: {
        value: '14,31 g',
        porcentage: '4,77% '
      },
      prot: {
        value: '16,67 g',
        porcentage: '22,23%'
      },
      gordTotais: {
        value: '5,93 g',
        porcentage: '10,78%'
      },
      gordS: {
        value: '1,15 g',
        porcentage: '5,21%'
      },
      gordTrans: {
        value: '0,33 g',
        porcentage: '**'
      },
      fibraA: {
        value: '1,62 g',
        porcentage: '6,47%'
      },
      sodio: {
        value: '69,35 mg',
        porcentage: '2,89%'
      }
    }
  },
  {
    name: 'Moqueca de Banana da Terra',
    image: MoquecaBanana,
    portionText: 'Porção de 100g (1 porção)',
    subText1: '(**) VD não estabelecido.',
    subText2: 'Ingredientes: banana da terra, leite de coco, cebola, pimentão amarelo, tomate, azeite, alho, arroz integral, azeite de dendê, sal marinho, pimenta do reino, limão e salsinha.',
    subText3: 'NÃO CONTÉM ALERGÊNICOS.',
    subText4: 'NÃO CONTÉM GLÚTEN.',
    tableValues: {
      valorE: {
        value: '190 kcal = 797 kJ',
        porcentage: '9,48%'
      },
      carb: {
        value: '35,38 g',
        porcentage: '11,79% '
      },
      prot: {
        value: '2,41 g',
        porcentage: '3,21%'
      },
      gordTotais: {
        value: '4,27 g',
        porcentage: '7,77%'
      },
      gordS: {
        value: '0,83 g',
        porcentage: '3,75%'
      },
      gordTrans: {
        value: '0,28 g',
        porcentage: '**'
      },
      fibraA: {
        value: '2,51 g',
        porcentage: '10,04%'
      },
      sodio: {
        value: '2,19 mg',
        porcentage: '0,09%'
      }
    }
  },
  {
    name: 'Purê de abóbora',
    image: PureAbobora,
    portionText: 'Porção de 120g (1 porção)',
    subText1: '(**) VD não estabelecido.',
    subText2: 'Ingredientes: abóbora cabotiã, leite integral, manteiga e sal marinho.',
    subText3: 'ALÉRGICOS: CONTÉM DERIVADOS DE LEITE.',
    subText4: 'NÃO CONTÉM GLÚTEN.',
    tableValues: {
      valorE: {
        value: '112 kcal = 470 kJ',
        porcentage: '5,58%'
      },
      carb: {
        value: '14,86 g',
        porcentage: '4,95% '
      },
      prot: {
        value: '1,95 g',
        porcentage: '2,60%'
      },
      gordTotais: {
        value: '4,94 g',
        porcentage: '8,98%'
      },
      gordS: {
        value: '3,17 g',
        porcentage: '14,40%'
      },
      gordTrans: {
        value: '1,25 g',
        porcentage: '**'
      },
      fibraA: {
        value: '3,44 g',
        porcentage: '13,76%'
      },
      sodio: {
        value: '10,52 mg',
        porcentage: '0,44%'
      }
    }
  },
  {
    name: 'Arroz Branco',
    image: Arroz,
    portionText: 'Porção de 100g (1 porção)',
    subText1: '(**) VD não estabelecido.',
    subText2: 'Ingredientes: arroz branco, alho, azeite e sal marinho.',
    subText3: 'NÃO CONTÉM ALERGÊNICOS.',
    subText4: 'NÃO CONTÉM GLÚTEN.',
    tableValues: {
      valorE: {
        value: '289 kcal = 1213 kJ',
        porcentage: '14,44%'
      },
      carb: {
        value: '49,49 g',
        porcentage: '16,50% '
      },
      prot: {
        value: '5,08 g',
        porcentage: '6,77%'
      },
      gordTotais: {
        value: '7,83 g',
        porcentage: '14,24%'
      },
      gordS: {
        value: '1,21 g',
        porcentage: '5,59%'
      },
      gordTrans: {
        value: '0,35 g',
        porcentage: '**'
      },
      fibraA: {
        value: '2,29 g',
        porcentage: '9,17%'
      },
      sodio: {
        value: '8,04 mg',
        porcentage: '0,34%'
      }
    }
  },
  {
    name: 'Feijão Carioca',
    image: Feijao,
    portionText: 'Porção de 100g (1 porção)',
    subText1: '(**) VD não estabelecido.',
    subText2: 'Ingredientes: feijão carioca, azeite, alho, cebola e sal marinho.',
    subText3: 'NÃO CONTÉM ALERGÊNICOS.',
    subText4: 'NÃO CONTÉM GLÚTEN.',
    tableValues: {
      valorE: {
        value: '149 kcal = 624 kJ',
        porcentage: '7,42%'
      },
      carb: {
        value: '22,38 g',
        porcentage: '7,46% '
      },
      prot: {
        value: '7,64 g',
        porcentage: '10,18%'
      },
      gordTotais: {
        value: '3,15 g',
        porcentage: '5,73%'
      },
      gordS: {
        value: '0,5 g',
        porcentage: '2,29%'
      },
      gordTrans: {
        value: '2,33 g',
        porcentage: '**'
      },
      fibraA: {
        value: '13,2 g',
        porcentage: '52,81%'
      },
      sodio: {
        value: '3,28 mg',
        porcentage: '0,14%'
      }
    }
  },
  {
    name: 'Mix de Legumes',
    image: Legumes,
    portionText: 'Porção de 120g (1 unidade)',
    subText1: '(**) VD não estabelecido.',
    subText2: 'Ingredientes: abobrinha, cenoura, batata doce, azeite, sal marinho e pimenta do reino.',
    subText3: 'NÃO CONTÉM ALERGÊNICOS.',
    subText4: 'NÃO CONTÉM GLÚTEN.',
    tableValues: {
      valorE: {
        value: '44 kcal = 182 kJ',
        porcentage: '2,16%'
      },
      carb: {
        value: '8,03 g',
        porcentage: '2,68% '
      },
      prot: {
        value: '1,18 g',
        porcentage: '1,58%'
      },
      gordTotais: {
        value: '0,7 g',
        porcentage: '1,28%'
      },
      gordS: {
        value: '0,13 g',
        porcentage: '0,57%'
      },
      gordTrans: {
        value: '0,51 g',
        porcentage: '**'
      },
      fibraA: {
        value: '1,97 g',
        porcentage: '7,87%'
      },
      sodio: {
        value: '3,66 mg',
        porcentage: '0,75%'
      }
    }
  },
  {
    name: 'Brócolis Cozido',
    image: Brocolis,
    portionText: 'Porção de 120g (1 porção)',
    subText1: '(**) VD não estabelecido.',
    subText2: 'Ingredientes: brócolis e sal marinho.',
    subText3: 'NÃO CONTÉM ALERGÊNICOS.',
    subText4: 'NÃO CONTÉM GLÚTEN.',
    tableValues: {
      valorE: {
        value: '33 kcal = 137 kJ',
        porcentage: '1,63%'
      },
      carb: {
        value: '4,7 g',
        porcentage: '1,57% '
      },
      prot: {
        value: '2,24 g',
        porcentage: '2,99%'
      },
      gordTotais: {
        value: '0,53 g',
        porcentage: '0,97%'
      },
      gordS: {
        value: '0,11 g',
        porcentage: '0,49%'
      },
      gordTrans: {
        value: '0,09 g',
        porcentage: '**'
      },
      fibraA: {
        value: '3,63 g',
        porcentage: '14,54%'
      },
      sodio: {
        value: '5,06 mg',
        porcentage: '0,21%'
      }
    }
  },
  {
    name: 'Carne Moída Árabe',
    image: CarneMoida,
    portionText: 'Porção de 120g (1 unidade)',
    subText1: '(**) VD não estabelecido.',
    subText2: 'Ingredientes: carne moída de acém, azeite, alho, sal marinho, zhatar e pimenta do reino.',
    subText3: 'NÃO CONTÉM ALERGÊNICOS.',
    subText4: 'NÃO CONTÉM GLÚTEN.',
    tableValues: {
      valorE: {
        value: '153 kcal = 639 kJ',
        porcentage: '7,61%'
      },
      carb: {
        value: '1,57 g',
        porcentage: '0,52% '
      },
      prot: {
        value: '20,54 g',
        porcentage: '27,38%'
      },
      gordTotais: {
        value: '7,08 g',
        porcentage: '12,87%'
      },
      gordS: {
        value: '3,03 g',
        porcentage: '13,78%'
      },
      gordTrans: {
        value: '3,12 g',
        porcentage: '**'
      },
      fibraA: {
        value: '0,27 g',
        porcentage: '1,09%'
      },
      sodio: {
        value: '66,08 mg',
        porcentage: '2,75%'
      }
    }
  },
  {
    name: 'Tiras de peito de frango com tomate cereja e manjericão',
    image: TirasFrango,
    portionText: 'Porção de 120g (1 unidade)',
    subText1: '(**) VD não estabelecido.',
    subText2: 'Ingredientes: peito de frango, tomate cereja, cebola, azeite, sal marinho, pimenta do reino e manjericão.',
    subText3: 'NÃO CONTÉM ALERGÊNICOS.',
    subText4: 'NÃO CONTÉM GLÚTEN.',
    tableValues: {
      valorE: {
        value: '201 kcal = 844 kJ',
        porcentage: '10,04%'
      },
      carb: {
        value: '2,56 g',
        porcentage: '0,85% '
      },
      prot: {
        value: '25,75 g',
        porcentage: '34,33%'
      },
      gordTotais: {
        value: '9,73 g',
        porcentage: '17,69%'
      },
      gordS: {
        value: '2,25 g',
        porcentage: '10,22%'
      },
      gordTrans: {
        value: '6,38 g',
        porcentage: '**'
      },
      fibraA: {
        value: '0,57 g',
        porcentage: '2,29%'
      },
      sodio: {
        value: '43,54 mg',
        porcentage: '1,81%'
      }
    }
  },
  {
    name: 'Hambúrguer de beterraba com especiarias',
    image: HamburguerBeterraba,
    portionText: 'Porção de 120g (1 unidade)',
    subText1: '(**) VD não estabelecido.',
    subText2: 'Ingredientes: beterraba, arroz integral, farinha de aveia, sal marinho, azeite e erva doce.',
    subText3: 'ALÉRGICOS: CONTÉM AVEIA.',
    subText4: 'NÃO CONTÉM GLÚTEN.',
    tableValues: {
      valorE: {
        value: '105 kcal = 439 kJ',
        porcentage: '5,22%'
      },
      carb: {
        value: '18,44 g',
        porcentage: '6,15% '
      },
      prot: {
        value: '2,73 g',
        porcentage: '3,64%'
      },
      gordTotais: {
        value: '2,19 g',
        porcentage: '3,99%'
      },
      gordS: {
        value: '0,57 g',
        porcentage: '2,57%'
      },
      gordTrans: {
        value: '1,01 g',
        porcentage: '**'
      },
      fibraA: {
        value: '2,33 g',
        porcentage: '9,31%'
      },
      sodio: {
        value: '6,82 mg',
        porcentage: '0,28%'
      }
    }
  },
  {
    name: 'Quiche de alho poró',
    image: QuicheAlhoPoro,
    portionText: 'Porção de 50g (1 fatia)',
    subText1: '(**) VD não estabelecido.',
    subText2: 'Ingredientes: alho poró, farinha de trigo, manteiga, ovo, creme de leite, mussarela ralada, azeite e sal marinho.',
    subText3: 'ALÉRGICOS: CONTÉM DERIVADOS DE LEITE, TRIGO, OVOS.',
    subText4: 'CONTÉM GLÚTEN.',
    tableValues: {
      valorE: {
        value: '174 kcal = 730 kJ',
        porcentage: '8,69%'
      },
      carb: {
        value: '12,29 g',
        porcentage: '4,10% '
      },
      prot: {
        value: '3,98 g',
        porcentage: '5,31%'
      },
      gordTotais: {
        value: '12,08 g',
        porcentage: '21,96%'
      },
      gordS: {
        value: '6,04 g',
        porcentage: '27,44%'
      },
      gordTrans: {
        value: '3,86 g',
        porcentage: '**'
      },
      fibraA: {
        value: '0,68 g',
        porcentage: '2,73%'
      },
      sodio: {
        value: '41,12 mg',
        porcentage: '1,71%'
      }
    }
  },
  {
    name: 'Quiche de shimeji',
    image: QuicheShimeji,
    portionText: 'Porção de 50g (1 fatia)',
    subText1: '(**) VD não estabelecido.',
    subText2: 'Ingredientes: shimeji branco, farinha de trigo, manteiga, ovo, creme de leite, mussarela ralada e shoyu.',
    subText3: 'ALÉRGICOS: CONTÉM DERIVADOS DE LEITE, TRIGO, OVOS.',
    subText4: 'CONTÉM GLÚTEN.',
    tableValues: {
      valorE: {
        value: '164 kcal = 686 kJ',
        porcentage: '8,16%'
      },
      carb: {
        value: '12,34 g',
        porcentage: '4,11% '
      },
      prot: {
        value: '3,95 g',
        porcentage: '5,27%'
      },
      gordTotais: {
        value: '10,9 g',
        porcentage: '19,82%'
      },
      gordS: {
        value: '5,95 g',
        porcentage: '27,04%'
      },
      gordTrans: {
        value: '2,81 g',
        porcentage: '**'
      },
      fibraA: {
        value: '0,6 g',
        porcentage: '2,42%'
      },
      sodio: {
        value: '210,04 mg',
        porcentage: '8,75%'
      }
    }
  },
  {
    name: 'Quiche de pernil com cebola caramelizada',
    image: QuichePernil,
    portionText: 'Porção de 50g (1 fatia)',
    subText1: '(**) VD não estabelecido.',
    subText2: 'Ingredientes: pernil suíno, farinha de trigo, manteiga, ovo, creme de leite, cebola, mussarela ralada, açúcar mascavo, alho, limão e vinagre.',
    subText3: 'ALÉRGICOS: CONTÉM DERIVADOS DE LEITE, TRIGO, OVOS.',
    subText4: 'CONTÉM GLÚTEN.',
    tableValues: {
      valorE: {
        value: '200 kcal = 840 kJ',
        porcentage: '9,99%'
      },
      carb: {
        value: '14,27 g',
        porcentage: '4,76% '
      },
      prot: {
        value: '7,19 g',
        porcentage: '9,59%'
      },
      gordTotais: {
        value: '12,66 g',
        porcentage: '23,02%'
      },
      gordS: {
        value: '6,64 g',
        porcentage: '30,20%'
      },
      gordTrans: {
        value: '3,69 g',
        porcentage: '**'
      },
      fibraA: {
        value: '0,56 g',
        porcentage: '2,26%'
      },
      sodio: {
        value: '49,36 mg',
        porcentage: '2,06%'
      }
    }
  },
  {
    name: 'Quiche de camarão',
    image: QuicheCamarao,
    portionText: 'Porção de 50g (1 fatia)',
    subText1: '(**) VD não estabelecido.',
    subText2: 'Ingredientes: camarão, farinha de trigo, manteiga, ovo, creme de leite, cebola, alho, tomate, mussarela ralada e limão.',
    subText3: 'ALÉRGICOS: CONTÉM DERIVADOS DE LEITE, TRIGO, OVOS.',
    subText4: 'CONTÉM GLÚTEN.',
    tableValues: {
      valorE: {
        value: '159 kcal = 667 kJ',
        porcentage: '7,94%'
      },
      carb: {
        value: '11,58 g',
        porcentage: '3,86% '
      },
      prot: {
        value: '5,18 g',
        porcentage: '6,91%'
      },
      gordTotais: {
        value: '10,19 g',
        porcentage: '18,52%'
      },
      gordS: {
        value: '5,53 g',
        porcentage: '25,16%'
      },
      gordTrans: {
        value: '2,64 g',
        porcentage: '**'
      },
      fibraA: {
        value: '0,41 g',
        porcentage: '1,63%'
      },
      sodio: {
        value: '66,64 mg',
        porcentage: '2,78%'
      }
    }
  },
  {
    name: 'Galinhada com arroz 7 grãos',
    image: Galinhada,
    portionText: 'Porção de 100g (1 porção)',
    subText1: '(**) VD não estabelecido.',
    subText2: 'Ingredientes: peito de frango, arroz sete grãos, milho, cebola, tomate, azeite, salsinha, sal, vinagre, pimenta do reino.',
    subText3: 'NÃO CONTÉM ALERGÊNICOS.',
    subText4: 'NÃO CONTÉM GLÚTEN.',
    tableValues: {
      valorE: {
        value: '139,81 kcal',
        porcentage: '25,00%'
      },
      carb: {
        value: '13,93 g',
        porcentage: '17,00% '
      },
      prot: {
        value: '13,93 g',
        porcentage: '81,00%'
      },
      gordTotais: {
        value: '0 g',
        porcentage: '28,00%'
      },
      gordS: {
        value: '11,43 g',
        porcentage: '44,00%'
      },
      gordTrans: {
        value: '5,02 g',
        porcentage: '**'
      },
      fibraA: {
        value: '2,48 g',
        porcentage: '22,00%'
      },
      sodio: {
        value: '0,17 g',
        porcentage: '9,00%'
      }
    }
  }
]