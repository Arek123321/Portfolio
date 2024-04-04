/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


document.querySelectorAll('.competence').forEach(function(comp) {
    var skillLevel = comp.querySelector('.skill-level').getAttribute('data-skill');
    comp.querySelector('.skill-level').style.setProperty('--skill-level', skillLevel);
  });

  document.querySelectorAll('.competence').forEach(comp => {
    comp.addEventListener('click', function() {
      const additionalContent = this.querySelector('.additional-content');
      const isExpanded = this.classList.toggle('expanded');
    
      // Ustawianie maxHeight w zależności od tego, czy element jest rozwijany czy zwijany
      additionalContent.style.maxHeight = isExpanded ? additionalContent.scrollHeight + "px" : null;
    });
  });


  const projectsData = [
    {
      id: 1,
      title: "GSB Laravel",
      details: [
        { img: "assets/img/gsbl.png", desc: "L'application web Gestion des frais est conçue pour centraliser et simplifier la gestion des dépenses liées aux activités professionnelles et annexes des visiteurs médicaux et du personnel comptable d'une organisation. Accessible en ligne avec authentification, elle repose sur une architecture MVC et se divise en trois modules principaux pour l'enregistrement et le suivi des frais par les utilisateurs, le traitement comptable, et la gestion des visiteurs. Elle met un accent particulier sur l'ergonomie et la sécurité, incluant la prévention des accès non autorisés et la protection contre les failles web courantes.", position: "left" },
        { img: "assets/img/gsbl2.png", desc: "En travaillant en équipe de trois, nous avons développé le module de gestion des visiteurs de l'application, en intégrant les fonctionnalités d'ajout, de modification et de suppression d'utilisateurs. Cette section permet également de générer un document PDF pour chaque utilisateur, offrant ainsi une synthèse détaillée de leurs informations. Cette réalisation a nécessité une collaboration étroite et efficace entre les membres de l'équipe, permettant d'assurer une interface utilisateur intuitive tout en respectant les exigences de sécurité et d'accessibilité définies dans le cahier des charges.", position: "right" }
      ]
    },
    {
      id: 2,
      title: "GSB WinForms",
      details: [
        { img: "assets/img/gsb.png", desc: "L'application APPLI-CR, développée à l'aide de WinForms, vise à améliorer la gestion des informations relatives aux médecins dans un système d'information de santé. Elle offre au personnel de secrétariat la possibilité de gérer efficacement les données des médecins, en permettant la recherche, l'ajout, la modification et la suppression d'entrées, ainsi que la consultation et l'exportation des derniers rapports médicaux en format XML. Conçue pour répondre aux normes de qualité et de sécurité dans le secteur de la santé, cette solution facilite la communication et la gestion des informations entre secrétaires et médecins, garantissant une manipulation optimisée et sécurisée des données médicales grâce à l'utilisation de WinForms.", position: "left" },
        { img: "assets/img/gsb1.png", desc: "En collaboration à deux, nous avons réalisé le projets. Nous nous sommes concentrés sur le développement des fonctionnalités essentielles telles que l'ajout, la modification et la suppression de médecins, ainsi que la recherche de médecins par nom et département. De plus, nous avons implémenté une fonction permettant de consulter le dernier rapport d'un médecin, avec la possibilité d'exporter ce rapport en format XML. Ce travail d'équipe a permis de créer une application répondant efficacement aux besoins de gestion des données médicales, facilitant ainsi les processus administratifs tout en assurant la sécurité et l'accessibilité des informations critiques au sein du système d'information de santé.", position: "right" },
        
      ]
    },
    {
        id: 3,
        title: "Site Web (stage)",
        details: [
          { img: "assets/img/stg.png", desc: "Durant mon stage de deuxième année de BTS SIO, j'ai eu l'opportunité de réaliser un projet ambitieux au sein de la Société SARL KM Professionnel, une entreprise spécialisée dans la menuiserie. Sur une période de 8 semaines, j'ai développé un site web multilingue (français, anglais, et polonais) dédié à présenter les projets réalisés par l'entreprise. Ce site internet comprend une galerie de projets, ainsi que des pages dédiées au découpage et aux différents types de caissons (bas et haut), chacun accompagné d'une page spécifique détaillant ses caractéristiques et un formulaire personnalisé permettant aux visiteurs de spécifier le meuble concerné par leur demande. Réalisé en HTML, CSS, et JavaScript, ce site vise à mettre en valeur le savoir-faire et les réalisations de l'entreprise tout en facilitant la communication avec ses clients à travers trois langues différentes, reflétant ainsi son ouverture internationale et son engagement envers la qualité et l'accessibilité.", position: "left" },
          { img: "assets/img/s1.png", desc: "Cette page clé du site présente une sélection de réalisations de l'entreprise, soigneusement mises en valeur par des photographies de haute qualité qui révèlent l'étendue et la finesse du travail artisanal effectué. Chaque image, encadrée de bois pour rappeler le matériau de prédilection de la menuiserie, invite les visiteurs à explorer l'expertise et l'innovation de la societe. Cette vitrine interactive est conçue pour inspirer les clients potentiels et mettre en avant la qualité et le détail des ouvrages de l'entreprise, témoignant de sa maîtrise et de sa passion pour le bois.", position: "right" },
          { img: "assets/img/s2.png", desc: "Cette capture d'écran présente l'un des projets phares réalisés par SARL KM Professionnel.", position: "left" },
          { img: "assets/img/s3.png", desc: "Cette capture d'écran met en valeur la diversité des caissons, bas et haut, disponibles sur le site web, chacun détaillé avec ses spécifications et une option pour en découvrir plus.", position: "right" },
          { img: "assets/img/s4.png", desc: "L'image montre un formulaire utilisateur intuitif intégré au site web, conçu pour faciliter les requêtes et communications concernant des caissons spécifiques offerts par l'entreprise.", position: "left" },
          { img: "assets/img/s5.png", desc: "Voici un exemple de soumission de formulaire reçue par KM Professionnel, indiquant en français les détails d'une demande concernant le Caisson Bas 9, accompagnée des informations personnelles de l'utilisateur.", position: "right" }
        ]
      },
      {
        id: 4,
        title: "Gestion Stock (stage) ",
        details: [
          { img: "assets/img/t4.png", desc: "Lors de mon stage de première année de BTS effectué au sein du service achat de la mairie de Noisy-le-Sec, j'ai été confronté à un défi majeur : l'amélioration de la gestion des stocks qui était jusqu'alors réalisée de manière rudimentaire via Excel. Le principal problème résidait dans l'incapacité du logiciel à effectuer automatiquement les opérations de base telles que l'addition ou la soustraction des stocks à chaque entrée ou sortie. Cette lacune obligeait à un recours systématique à l'utilisation d'une calculatrice pour effectuer ces opérations, suivi de la saisie manuelle des résultats dans le système. Cette méthode, non seulement fastidieuse et source d'erreurs, entravait considérablement l'efficacité et la fiabilité de la gestion des stocks. En réponse à ce défi, j'ai proposé l'intégration d'une solution informatique plus adaptée, capable d'automatiser ces opérations et d'assurer un suivi précis et en temps réel des stocks, permettant ainsi d'optimiser les processus d'achat et de gestion des ressources au sein du service.", position: "left" },
          { img: "assets/img/t2.png", desc: "Pour résoudre le problème de gestion des stocks au sein du service achat de la mairie de Noisy-le-Sec, j'ai développé une application dédiée en Python avec l'interface graphique Tkinter. Cette application permet de visualiser l'état des stocks de divers articles, avec une fonction d'alerte automatique lorsque le stock d'un produit descend en dessous du seuil critique fixé, par exemple à cinq unités. Les utilisateurs peuvent aisément ajouter ou supprimer des articles, ainsi qu'ajuster les quantités de stock avec une fonction d'addition ou de soustraction intégrée. L'application offre également la possibilité de gérer plusieurs catégories de produits dans des feuilles distinctes, évitant ainsi la confusion entre différents types de produits.", position: "right" },
          { img: "assets/img/t1.png", desc: "Face à l'absence d'une base de données dédiée pour gérer les stocks, j'ai pris l'initiative d'utiliser Excel en tant que système de stockage des données. Cette décision s'appuyait sur le besoin d'une solution à la fois simple et accessible, évitant ainsi les complexités d'allumage et les problématiques de maintenance d'une base de données traditionnelle. L'application que j'ai créée en Python Tkinter interagit directement avec les fichiers Excel, permettant aux utilisateurs de mettre à jour et de gérer les stocks sans avoir à ouvrir Excel séparément. Cette intégration assure une transition en douceur pour le personnel habitué à Excel tout en automatisant les processus de gestion de stock et en réduisant les risques d'erreur humaine.", position: "left" },
          { img: "assets/img/vba.png", desc: "Après avoir développé l'application de gestion de stock en Python Tkinter et adapté Excel comme système de stockage des données, un nouvel obstacle est survenu : la nécessité d'obtenir l'approbation du service informatique de la mairie pour déployer ma solution sur leurs ordinateurs. À mi-parcours de mon stage, la réponse a malheureusement été négative, m'obligeant à reconsidérer ma stratégie. Le service informatique a stipulé que seules les applications préexistantes pouvaient être utilisées pour des raisons de sécurité et de conformité. Cette contrainte m'a poussé à repenser mon approche et à explorer les fonctionnalités avancées d'Excel, telles que les macros et le VBA (Visual Basic for Applications), pour automatiser les opérations de gestion des stocks. En dépit des limitations, cette solution s'est avérée être une alternative viable qui respectait les directives informatiques de la mairie tout en améliorant l'efficacité de la gestion des stocks.", position: "right" }
          
        ]
      }
  ];


  document.querySelectorAll('.project').forEach(item => {
    item.addEventListener('click', function() {
      const projectId = this.getAttribute('data-project-id');
      const project = projectsData.find(p => p.id.toString() === projectId);
      
      if (!project) return;
      
      let modalContentHtml = `<h2>${project.title}</h2><div class="project-details">`;
  
      project.details.forEach((detail, index) => {
        const flexDirection = index % 2 === 0 ? "row" : "row-reverse";
        modalContentHtml += `
          <div class="project-detail" style="display: flex; flex-direction: ${flexDirection};">
            <div class="project-image" style="flex: 1;">
              <img src="${detail.img}" alt="Obrazek ${index + 1}" style="width: 100%;">
            </div>
            <div class="project-description" style="flex: 1; padding: 20px;">
              <p>${detail.desc}</p>
            </div>
          </div>
        `;
      });

      modalContentHtml += '</div>';
  
      const modal = document.querySelector('.project-modal');
      modal.querySelector('.project-modal-content').innerHTML = modalContentHtml;
      modal.classList.add('show');
    });
});

// Zamknięcie modalu po kliknięciu na przycisk zamknięcia
document.querySelector('.close-modal').addEventListener('click', function() {
    document.querySelector('.project-modal').classList.remove('show');
  });
  
  // Opcjonalnie: Zamknięcie modalu przez kliknięcie poza jego zawartością
  window.addEventListener('click', function(event) {
    if (event.target.classList.contains('project-modal')) {
      document.querySelector('.project-modal').classList.remove('show');
    }
  });
  



  // Przykładowe dane filmów
const youtubeVideos = [
  {id: 'XKNEOGklXJ8', title: 'Project Titan Collaborative Art Jam | Week 1'},
  {id: 'yqqjboBnm28', title: 'Powering 2D Animation in Unreal Engine with Odyssey | Inside Unreal'},
  // Dodaj więcej filmów tutaj
];

// Funkcja generująca kod HTML dla filmów
function generateYoutubeVideosContent(videos) {
  let content = '';
  videos.forEach(video => {
    const link = `https://www.youtube.com/watch?v=${video.id}`;
    const thumbnail = `https://img.youtube.com/vi/${video.id}/0.jpg`; // Miniaturka filmu
    const title = video.title;
    content += `<div class="rss-item">
                  <img src="${thumbnail}" alt="Thumbnail" style="width: 100px; height: auto;">
                  <a href="${link}" target="_blank">${title}</a>
                </div>`;
  });
  document.getElementById("rssFeedContent").innerHTML = content;
}

// Wywołanie funkcji po załadowaniu strony
document.addEventListener("DOMContentLoaded", () => generateYoutubeVideosContent(youtubeVideos));





