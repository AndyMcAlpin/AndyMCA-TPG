
    const generateTeam = team => {
        
        return `
    <section class="my-3" id="portfolio">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
        <div class="flex-row justify-space-between">
        ${team
        .filter( employee  => employee.role === 'Manager')
        .map(({ name, id, email, role, officeNumber }) => {
            return`
            <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${name}, ${role}</h3>
            <h3 class="portfolio-item-title text-light">${id}</h3>
            <h3 class="portfolio-item-title text-light">${email}</h3>
            <h3 class="portfolio-item-title text-light">${officeNumber}</h3>
            </div>
            
        `})
        .join('')}
        ${team
        .filter( employee  => employee.role === 'Engineer')
        .map(({ name, id, email, role, github }) => {
            return`
            <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${name} ${role}</h3>
            <h3 class="portfolio-item-title text-light">${id}</h3>
            <h3 class="portfolio-item-title text-light">${email}</h3>
            <h3 class="portfolio-item-title text-light">${github}</h3>
            </div>
            
        `})
        .join('')}
        ${team
        .filter( employee  => employee.role === 'Intern')
        .map(({ name, id, email, role, school }) => {
            return`
            <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${name} ${role}</h3>
            <h3 class="portfolio-item-title text-light">${id}</h3>
            <h3 class="portfolio-item-title text-light">${email}</h3>
            <h3 class="portfolio-item-title text-light">${school}</h3>
            </div>
            
        `})
        .join('')}
        
            </div>
        </section>
        `;
    };

    module.exports = async (team) => {

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Profile Generator</title>
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <header>
        <div class="container flex-row justify-space-between align-center py-3">
            <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
        </div>
        </header>
        <main class="container my-5">
        ${generateTeam(team)}
        </main>
        <footer class="container text-center py-3">
        <h3 class="text-dark">&copy;2022 by </h3>
        </footer>
    </body>
    </html>
    `;
};