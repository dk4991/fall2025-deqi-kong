// 1. Create Your Data Array (Requirement 1: 6 items)
const communicationResources = [
    {
        title: "Nonviolent Communication (NVC)",
        author: "Marshall Rosenberg",
        description: "A framework for resolving conflicts and fostering genuine connection through focusing on observations, feelings, needs, and requests.",
        category: "Empathy & Conflict",
        link: "nvc.html"
    },
    {
        title: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
        description: "A timeless guide to fundamental human relations, focusing on avoiding criticism, remembering names, and making others feel important.",
        category: "Human Relations & Influence",
        link: "friends.html"
    },
    {
        title: "Guiguzi (The Art of Rhetoric)",
        author: "Guigu School",
        description: "An ancient Chinese text on persuasion, strategy, and political lobbying, emphasizing observation and specialized speech techniques.",
        category: "Strategy & Persuasion",
        link: "guiguzi.html"
    }
    // The items for Crucial Conversations, 7 Habits, and Start With Why have been removed.
];

// Get the container (Requirement 2)
const container = document.getElementById('content-container');

// 3. JavaScript Implementation (Requirement 3: Loop, Create, Set, Append)
communicationResources.forEach(resource => {
    // Create elements
    const itemDiv = document.createElement('div');
    itemDiv.className = 'resource-item';

    const categorySpan = document.createElement('span');
    categorySpan.className = 'category';
    categorySpan.textContent = resource.category;

    const titleLink = document.createElement('a');
    titleLink.href = resource.link; 
    
    const title = document.createElement('h3');
    title.textContent = resource.title;
    titleLink.appendChild(title);

    const authorP = document.createElement('p');
    authorP.textContent = `Author: ${resource.author}`;

    const descriptionP = document.createElement('p');
    descriptionP.textContent = resource.description;

    // Append to structure
    itemDiv.appendChild(categorySpan);
    itemDiv.appendChild(titleLink);
    itemDiv.appendChild(authorP);
    itemDiv.appendChild(descriptionP);

    // Append the final item to the main container
    container.appendChild(itemDiv);
});