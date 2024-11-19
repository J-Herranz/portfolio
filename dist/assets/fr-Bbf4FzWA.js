const e=[{appCode:"countryInfo",appName:"Infos sur un pays au hasard",appIconFile:"countries2_white.png",subAppThumbnailFileName:"countryInfo.jpg",subAppDescription:"Obtenez des informations sur un pays au hasard en utilisant deux API différentes, la deuxième requête dépendant des informations récupérées de la première.",toolTipInfo:"Application qui tire au sort un pays en utilisant le package npm random-country.<br><br>Avec le code du pays obtenu, elle recherche son nom et son drapeau sur l'API restcountries.com.<br><br>Ensuite, elle utilise le nom commun obtenu de cette recherche pour récupérer des informations supplémentaires via l'API de Wikipedia.",emptyCode:"Code pays non attribué",countryNotFound:"Pays non trouvé",wikiInfoNotFound:"Informations Wikipedia non trouvées",countryCode:"Code du pays",loading:"Chargement...",weather:{0:"Ciel Dégagé",1:"Principalement Dégagé",2:"Partiellement Nuageux",3:"Couvert",45:"Brouillard",48:"Brouillard avec Dépôt de Givre",51:"Fine Bruine",53:"Bruine Modérée",55:"Dense Bruine",56:"Fine Bruine Verglaçante",57:"Dense Bruine Verglaçante",61:"Légère Pluie",63:"Pluie Modérée",65:"Forte Pluie",66:"Pluie Verglaçante Légère",67:"Forte Pluie Verglaçante",71:"Chute de Neige Légère",73:"Chute de Neige Modérée",75:"Forte Chute de Neige",77:"Grains de Neige",80:"Averses de Pluie Légères",81:"Averses de Pluie Modérées",82:"Averses de Pluie Violentes",85:"Averses de Neige Légères",86:"Averses de Neige Fortes",95:"Orage",96:"Orage avec Grêle Légère",99:"Orage avec Forte Grêle"},appUrl:""},{appCode:"home",appName:"Accueil",appIconFile:"home1_white.png",subAppThumbnailFileName:"",subAppDescription:"",toolTipInfo:"",appUrl:""},{appCode:"survey",appName:"Questionnaire",appIconFile:"survey2_white.png",subAppThumbnailFileName:"survey.jpg",subAppDescription:"Cette application web propose un quiz où les utilisateurs voient une photo d'un membre de la famille des félidés et doivent sélectionner la bonne espèce parmi une liste d'options. Que ce soit un lion, un tigre, un léopard ou un chat domestique, l'utilisateur doit associer l'animal à son espèce. C’est un moyen amusant et interactif d’en apprendre davantage sur ces animaux fascinants et d’améliorer ses compétences en reconnaissance !",toolTipInfo:"Le questionnaire est basé sur des informations et des images extraites de Wikipedia.<br><br>Il consiste en un tirage au sort de 10 images, dans lesquelles l'utilisateur doit identifier l'espèce montrée.<br><br>En cas d'échec, un indice sera tiré au hasard et affiché à l'utilisateur pour l'aider à répondre correctement.",appUrl:""},{appCode:"wordle",appName:"Motus",appIconFile:"wordle1_white.png",subAppThumbnailFileName:"wordle.jpg",subAppDescription:`L'application du jeu "Motus" propose un défi de mots où les joueurs doivent deviner un mot en six essais, en recevant des indices sur les lettres correctes et leur position, favorisant la réflexion stratégique.`,toolTipInfo:"Motus défie les joueurs de deviner un mot caché de 5 lettres (sans accents) en 6 essais.<br><br>Les utilisateurs peuvent saisir des lettres à l'aide du clavier de l'ordinateur ou du mobile, ou d'un clavier virtuel.<br><br>À chaque tentative, les cases affichent un fond jaune pour les lettres présentes dans le mot mais pas à la bonne position, et vert pour les lettres à la bonne position",newGame:"Nouvelle partie",keyboardLanguageError:"Le langage du clavier n'a pas pu être chargé pour le code de langue",openVirtualKeyboard:"Ouvrir clavier virtuel",closeVirtualKeyboard:"Fermer clavier virtuel",incorrectLengthMessage:"Veuillez entrer un mot de 5 lettres",wordNotFoundMessage:"Ce mot n'est pas dans la liste",defeatMessage:"Désolé, vous n'avez pas deviné le mot. Le mot était :",victoryMessage:"Félicitations ! Vous avez deviné le mot :",appUrl:""}],s="Tous droits réservés.",a={},n={},r={newCountryButton:"Nouveau pays"},t={},u={},i={jobTitle:"Développeur Full Stack",userDescription:"Je souhaite me spécialiser dans le développement web, en particulier avec React et Node.js. En tant que développeur web, j'ai mené à bien trois projets professionnels, de leur conception à leur déploiement, et réalisé plusieurs projets personnels avec React.js. Je maîtrise des compétences solides en JavaScript, HTML, CSS, PHP, Git/GitHub, SQL et PL/SQL, et je suis capable de transformer les besoins des utilisateurs en solutions web concrètes. Sur ce site, vous pourrez découvrir certains de mes projets personnels.",projects:"Projets"},o={},l={backToSurveyMain:"Retour au Menu",clueTitle:"Indices",mainPageTitle:"Apprendre sur les félins",nextQuestion:"Question suivante",prepareSurvey:"Rencontrez les Félins",question:"Qui suis-je ?",quitSurvey:"Quitter le questionnaire",results:"Résultats du questionnaire",resultsMessage:{good:"Félicitations ! Vous avez répondu correctement à toutes les questions sur les félins. Le monde des félins n'a aucun secret pour vous !",medium:"Bon travail ! Vous avez répondu correctement à de nombreuses questions, mais il y a encore quelques domaines à améliorer. Continuez à vous entraîner et vous maîtriserez le monde des félins !",bad:"Ne vous inquiétez pas ! Bien que le résultat n'ait pas été à la hauteur de vos attentes, vous avez l'opportunité d'apprendre et de vous améliorer. Révisez le contenu et vous serez bien mieux préparé la prochaine fois. Vous pouvez le faire !"},resultsScore1:"Vous avez obtenu",resultsScore2:"points sur un total de 30.",scoreExplanation:`La notation du test est la suivante :
- 3 points pour chaque réponse correcte sans erreurs.
- 2 points pour chaque réponse correcte avec 1 erreur.
- 1 point pour chaque réponse correcte avec 2 erreurs.
- 0 point si la réponse comporte 3 erreurs ou plus.`,scoreExplanationTitle:"Guide de Notation",startSurvey:"Commencer le questionnaire",species:{caracal:{name:"Caracal",binomialNomenclature:"Caracal caracal",info:`Le caracal (<i>Caracal caracal</i>) est un chat sauvage de taille moyenne originaire d'Afrique, du Moyen-Orient, d'Asie centrale, ainsi que des zones arides du Pakistan et du nord-ouest de l'Inde. Il se caractérise par une construction robuste, de longues pattes, un visage court, de grandes oreilles touffues, une queue relativement courte et de longues dents canines.<br><br>Son pelage est uniformément de couleur fauve-rouge ou sable, tandis que les parties ventrales sont plus claires avec de petites marques rouges. C'est un chat de taille moyenne (entre 60 et 92 cm (1 pi 11,5 po – 3 pi) de longueur, sans la queue) et pèse entre 8 et 19 kg (18 à 42 lb). Le caracal est <strong>parfois appelé "lynx africain"</strong>, mais il n'est pas étroitement lié aux lynx, et semble être plus étroitement lié au serval.`,clues:["Originaire d'Afrique, du Moyen-Orient, d'Asie centrale et des régions arides du Pakistan et du nord-ouest de l'Inde.","Chat de taille moyenne, mesurant entre 60 et 92 cm (1 pi 11,5 po – 3 pi) de longueur, sans inclure la queue, et pesant entre 8 et 19 kg (18–42 lb).",'Parfois appelé "lynx africain".']},cat:{name:"Chat domestique",binomialNomenclature:"Felis catus",info:"Le chat domestique (<i>Felis catus</i>), est un petit mammifère carnivore domestiqué. C'est la <strong>seule espèce domestiquée de la famille des félidés</strong>.<br><br>Les progrès de l'archéologie et de la génétique ont montré que la domestication du chat a eu lieu au Proche-Orient vers 7500 avant J.-C. La communication des chats inclut des vocalisations — miaulements, ronronnements, trilles, sifflements, grognements et gémissements — ainsi que le langage corporel.<br><br>Il mesure en moyenne environ 46 cm (18 po) de la tête à la base de la queue et 23 à 25 cm (9,1 à 9,8 po) de hauteur, avec une queue de 30 cm (12 po). Les chats domestiques adultes pèsent généralement entre 4 et 5 kg (8,8 à 11,0 lb).",clues:["La seule espèce domestiquée de la famille des Félidés.","Capable de communiquer par miaulements, ronronnements, trilles, sifflements, grondements et grognements.","Pèse généralement entre 4 et 5 kg (8,8–11,0 lb)."]},cheetah:{name:"Guépard",binomialNomenclature:"Acinonyx jubatus",info:"Le guépard (<i>Acinonyx jubatus</i>) est un grand chat et <strong>l'animal terrestre le plus rapide</strong>. Il a un pelage allant du fauve au blanc crème ou beige clair, parsemé de <span class='species-spot-pattern'>taches noires uniformément espacées</span>.<br><br>La tête est petite et arrondie, avec un museau court et des rayures noires en forme de larmes sur le visage. Il atteint de 67 à 94 cm (26 à 37 po) au niveau des épaules, et la longueur tête-corps varie entre 1,1 et 1,5 m (3 pi 7 po à 4 pi 11 po). Les adultes pèsent entre 21 et 72 kg (46 à 159 lb). Le guépard est capable de courir à 93 à 104 km/h (58 à 65 mph) ; il a évolué avec des adaptations spécialisées pour la vitesse, telles qu'une construction légère, de longues jambes fines et une longue queue.<br><br>Actuellement réparti principalement en petites populations fragmentées dans le nord-ouest, l'est et le sud de l'Afrique, ainsi qu'en Iran central.",clues:["The fastest land animal, capable of reaching speeds of 93 to 104 km/h (58 to 65 mph).","Small, rounded head with a short snout and distinctive black tear-like facial streaks.","Found mainly in northwestern, eastern, and southern Africa, as well as central Iran."]},cloudedLeopard:{name:"Panthère nébuleuse",binomialNomenclature:"Neofelis nebulosa",info:"La Panthère nébuleuse (<i>Neofelis nebulosa</i>), aussi appelée Panthère longibande d’Indochine ou Léopard nébuleux, est un félin sauvage qui habite les forêts denses des contreforts de l’Himalaya, en passant par le nord-est de l’Inde et le Bhoutan jusqu'à l’Asie du Sud-Est continentale et le sud de la Chine.<br><br>La panthère nébuleuse a de grandes taches gris foncé et des taches et rayures irrégulières qui rappellent les nuages. Sa longueur de la tête au corps varie de 68,6 à 108 cm (27 à 42,5 pouces), avec une queue de 61 à 91 cm (24 à 36 pouces) de long.<br><br>Elle utilise sa queue pour s’équilibrer en se déplaçant dans les arbres et est capable de descendre les troncs d’arbres verticaux la tête en avant. Elle se repose dans les arbres pendant la journée et chasse la nuit sur le sol de la forêt.",clues:["Habite les forêts denses depuis les contreforts de l'Himalaya, à travers le nord-est de l'Inde et le Bhoutan jusqu'au sud-est asiatique continental et le sud de la Chine.","Présente de grandes taches gris foncé, avec des motifs irréguliers et des rayures rappelant des nuages.","Se repose dans les arbres le jour et chasse au sol la nuit."]},cougar:{name:"Puma",binomialNomenclature:"Puma concolor",info:"Le puma (<i>Puma concolor</i>), également connu sous le nom de lion de montagne, cougar ou cougouar, est un grand chat originaire des Amériques. Il vit en Amérique du Nord, du Centre et du Sud, ce qui en fait le mammifère terrestre sauvage le plus largement distribué de l'hémisphère occidental.<br><br>Il est le <strong>quatrième plus grand chat au monde</strong> ; les adultes mesurent environ 60 à 90 cm (24 à 35 po) au niveau des épaules. La taille adulte varie entre 1,50 et 2,75 m (4 pi 11 po à 9 pi 0 po) de la tête à la queue. Les adultes pèsent généralement entre 34 et 72 kg (75 à 159 lb).",clues:["Originaire des Amériques, présent dans une large zone allant de l'Amérique du Nord à l'Amérique centrale et du Sud.","Quatrième plus grande espèce de chat sauvage au monde.","Également connu sous le nom de lion de montagne."]},jaguar:{name:"Jaguar",binomialNomenclature:"Panthera onca",info:"Le jaguar (<i>Panthera onca</i>) est une grande espèce de chat et le seul membre vivant du genre Panthera qui soit originaire des Amériques. Avec une longueur de corps pouvant atteindre 1,85 m (6 pi 1 po) et un poids allant jusqu'à 158 kg (348 lb), il est le plus grand chat des Amériques et le <strong>troisième plus grand du monde</strong>.<br><br>Son pelage distinctif est composé de fourrure jaune pâle à couleur fauve recouverte de <span class='species-spot-pattern'>taches qui se transforment en rosettes</span> sur les flancs, bien qu'un <strong>pelage noir mélanistique</strong> apparaisse chez certains individus. Les taches et leur forme varient : sur les flancs, elles deviennent des rosettes pouvant comporter un ou plusieurs points.",clues:["Le plus grand chat des Amériques et le troisième plus grand au monde.","Présente des taches et des rosettes distinctives.","Un pelage noir mélanistique peut apparaître chez certains individus."]},leopard:{name:"Léopard",binomialNomenclature:"Panthera pardus",info:"Le léopard (<i>Panthera pardus</i>) ou la Panthère est l'une des cinq espèces actuelles du genre Panthera. Son corps est élancé et musclé, atteignant une longueur de 92 à 183 cm (36 à 72 po) avec une queue de 66 à 102 cm (26 à 40 po). Les mâles pèsent généralement entre 30,9 et 72 kg (68 à 159 lb), et les femelles entre 20,5 et 43 kg (45 à 95 lb).<br><br>Il a un pelage allant du jaune pâle au doré foncé avec des taches sombres regroupées en rosettes. Les <span class='species-spot-pattern'>rosettes du léopard diffèrent de celles du jaguar</span>, qui sont plus foncées et avec des taches plus petites à l'intérieur.<br><br>Les <span class='melanistic'>léopards mélanistiques</span> sont également connus sous le nom de panthères noires. Comparé à d'autres grands félins, le léopard a des pattes relativement courtes et un corps long avec un grand crâne.",clues:["Corps mince et musclé avec des jambes courtes et un corps long, doté d'un grand crâne.","Pelage distinctif en forme de rosettes.",'Forme mélanistique connue sous le nom de "panthère noire".']},lion:{name:"Lion",binomialNomenclature:"Panthera leo",info:"Le lion (<i>Panthera leo</i>) est un grand chat du genre Panthera, originaire d'Afrique et d'Inde. Il a un corps musclé et une poitrine large ; une tête courte et ronde ; des oreilles rondes ; et une touffe sombre et poilue à l'extrémité de sa queue. Le lion vit dans les prairies, les savanes et les brousses.<br><br>Pendant la période néolithique, le lion était présent dans toute l'Afrique et l'Eurasie, de l'Europe du Sud-Est à l'Inde, mais il a été réduit à des populations fragmentées en Afrique subsaharienne et à une population dans l'ouest de l'Inde.<br><br>Parmi les félins, le lion est le <strong>deuxième plus grand après le tigre</strong>. Le poids naturel des lions adultes varie généralement entre 120 et 190 kg (264 à 419 lb), et leur taille varie entre 158 et 250 cm (5 pi 2 po – 8 pi 2 po) de la gueule à la base de la queue, avec une longueur de queue moyenne de 90 cm (2 pi 11 po).",clues:["Corps musclé avec une large poitrine et une crinière distinctive chez les mâles.","Originaire d'Afrique et d'Inde, présent dans les savanes et les prairies.","La deuxième plus grande espèce de félin."]},lynx:{name:"Lynx",binomialNomenclature:"Lynx",info:"Un lynx est l'une des quatre espèces existantes (le lynx du Canada, le lynx ibérique, le lynx d'Eurasie et le lynx roux) du genre de chats sauvages de taille moyenne Lynx.<br><br>Les lynx ont une queue courte, des touffes de poils noirs caractéristiques au bout de leurs oreilles, de grandes pattes rembourrées pour marcher dans la neige, et de longs moustaches sur le visage. Leur couleur de corps varie du brun moyen au doré, ou beige-blanc, et est parfois marquée de taches brunes sombres, surtout sur les membres.<br><br>Leur poids varie de 7,3 à 30 kg (16 à 66 lb) et leur longueur de 71 à 129 cm (28 à 51 po). Toutes les espèces habitent exclusivement dans l'Hémisphère Nord, en Eurasie et en Amérique du Nord.",clues:["Touffes caractéristiques de poils noirs au bout de leurs oreilles.","Chats sauvages de taille moyenne, avec une gamme de couleurs de fourrure et des taches occasionnelles.","Trouvés exclusivement dans l'Hémisphère Nord, à travers l'Eurasie et l'Amérique du Nord."]},ocelot:{name:"Ocelot",binomialNomenclature:"Leopardus pardalis",info:"L'ocelot (<i>Leopardus pardalis</i>) est un chat sauvage de taille moyenne, tacheté, qui mesure de 40 à 50 cm (16 à 20 po) au niveau des épaules et pèse entre 7 et 15,5 kg (15 à 34 lb) en moyenne.<br><br>Il est originaire du sud-ouest des États-Unis, du Mexique, de l'Amérique centrale et du Sud, ainsi que des îles caribéennes de Trinité et de Margarita.<br><br>Le pelage de l'ocelot est marqué de taches noires solides sur un fond crème, fauve, jaunâtre, gris-rouge ou gris. Les taches sur la tête et les membres sont petites, mais les marques sur le dos, les joues et les flancs sont des bandes ouvertes ou fermées et des rayures. L'ocelot est le <strong>plus grand membre du genre Leopardus</strong>.",clues:["Chat sauvage de taille moyenne avec un motif de pelage distinctif, comprenant des marques noires solides et des taches.","Présent dans les Amériques, y compris dans le sud-ouest des États-Unis et dans certaines régions de l'Amérique centrale et du Sud.","Le plus grand membre du genre Leopardus."]},serval:{name:"Serval",binomialNomenclature:"Leptailurus serval",info:"Le serval (<i>Leptailurus serval</i>) est un chat sauvage originaire d'Afrique. Il est répandu dans les pays de l'Afrique subsaharienne, à l'exception des régions de la forêt tropicale.<br><br>Le serval est un chat de taille moyenne et élancé, mesurant de 54 à 62 cm (21 à 24 po) au niveau des épaules et pesant entre 9 et 18 kg (20 à 40 lb). Il se caractérise par une petite tête, de grandes oreilles, un pelage allant du jaune doré au fauve, tacheté et rayé de noir, et une courte queue avec un bout noir.<br><br>Le serval a les <strong> jambes les plus longues de tous les chats par rapport à sa taille corporelle</strong>. Il est similaire au caracal sympatrique, mais possède une empreinte plus étroite, un crâne plus arrondi, et manque des touffes d'oreilles proéminentes.",clues:["Chat sauvage originaire d'Afrique.","Possède les jambes les plus longues de tous les félins par rapport à sa taille corporelle.","Semblable au caracal sympatrique, mais avec une empreinte plus étroite, un crâne plus rond et sans les touffes d'oreilles proéminentes."]},snowLeopard:{name:"Panthére des neiges",binomialNomenclature:"Panthera uncia",info:"La Panthère des neiges (<i>Panthera uncia</i>), aussi appelée Léopard des neiges, Once ou Irbis, est une espèce de grand chat du genre Panthera de la famille des Félidés. L'espèce est originaire des chaînes montagneuses d'Asie centrale et du Sud.<br><br>Le pelage du léopard des neiges est blanc à gris avec des taches noires sur la tête et le cou, et de plus grandes rosettes sur le dos, les flancs et la queue touffue.<br><br>Son museau est court, son front est bombé et ses cavités nasales sont grandes. Il est trapu, avec des pattes courtes, et légèrement plus petit que les autres chats du genre Panthera, mesurant de 75 à 150 cm (30 à 59 po) de la tête au corps. Sa queue mesure entre 80 et 105 cm (31 à 41 po). Son poids varie de 25 kg (55 lb) à 75 kg (165 lb).",clues:["Constitution robuste avec des pattes courtes, de grandes cavités nasales et un museau court.","Pelage allant du blanc au gris, marqué de taches noires distinctives et de rosettes.","Originaire des chaînes de montagnes de l'Asie centrale et du sud."]},tiger:{name:"Tigre",binomialNomenclature:"Panthera tigris",info:"Le tigre (<i>Panthera tigris</i>) est un grand chat et un membre du genre Panthera, originaire d'Asie. Il a un corps puissant et musclé, une grosse tête et des pattes larges, une longue queue et un pelage orange avec des rayures noires, principalement verticales.<br><br>C'est la <strong>plus grande espèce de chat au monde</strong>, avec le lion, et les deux espèces peuvent atteindre des tailles comparables à celles des plus grands félins fossiles. Cependant, les mesures du tigre varient considérablement selon les sous-espèces : un tigre mâle de Sumatra peut peser jusqu'à 140 kg (308 lb) et atteindre une longueur de 2,3 mètres (7 pi 6,5 in), tandis qu'un tigre de Sibérie peut peser jusqu'à 300 kg (661 lb) et mesurer jusqu'à 3,3 mètres (10 pi 10 in).",clues:["La plus grande espèce de chat au monde.","Corps puissant et musclé avec de grandes pattes, une longue queue, et un pelage orange avec des rayures noires.","La taille et le poids varient considérablement selon les sous-espèces."]}}},d={},c={},p={},m={subAppInfo:e,footer:s,amazonScraper:a,calculator:n,countryInfo:r,eshop:t,hangman:u,home:i,mineSweeper:o,survey:l,tictactoe:d,virtualDice:c,wordle:p};export{a as amazonScraper,n as calculator,r as countryInfo,m as default,t as eshop,s as footer,u as hangman,i as home,o as mineSweeper,e as subAppInfo,l as survey,d as tictactoe,c as virtualDice,p as wordle};
