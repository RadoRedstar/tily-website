// Fonction de tri
function sortTable(columnIndex) {
    const table = $('#myTable')[0];
    let rows = Array.from(table.rows).slice(1); // Obtenir toutes les lignes, sauf l'en-tête
    let isAscending = table.getAttribute('data-sort-order') !== 'desc';

    rows.sort((a, b) => {
        let cellA = a.cells[columnIndex].innerText.toLowerCase();
        let cellB = b.cells[columnIndex].innerText.toLowerCase();

        // Vérification si les cellules contiennent des nombres
        const numA = parseFloat(cellA);
        const numB = parseFloat(cellB);

        if (!isNaN(numA) && !isNaN(numB)) {
            return isAscending ? numA - numB : numB - numA; // Tri numérique
        }

        // Tri lexicographique
        if (cellA < cellB) return isAscending ? -1 : 1;
        if (cellA > cellB) return isAscending ? 1 : -1;
        return 0;
    });

    // Remplacer les lignes dans le tableau
    const tbody = table.tBodies[0];
    tbody.innerHTML = ''; // Effacer le contenu existant

    rows.forEach(row => tbody.appendChild(row)); // Ajouter les lignes triées

    // Mettre à jour l'attribut de tri
    table.setAttribute('data-sort-order', isAscending ? 'desc' : 'asc');
}
 
// Initialiser l'attribut de tri sur la table
$(document).ready(() => {
    $('#myTable').attr('data-sort-order', 'asc'); // Définir l'ordre initial
});
