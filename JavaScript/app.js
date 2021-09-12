
// This is functionality of website

const navbarIngredients = [
		{
			Text:"Home",
			Url: "index.html",
			Class: "Home",
			Alt: "Goto Homepage"	
		},

		{
			Text:"Photography",
			Url: "Pages/photography.html",
			Class: "Photography",
			Alt: "Goto Photographs taken by me"	
		},
		
		{
			Text:"Projects",
			Url: "Pages/projects.html",
			Class: "Projects",
			Alt: "My work in a nutshell"	
		},
		
		{
			Text:"Who am I?",
			Url: "Pages/aboutme.html",
			Class: "Who am I?",
			Alt: "Goto my introduction"	
		},

		{
			Text:"Hit me up",
			Url: "Pages/contact.html",
			Class: "Hit me up",
			Alt: "Connect with me"	
		},
		
];


//Running map over the navbarIngredients

const navbarLinks = `
${navbarIngredients.map(navbarIngredient => `<li class="navbar-links">
	<a href=${navbarIngredient.Url} 
	class="${navbarIngredient.Class}" 
	alt="${navbarIngredient.Alt}">
	${navbarIngredient.Text}
	</a>`).join('')}
</li>`;

// const navbarLinks = `
// ${navbarIngredients.map(navbarIngredient => `<li class="navbar-links"><a href=${navbarIngredient.Url} class="${navbarIngredient.Class}" 
// alt="${navbarIngredient.Alt}">${navbarIngredient.Text}</a>`).join(' ')}</li>
// `;

document.querySelector('ul').innerHTML=navbarLinks ;

//
const burger = document.querySelector('.burger i');
const navbarUl = document.querySelector('.navbar-ul');

// Defining a function

function toggleNav(){
burger.classList.toggle('fa-bars');
burger.classList.toggle('fa-times');
navbarUl.classList.toggle('.navbar-ul');
}

// Calling the function after click event occurs
burger.addEventListener('click', function() {
toggleNav();
});