import React from 'react';
import './CGV.scss';

const CGV = () => (
  <div className="global-content">
    <h1>Conditions générales de Service</h1>
    <div className="definitions">
      <h2>Définitions</h2>
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
    </div>
    <div className="mentionLegales">
      <h2>Mentions légales</h2>
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
    </div>
    <div className="objet-cgs">
      <h2>Objet des CGS</h2>
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
    </div>
    <div className="acces-servies">
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
    </div>
    <div className="commande-repas">
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
      <div className="paiement-commande">
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
            <li> ils doivent être utilisés directement sur l’Application et non auprès d’un restaurant ; </li>
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
        <div className="ajout-participants">
          <h2>4. Ajout des participants</h2>
          <h3>4.1 Envoi d’un code</h3>
          

        </div>
      </div>
    </div>

  </div>
);

export default CGV;
