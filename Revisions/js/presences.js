// Données Thead
let tHeadData = ["Nom","Prénom","Satut","Présente","Absente"];

// Données élèves

const STUDENT_LIST = {
    "Jessica":"Conrad",
    "Mélusine":"Christophe",
    "Dorothée":"Valentyn",
    "Jenny":"Fernandez Garcia",
    // "Marwa":"",
}

// Données classe ( je génère le titre en fonction du nom du groupe)
let StudentClassname = "Wad24";

const DOCUMENT_TITLE = document.getElementById("title");
DOCUMENT_TITLE.innerText = "Liste des présences " + ` ${StudentClassname}`;

// ClearTableBtn();

// Si mon tableau n'exsiste pas, je le crée

let presencesTab = document.getElementById("tableauPresences");

if(!presencesTab){
    // 1.Création du tableau
    const PRESENCE_TAB = document.createElement("table");
    PRESENCE_TAB.id = "tableauPresences";
    const THEAD = document.createElement("thead");
    const TBODY = document.createElement("tbody");
    const BODY = document.querySelector("body");
        
        // Création dynamique du head
        for (const i of tHeadData) {
            const TH = document.createElement("th");
            TH.innerText = i;
            THEAD.appendChild(TH);
        }

        // J'ajoute dans le doc HTML
        PRESENCE_TAB.appendChild(THEAD);
        PRESENCE_TAB.appendChild(TBODY);
        BODY.append(PRESENCE_TAB);
    
    // 2. Création des ligne du tableau

    for (const studentName in STUDENT_LIST) {
        // Création de la row
        const TR = document.createElement("tr");
        const NAME = document.createElement("td"); 
        const FIRSTNAME = document.createElement("td");
        const STATUS = document.createElement("td");
        const PRESENCE = document.createElement("td");
        const ABSENCE = document.createElement("td");

        // Je donne un contenu aux TD
        NAME.textContent = `${STUDENT_LIST[studentName]}`;
        FIRSTNAME.textContent = studentName;
        STATUS.textContent = "";
        PRESENCE.textContent = "✅";
        ABSENCE.textContent = "❌";

        // ajout des évènements sur les boutons
        PRESENCE.addEventListener("click",function(){
            PRESENCE.textContent = "";
            STATUS.textContent = "Présente";
            ABSENCE.textContent = "❌";
        });

        ABSENCE.addEventListener("click",function(){
            ABSENCE.textContent = "";
            STATUS.textContent = "Absente";
            PRESENCE.textContent = "✅";
        });
        
        // ajout des éléments dans le doc HTML        
        TR.appendChild(NAME);
        TR.appendChild(FIRSTNAME);
        TR.appendChild(STATUS);
        TR.appendChild(PRESENCE);
        TR.appendChild(ABSENCE);

        //J'ajoute tout au tableau
        TBODY.appendChild(TR);
    }

    // 3. Ajout bouton clear et reset

     // Ajout éléments
        let clearTableBtn = document.createElement("button");
        let resetStatusBtn = document.createElement("button");

        // Ajout contenu
        clearTableBtn.id = "clearTableBtn";
        clearTableBtn.textContent = "Clear Table"
        resetStatusBtn.id = "resetStatusBtn";
        resetStatusBtn.textContent = "Reset Status";

        // Ajout évènements
        clearTableBtn.addEventListener("click", function(){
            while(TBODY.firstChild){ //Tant qu'il y a un élément 1 dans le tBody
                TBODY.firstChild.remove();
            }
        })

        resetStatusBtn.addEventListener("click",function(){
            const ROWS = document.querySelectorAll("tr")
            for(let i = 0 ; i< ROWS.length; i++){
                let row = ROWS[i];
                let statusCell = row.children[2];
                let prensentCell = row.children[3];
                let absentCell = row.children[4];
                statusCell.textContent = "";
                prensentCell.textContent = "✅";
                absentCell.textContent = "❌";
            }
        })

        // Ajout à l'HTML
        BODY.insertBefore(clearTableBtn, PRESENCE_TAB);   
        BODY.insertBefore(resetStatusBtn,PRESENCE_TAB);





}
