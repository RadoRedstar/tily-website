// ================ MAIN =================
const request = indexedDB.open('inscrits', 1);
let db;

// ============ MISE EN PLACE DE LA BD =======================
request.onupgradeneeded = function(event) {
    db = event.target.result;
    // Créer un objet store pour les utilisateurs
    const objectStore = db.createObjectStore('inscrit', { keyPath: 'id', autoIncrement: true });
    objectStore.createIndex('anarana', 'anarana', { unique: false });
    objectStore.createIndex('fanampiny', 'fanampiny', { unique: false });
    objectStore.createIndex('fokonolona', 'fokonolona', { unique: false });
    objectStore.createIndex('fivondronana', 'fivondronana', { unique: false });
    objectStore.createIndex('ambaratonga', 'ambaratonga', { unique: false });
    objectStore.createIndex('contact', 'contact', { unique: false });
};

request.onsuccess = function(event) {
    db = event.target.result;
    console.log('Base de données ouverte avec succès.');
};

request.onerror = function(event) {
    console.error('Erreur lors de l\'ouverture de la base de données:', event);
};

// ============== MANIPULATION FORMULAIRE =====================
function submited()
{
    console.log('clicked');
    const anarana = document.getElementById('anarana').value;
    const fanampiny = document.getElementById('fanampiny').value;
    const fokonolona = document.getElementById('fokonolona').value;
    const fivondronana = document.getElementById('fivondronana').value;
    const ambaratonga = document.getElementById('ambaratonga').value;
    const contact = document.getElementById('contact').value;

    // Ouvrir une transaction
    const transaction = db.transaction(['inscrit'], 'readwrite');

    // Accéder à l'objet store
    const objectStore = transaction.objectStore('inscrit');

    // Créer un objet à insérer
    const newInscrit = {
        anarana: anarana,
        fanampiny: fanampiny,
        fokonolona: fokonolona,
        fivondronana: fivondronana,
        ambaratonga: ambaratonga,
        contact: contact
    };

    // Ajouter les données à l'objet store
    const request = objectStore.add(newInscrit);

    request.onsuccess = function(event) {
        console.log('Utilisateur ajouté avec succès :', newInscrit);
       
    };

    request.onerror = function(event) {
        console.error('Erreur lors de l\'ajout de l\'utilisateur :', event);
        
    };
    
}
