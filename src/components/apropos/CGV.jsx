import React from 'react';
import './CGV.scss';

const CGV = () => (
  <section className="global-content">
    <h1>Conditions générales de Service</h1>
    <h2 className="titre-center">Définitions</h2>
    <p>
      {`Sauf indication contraire dans les CGS, les mots au singulier inclue le pluriel et vice versa.
      `}
    </p>
    <p>
      {`Le terme « CGS » désigne les présentes Conditions Générales de Service.
      `}
    </p>
    <p>
      {`
      Le terme « Application » désigne les applications mobiles Easy Lunch disponibles sur iOS et Android. Il s’agit d’une plateforme de mise en relation entre un consommateur (le "Client") souhaitant commander un repas (le "Repas") à consommer sur place le midi du lundi au vendredi entre 12h et 15h et un restaurant partenaire référencé (le « Restaurant").
      `}
    </p>
    <p>Le terme « Site » désigne le site Internet : https://www.easy-lunch.fr</p>
    <p>Le terme « Services » désigne l’Application et le Site.</p>
    <p>
      {` 
      Le terme « Utilisateur » désigne la personne qui utilise les Services proposés par Easy Lunch.
      `}
    </p>
    <p>
      {`
      Le terme « Initiateur » désigne le Client qui est à l’initiative de la commande sur l’Application.
      `}
    </p>
    <p>
      {`
      Le terme « Participant » désigne le Client qui rejoint l’initiateur sur la commande.
      `}
    </p>
    <p>
      {`
      Le terme "Easy Lunch" désigne l'éditeur de l’Application, à savoir la société Easy Lunch, société par actions simplifiée au capital de 15 000 euros, dont le siège social est situé au 99 allée du Comte 33460 Arsac, immatriculée au Registre du Commerce et des Sociétés de Bordeaux sous le numéro d'identification unique RCS 839 795 176 – email : contact@easy-lunch.fr.
      `}
    </p>
    <h2 className="titre-center">Mentions légales</h2>
    <p>
      {`
      Les directeurs de la publication sont Arthur et Théo Del Piano.
      `}
    </p>
    <p>
      {`
      Les Services sont hébergés par OVH SAS dont le siège social est situé au 2 rue Kellermann 59100 Roubaix.
      `}
    </p>
    <h2 className="titre-center">Objet des CGS</h2>
    <p>
      {`
      Les présentes CGS définissent les conditions dans lesquelles l’Utilisateur peut accéder aux Services et les utiliser. Elles s'appliquent notamment à toute commande de Repas que le Client effectue sur l’Application, ce qui implique l'acceptation intégrale et sans réserve par l’Utilisateur des CGS.
      `}
    </p>
    <p>
      {`
      Les CGS applicables à une commande sont celles en vigueur à la date de la commande du Client. Easy Lunch se réserve le droit de les modifier et recommande au Client de les lire attentivement à chaque nouvelle commande.
      `}
    </p>
    <h2>1. Accès aux Services</h2>
    <p>
      {`
      L’Utilisateur est responsable des modalités et des conséquences de son accès aux Services. Cet accès peut impliquer le paiement de frais à des prestataires techniques tels que des fournisseurs d'accès à Internet, lesquels demeurent à sa charge. L’Utilisateur doit également fournir les équipements nécessaires afin d’accéder aux Services.
      `}
    </p>
    <p>
      {`
      L’Utilisateur reconnait avoir vérifié que la configuration informatique qu’il utilise est sécurisée et en état de fonctionnement.
      `}
    </p>
    <p>
      {`
      L'utilisation des Services est réservée aux Utilisateurs capables juridiquement et majeurs.
      `}
    </p>
    <h2>2. Commande d&apos; un repas sur l&apos; Application</h2>
    <h3>2.1 Généralités</h3>
    <p>
      {`
      Aucune commande par courrier, fax ou téléphone ne sera traitée par Easy Lunch.
      `}
    </p>
    <p>
      {`
      Toutes les commandes s’effectuent par le Client par le biais de l’Application directement auprès du Restaurant. Easy Lunch est uniquement une plateforme de mise en relation entre le Client et le Restaurant. Le Client comprend et accepte donc que le Restaurant est distinct d’Easy Lunch.
      `}
    </p>
    <p>
      {`
      Lors du processus de commande sur l’Application, le Client pourra uniquement commander des Repas à consommer sur place durant le service du midi du lundi au vendredi.
      `}
    </p>
    <h3>2.2 Heure de commande</h3>
    <p>
      {`
      Le Client doit anticiper sa commande et l’effectuer avant 11h30 du matin. Il peut donc commander entre minuit et 11h30 du jour pour lequel il souhaite se rendre dans le Restaurant. Il n’est pas possible de commander la veille ou plusieurs jours à l’avance.
      `}
    </p>
    <p>
      {`
      Par ailleurs, une commande incomplète du Client à 11h30 du matin du jour pour lequel il souhaite se rendre dans le Restaurant est considérée comme invalide et sera annulée par Easy Lunch. 
      `}
    </p>
    <h3>2.3 Modalités de commande</h3>
    <p>
      {`
      Le Client effectue la commande directement sur l’Application. La création d’un compte personnel et sécurisé est requise afin d'effectuer une commande sur l’Application.
      `}
    </p>
    <h4>2.3.1 Éléments généraux de la commande</h4>
    <p>
      {`
      L'initiateur de la commande indique tout d'abord les éléments généraux de la commande :
      `}
    </p>
    <p>
      <ul>
        <li>le nombre maximum de personnes à la table (dont l&apos;Initiateur)</li>
        <li>le créneau horaire choisi. </li>
      </ul>
    </p>
    <h4>2.3.2 Commande de l&apos;Initiateur</h4>
    <p>
      {`
      Après avoir choisi le Restaurant dans lequel il souhaite commander, l'Initiateur renseigne le détail de sa commande, c’est-à-dire le Repas qu’il a choisi, en ajoutant les différents produits le composant à son panier.
      `}
    </p>
    <p>
      {`
      Il appartient à l'Initiateur d’apporter toutes les précisions nécessaires sur la commande (cuisson, accompagnement, intolérance alimentaire, suppression d’ingrédients…).
      `}
    </p>
    <h3>2.4 Création d&apos;un compte personnel</h3>
    <p>
      {`
      La création d’un compte personnel et propre au client est requise. Pour cette création, il sera demandé au Client : 
      `}
    </p>
    <ul>
      <li>
        {`
        de renseigner certaines informations le concernant (nom, prénom, adresse email et numéro de téléphone) ; 
        `}
      </li>
      <li>de choisir un mot de passe secret, personnel et confidentiel.</li>
    </ul>
    <p>
      {`
      Un email confirmant la création de son compte sera adressé au Client. Il est recommandé au Client de le conserver.
      `}
    </p>
    <p>
      {`
        A tout moment, le Client devra, pour accéder à son compte, s'identifier à l'aide de l'adresse email indiquée lors de la création de son compte ainsi que de son mot de passe. Le Client pourra notamment y retrouver ses informations personnelles ainsi que l’historique de ses commandes. Si le Client perdait ou oubliait son mot de passe, il pourra lui être communiqué. Pour cela, le Client devra cliquer sur "Mon compte", " Connexion ", " Mot de passe oublié ? " puis suivre les instructions.
      `}
    </p>
    <p>
      {`
        Les identifiants et mot de passe du Client ne doivent pas être communiqués à des tiers. Easy Lunch ne sera pas responsable dans les cas où : 
      `}
    </p>
    <p>
      <ul>
        <li> le Client aurait communiqué ses identifiants à un tiers ; </li>
        <li>
          {`
          un tiers aurait eu accès aux identifiants ou au compte du Client suite à une faute ou une négligence imputable au Client.
          `}
        </li>
      </ul>
    </p>
    <p>
      {`
        Il est de la responsabilité du Client d'informer immédiatement Easy Lunch dès lors que le Client a connaissance d'un usage non autorisé de son mot de passe personnel ou d'un accès non autorisé à son compte. 
      `}
    </p>
    <h2>3. Paiement d’une commande sur l&apos; Application</h2>
    <h3>3.1 Modalités de paiement</h3>
    <p>
      {`
      Le Client lit et accepte les CGS en vigueur avant d'accéder au règlement de sa commande
      `}
    </p>
    <p>
      {`
        Les commandes effectuées sur l’Application peuvent être payées en ligne avec les cartes de paiement suivantes : American Express, Visa et MasterCard. 
      `}
    </p>
    <p>
      {`
      Le montant de la commande sera débité de la carte bancaire affiliée au compte du Client une fois que : 
      `}
    </p>
    <p>
      <ul>
        <li> les données de la carte bancaire utilisée auront été vérifiées ; </li>
        <li>
          {`
          l&apos;autorisation de débit aura été reçue de la part de l'émetteur de la carte utilisée pour le paiement.
          `}
        </li>
      </ul>
    </p>
    <p>
      {`
      S’il est impossible de débiter les montants dus, la commande sera invalide et annulée.
      `}
    </p>
    <p>
      {`
        Les paiements effectués sur l’Application sont entièrement sécurisés.
        `}
    </p>
    <p>
      {`
      Les coordonnées de la carte de paiement communiquées lors du paiement de la commande ne transitent jamais en clair sur le réseau : elles sont cryptées grâce au protocole Secure Socket Layer (SSL).
      `}
    </p>
    <h3>3.2 Contrôles anti Fraudes</h3>
    <p>
      {`
      Easy Lunch utilise la solution de paiement en ligne Stripe et contrôle toutes les commandes qui ont été validées sur l’Application. Dans ce cadre, il pourra être demandé au Client des documents nécessaires à la finalisation de sa commande et de son paiement.<br>
      Les informations bancaires fournies pour le paiement, notamment le numéro de carte bancaire du Client, sont traitées par Stripe. Easy Lunch n'a donc pas accès aux coordonnées bancaires du Client.
      `}
    </p>
    <h3>3.3 Le prix</h3>
    <p>
      {`
      Le prix de chaque Repas, tel qu'affiché sur l’Application, est déterminé par chaque Restaurant, sans qu’Easy Lunch intervienne. Malgré toute la vigilance dont font preuve les Restaurants et Easy Lunch, il est possible qu’un prix comporte une erreur. Dans l'hypothèse où le prix affiché sur l’Application est manifestement erroné, le Restaurant se réserve la possibilité de ne pas valider une commande. Le Client, qui en sera informé, pourra alors annuler sa commande ou la valider, au prix rectifié.
      `}
    </p>
    <p>
      {`
      Il est précisé que le prix des Repas est indiqué en euros toutes taxes comprises (TTC) et est payable exclusivement en euros. Le prix inclut la commission versée par le Restaurant à Easy Lunch. Le Client ne verra donc aucun frais additionnel facturé.
      `}
    </p>
    <p>
      {`
    Le Restaurant se réserve le droit de modifier le prix des Repas à tout moment. Toutefois, les Repas seront facturés au Client au prix indiqué lors de la passation de sa commande.
      `}
    </p>
    <h3>3.4 Les codes promotionnels</h3>
    <p>
      {`
    Easy Lunch peut délivrer au Client des codes promotionnels qui ont les caractéristiques suivantes : 
      `}
    </p>
    <p>
      <ul>
        <li>
          {`
          ils doivent être utilisés directement sur l’Application et non auprès d’un restaurant ; 
          `}
        </li>
        <li>
          {` 
        ils doivent être utilisés au moment du paiement de la commande et ne sont donc pas rétroactifs ; 
        `}
        </li>
        <li> ils sont personnels et ne peuvent pas être transmis ; </li>
        <li> ils ne peuvent pas être remboursés, échangés ou convertis ; </li>
        <li> ils disposent d’un montant précis et d’une date d’utilisation limite ;</li>
        <li> ils peuvent être désactivés par Easy Lunch à n’importe quel moment.</li>
      </ul>
    </p>
    <h3>3.5 Paiement des extras non commandés sur le Sit</h3>
    <p>
      {`
    Si le Client souhaite commander des suppléments au Restaurant (Repas, boisson, café…), il s’adressera directement au Restaurant sans passer par l’Application. Il devra alors également payer directement le Restaurant.
      `}
    </p>
    <h3>3.6 Le reversement du montant au Restaurant</h3>
    <p>
      {`
    Le Restaurant donne mandat à Easy Lunch pour facturer et encaisser le paiement du Client. Le paiement est ensuite reversé au Restaurant par Easy Lunch, déduction faite de la commission qui lui revient au titre de la mise en relation avec le Client.
      `}
    </p>
    <h3>3.7 Propriété</h3>
    <p>
      {`
    Les Repas commandés restent la propriété exclusive du Restaurant jusqu'à leur complet et parfait paiement.
      `}
    </p>
    <h2>4. Ajout des participants</h2>
    <h3>4.1 Envoi d’un code</h3>
    <p>
      {`
      Une fois que l’Initiateur a validé sa commande et a procédé au paiement de celle-ci, il reçoit un code de la part d’Easy Lunch. C’est en diffusant ce code aux autres Participants que ces derniers pourront le rejoindre sur sa commande.
      `}
    </p>
    <p>
      {`
        Ils doivent à leur tour effectuer leur commande et procéder au paiement avant 11h30 du jour de leur venue au Restaurant.
      `}
    </p>
    <h3>4.2 Commande du Participant</h3>
    <p>
      {`
        Le Participant se connecte sur l’Application et saisit le code de la commande qu’il souhaite rejoindre. Le Participant peut alors effectuer à son tour sa commande, c’est-à-dire choisir son Repas, en ajoutant les différents produits le composant à son panier. 
      `}
    </p>
    <p>
      {`
        Il appartient au Participant d’apporter toutes les précisions nécessaires sur sa partie de la commande (cuisson, accompagnement, intolérance alimentaire, suppression d’ingrédients…).
      `}
    </p>
    <p>
      {`
        Le Participant doit effectuer sa commande avant 11h30 du matin du jour pour lequel il souhaite se rendre dans le Restaurant avec l’Initiateur. 
      `}
    </p>
    <p>
      {`
        Si la commande du Participant est incomplète à 11h30 du matin du jour pour lequel il souhaite se rendre dans le Restaurant avec l’Initiateur, alors la commande du Participant sera considérée comme invalide et sera annulée par Easy Lunch. Cette annulation de la commande du Participant ne remet cependant pas en cause la commande de l’Initiateur si celle-ci est valide.
      `}
    </p>
    <h2>5. Validation d’une commande</h2>
    <h3>5.1 Vérification avant validation d’une commande</h3>
    <p>
      {`
        Préalablement à la validation d'une commande, il pourra être demandé, par Easy Lunch et par le Restaurant, de fournir tout document permettant de vérifier l'identité ou l'âge du Client. Si une telle demande est adressée au Client, la commande ne sera pas validée tant que le Client n'aura pas fourni ces documents.
      `}
    </p>
    <h3>5.2 Enregistrement des commandes</h3>
    <p>
      {`
        Une fois une commande effectuée, le Client recevra un email de confirmation de sa commande de la part d’Easy Lunch, comprenant le récapitulatif de la commande ainsi que le numéro de commande et les coordonnées du Restaurant.
      `}
    </p>
    <p>
      {`
        Si le Client ne reçoit pas l'email de confirmation de sa commande, il est recommandé de vérifier que l'email n'a pas été redirigé vers la rubrique " Courrier Indésirable " ou " Spam " de sa boite de messagerie. Si ce n'est pas le cas, il est recommandé au Client de prendre contact avec Easy Lunch – contact@easy-lunch.fr
      `}
    </p>
    <p>
      {`
        Easy Lunch se réserve le droit de ne pas valider la commande du Client pour tout motif légitime, notamment dans l'hypothèse où :
      `}
      <ul>
        <li> la commande serait incomplète ; </li>
        <li> la commande ne serait pas payée ; </li>
        <li> la commande ne serait pas conforme aux présentes CGS; </li>
        <li> la commande parait anormale (quantités anormalement élevées…) ; </li>
        <li> un litige avec le Client serait en cours de traitement.</li>
      </ul>
    </p>
    <p>
      {`
        Le Restaurant s’est engagé envers Easy Lunch à ne proposer à la vente sur l’Application que des Repas disponibles et qu'il est en mesure de préparer pour le créneau horaire souhaité par le Client au moment de la commande. Le Restaurant est par conséquent seul responsable de la disponibilité des Repas qu'il propose.
      `}
    </p>
    <p>
      {`
        Après le processus de commande, le Restaurant s'engage également à informer le Client de l'éventuelle indisponibilité d'un Repas dans les plus brefs délais, par email ou par téléphone. Le Client aura alors le choix entre modifier sa commande ou l'annuler. Dans ce dernier cas, le Restaurant doit contacter Easy Lunch qui se chargera de rembourser le Client ou simplement de ne pas le débiter s’il est encore temps. 
      `}
    </p>
    <p>
      {`
        Les Repas commandés devront être consommés sur place au lieu indiqué par le Restaurant et au créneau horaire choisi par le Client lors de la passation de la commande.
      `}
    </p>
    <h2>6. Consommation sur place du repas</h2>
    <h3>6.1 Arrivée du Client au Restaurant</h3>
    <p>
      {`
        Lors de son arrivée dans le Restaurant, il est demandé au Client de présenter au Restaurant la confirmation de commande reçue préalablement par email. A défaut, le Client doit pouvoir être en mesure d’indiquer le code de sa commande au Restaurant.
      `}
    </p>
    <p>
      {`
        Le Restaurant est autorisé à demander au Client de justifier son identité et de présenter le moyen de paiement utilisé pour le règlement de la commande. 
      `}
    </p>
    <h3>6.2 Service du Repas</h3>
    <p>
      {`
      Le Restaurant est l’unique responsable du service des Repas commandés sur l’Application par le Client.
    `}
    </p>
    <p>
      {`
        Pour pallier les éventuels retards, le Client effectue une commande pour un créneau horaire et non pour un horaire précis et la préparation du Repas ne sera lancée qu’à l’arrivée du Client dans le Restaurant.
      `}
    </p>
    <p>
      {`
        Il est donc possible qu’un certain temps passe entre l’arrivée au Restaurant du Client et le service du Repas par le Restaurant.
      `}
    </p>
    <p>
      {`
        Au moment du service du Repas, le Client est invité à vérifier qu’il est bien conforme à sa commande.
      `}
    </p>
    <p>
      {`
        Les produits défectueux ou non conformes à une commande seront remboursés au Client ou échangés directement par le Restaurant.
      `}
    </p>
    <h3>6.3 Retard</h3>
    <h4>6.3.1 Le Client prévient le Restaurant</h4>
    <p>
      {`
        Le Client est invité à prévenir le Restaurant en cas de retard pour que le Repas soit conservé dans des conditions optimales et convenir d’un arrangement.
      `}
    </p>
    <h4>6.3.2 Le Client ne prévient pas le Restaurant</h4>
    <p>
      {`
        Dans le cas où le Client n’aurait pas prévenu le Restaurant, la commande du Client sera considérée comme invalide et sera donc annulée après quinze minutes de retard.
      `}
    </p>
    <p>
      {`
        Le client ne pourra alors pas prétendre à un remboursement.
      `}
    </p>
    <h2>7. Départ du Client</h2>
    <p>
      {`
        Si le Client a consommé uniquement ce qu’il avait commandé sur l’Application, il peut quitter le Restaurant sans passer à la caisse.
      `}
    </p>
    <p>
      {`
        Par contre, si le Client a consommé des suppléments, il doit alors les régler en passant par la caisse du Restaurant.
      `}
    </p>
    <h2>8. Boissons alcoolisées</h2>
    <p>
      {`
        L'abus d'alcool est dangereux pour la santé. La vente de boissons alcooliques à des mineurs est interdite. En passant une commande de boissons contenant de l'alcool, le Client reconnaît par cette occasion expressément être majeur. Le Restaurant se réserve la possibilité de refuser de fournir de l'alcool à toute personne qui semble mineure et qui serait dans l'incapacité de justifier de son âge.
      `}
    </p>
    <p>
      {`
        En cas de vente d’alcool à des mineurs, Easy Lunch ne saurait être tenu responsable.
      `}
    </p>
    <h2>9. Responsabilités</h2>
    <h3>9.1 Les informations sur l’Application</h3>
    <p>
      {`
        Les informations qui figurent sur l’Application sont fournies par les Restaurants à Easy Lunch qui fait de son mieux pour les vérifier. Cependant, Easy Lunch ne peut pas garantir que ces informations sont exactes, à jour ou complètes.
      `}
    </p>
    <p>
      {`
        De même, la présence d'allergènes relève de la seule responsabilité des Restaurants.
      `}
    </p>
    <h3>9.2 L’accès aux Services</h3>
    <p>
      {`
        Easy Lunch ne peut pas garantir à l’Utilisateur que l'accès aux Services sera continu, rapide, complet et exempt d'erreurs.Easy Lunch n’est pas responsable de tous les dommages indirects qui pourraient résulter de l'impossibilité d'accéder à tout ou à une partie de l’Application.
      `}
    </p>
    <h3>9.3 Communication entre l&apos;Utilisateur et Easy Lunch</h3>
    <p>
      {`
        L'Utilisateur est responsable du contenu et des informations transmises lors de ses communications avec Easy Lunch qui ne peut d’ailleurs pas garantir la sécurité des échanges par le biais des communications électroniques.
      `}
    </p>
    <h2>10. Droit de rétractation</h2>
    <p>
      {`
        Le Client ne dispose pas de droit de rétractation, en vertu des dispositions de l’article L121-21-8 alinéa 4 du Code de la consommation, les Repas étant des denrées périssables.
      `}
    </p>
    <h2>11. Réclamations</h2>
    <p>
      {`
        Le Client est invité à contacter directement le Restaurant en cas de problème relatif à une commande sur l’Application.
      `}
    </p>
    <p>
      {`
        Le Client est invité à contacter Easy Lunch en cas de problème relatif au fonctionnement des Services par email via l'adresse de messagerie électronique : contact@easy-lunch.fr.
      `}
    </p>
    <h2>12. Propriété intellectuelle</h2>
    <p>
      {`
        Les Services d’Easy Lunch sont la propriété exclusive d’Easy Lunch. Toute reproduction totale ou partielle des Services est strictement interdite. L’Utilisateur s'engage à ne rien faire qui puisse porter atteinte aux droits d’Easy Lunch et/ou des Restaurants.
      `}
    </p>
    <h2>13. Protection des données à caractère personnel</h2>
    <p>
      {`
        Easy Lunch invite l’Utilisateur à prendre connaissance de sa Politique de Confidentialité qui fait partie intégrante des présentes CGS avant d’utiliser les Services.
      `}
    </p>
    <h2>14. Liens hypertextes disponibles sur les Services</h2>
    <p>
      {`
        Les liens hypertextes disponibles sur les Services renvoient vers des sites tiers qui ne sont pas détenus par Easy Lunch. Ils sont fournis uniquement dans le but de faciliter l’utilisation par l’Utilisateur des ressources disponibles sur le web. En utilisant ces liens, l’Utilisateur quitte les Services et accepte donc d'utiliser les sites tiers à ses risques et périls ou le cas échéant conformément aux conditions qui les régissent.
      `}
    </p>
    <h2>15. Liens hypertextes vers les Services</h2>
    <p>
      {`
        Il est possible d’utiliser des liens hypertextes pointant vers les Services uniquement avec l'accord écrit et préalable d’Easy Lunch. En cas d'accord, l’Utilisateur s’engage à :
      `}
      <ul>
        <li>
          {`
            ne pas modifier la taille ou l&apos;apparence des marques, logos et autres signes distinctifs d’Easy Lunch; 
          `}
        </li>
        <li>
          {`
            ne pas utiliser les marques, logos et autres signes distinctifs d’Easy Lunch sans l’accord d’Easy Lunch ; 
          `}
        </li>
        <li>
          {`
            ne pas laisser entendre qu’Easy Lunch cautionne les produits et / ou services disponibles sur le site tiers pointant vers le Site;
          `}
        </li>
        <li>
          {`
            ne pas présenter des informations fausses, trompeuses ou mensongères sur Easy Lunch.
          `}
        </li>
      </ul>
    </p>
    <p>
      {`
        Easy Lunch peut revenir sur sa décision et se réserve le droit de révoquer l'autorisation accordée pour tout manquement à un de ces engagements.
      `}
    </p>
    <h2>16. Cookies</h2>
    <p>
      {`
        Easy Lunch invite l’Utilisateur à prendre connaissance de sa Politique de Confidentialité qui fait partie intégrante des présentes CGS afin de prendre connaissance de la politique d’Easy Lunch en matière de cookies.
      `}
    </p>
    <h2>17. Droit applicable</h2>
    <p>
      {`
        Les présentes CGS et les opérations qui en découlent sont régies et soumises au droit français. Toutes difficultés relatives à la validité, l’application ou à l’interprétation des CGS seront soumises, à défaut d’accord amiable, au Tribunal de Grande Instance de Bordeaux.
      `}
    </p>
  </section>
);

export default CGV;
