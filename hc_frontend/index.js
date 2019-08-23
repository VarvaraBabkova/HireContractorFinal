contractorURL = "http://localhost:3000/api/v1/contractors"
clientURL ="http://localhost:3000/api/v1/clients"
apptURL = "http://localhost:3000/api/v1/appointments"

price_tag_image = "price-tag.png"

const init_fund = 100

const main = document.querySelector(".main")
let chosen = []
let my_menu = document.querySelector(".my_menu")

let best_offer = null
let best_price = null

const dis_opacity = 0.2


document.addEventListener("DOMContentLoaded", () => {
	let my_menu = document.querySelector(".my_menu")
	let my_menu_full = document.querySelector(".my_menu_full")


	let modal = document.getElementById("myModal");
	modal.style.display = "block";

	let span = document.getElementsByClassName("close")[0];
	span.onclick = function() {
	  modal.style.display = "none";
	}

	let st_button = document.getElementById("standard_button")
	let nst_button = document.getElementById("non_standard_button")

/////////////////////////////GAME ONE/////////////////////////////////////////////////////////////////////////

	st_button.addEventListener("click", () => {
		let money_image = document.createElement("img")
		let fund = document.createElement("h1")
		//fund.innerText = "$" + document.getElementById("init_fund").value + " left!"
		fund.innerText = document.getElementById("init_fund").value
		fund.className = "fund"
		fund.style.position = "absolute"
		fund.style.width = "50px"
		//fund.style.right = "-50px"
		fund.style.left = (window.innerWidth - 100) + "px"
		fund.style.bottom = "0"
		fund.style.zIndex = "10"

		money_image.src = "74q02z_large.png"
		money_image.style.position = "absolute"
		money_image.style.width = "150px"
		money_image.style.height = "70px"
		 money_image.style.backgroundColor = "transparent"

		money_image.style.left = (window.innerWidth - 150) + "px"
		//debugger
		money_image.style.bottom = "0"
		money_image.style.zIndex = "9"

		let hire_button = document.createElement("input")
		hire_button.type ="button"
		hire_button.className = "btn success"
		hire_button.value = "Hire!"
		hire_button.style.position = "absolute"
		
		hire_button.style.left = (window.innerWidth - (window.innerWidth - window.innerWidth*0.8)/2 - 100/2)  + "px"
		//debugger
		hire_button.style.bottom = "100px"

		my_menu_full.append(hire_button)
		my_menu_full.append(money_image)
		my_menu_full.append(fund)

		hire_button.addEventListener("click", ()=> {
			console.log(my_menu.childNodes)
			if (hire_button.value == "Hire!")
			{


				let snd2 = new Audio("yay_z.wav"); 
				snd2.play();

				my_menu.childNodes.forEach(node => {
					if (node.tagName == "DIV"){
						node.className += " giggle"
						node.style += " animation-delay: -.22s; animation-duration: .3s;"
						
						change_to_approved(node)

						//node.querySelector()
					}
				})
				hire_button.value = "YAY!"
			}else{
				location.reload()
			}
			
				
		})

		fetch("http://localhost:3000/api/v1/categories")
		.then(res => res.json())
		.then(categories => {
			let barmenu = document.querySelector(".navbar")

			barmenu.innerHTML = ""
			
			categories.forEach(c => {
				let ahref = document.createElement("button")
				ahref.innerText = c.name
				barmenu.append(ahref)
				ahref.addEventListener("click", () =>{
					fill_contractors_list(c.contractors)
				})
			})
			fill_contractors_list(categories[0].contractors)
		})

		save_customer(document.querySelector("#new-client").value)
		modal.style.display = "none";
	})
/////////////////////////////GAME TWO/////////////////////////////////////////////////////////////////////////
	nst_button.addEventListener("click", () => {
		let line_length = document.getElementById("line").value

		fetch("http://localhost:3000/api/v1/contractors")
		.then(res => res.json())
		.then(contractors => {
			let barmenu = document.querySelector(".navbar")

			barmenu.innerHTML = ""
			
			while (contractors.length > line_length) {
			    contractors.splice(contractors.length * Math.random() | 0, 1)[0];
			}

			best_price = contractors.reduce((min, p) => p.price < min ? p.price : min, contractors[0].price);
			best_offer = contractors.find(c => c.price == best_price)
			
			console.log(contractors)
			fill_contractors_line(contractors)
		})
		save_customer(document.querySelector("#new-client").value)
		modal.style.display = "none";
	})
	
}) //DOM



function fill_contractors_line(contractors) {
	let main = document.querySelector(".main")

	let my_menu = document.querySelector(".my_menu")

	main.innerHTML = ""
	chosen = []

	contractors.forEach(c => {
		let div_polar = render_mini_card(c, "red-question-mark.png", price_tag = false)//"qmark.jpg"
		
		main.append(div_polar)
		 
		div_polar.addEventListener("click", () =>{
			if (div_polar.style.opacity < 1) 
				return
			
			disable_all(main)
			chosen.push(c.id)

			draw_mymenu_choice(my_menu, c, div_polar)			
		})
		able_disable_kicked(main, chosen)
	})
	main.scrollTop = 0
}


function fill_contractors_list(contractors) {

	contractors = contractors.sort((a, b) => (a.price > b.price) ? 1 : -1)

	let main = document.querySelector(".main")
	let my_menu = document.querySelector(".my_menu")
	let my_menu_full = document.querySelector(".my_menu_full")


	main.setAttribute("category", contractors[0].category_id)
	main.innerHTML = ""

	contractors.forEach(c => {
		let div_polar = render_flipping_mini_card(c) ///////////////////!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		if (chosen.includes(c.id)){
			
		 } else {
			main.append(div_polar)
		 }
//what happens when we click on card - it goes down or up to the list or to the busket
		div_polar.addEventListener("click", () => {
			if (div_polar.style.opacity < 1) 
				return

			console.log(c)
			console.log(chosen.includes(c.id))

			if (chosen.includes(c.id)){
				chosen = chosen.filter(id => id != c.id)
				my_menu_full.querySelector(".fund").innerText  = parseInt(my_menu_full.querySelector(".fund").innerText) + c.price

				if (main.getAttribute("category") == c.category_id)
				{
					main.append(div_polar)
				}else{
					my_menu.removeChild(div_polar)
				}

				able_disable_price(main, parseInt(my_menu_full.querySelector(".fund").innerText))

				console.log(my_menu)
			 } else {
				my_menu.append(div_polar)
				chosen.push(c.id)
				my_menu_full.querySelector(".fund").innerText = parseInt(my_menu_full.querySelector(".fund").innerText) - c.price
				able_disable_price(main, parseInt(my_menu_full.querySelector(".fund").innerText))
			 }
			console.log(chosen)
		})
		able_disable_price(main, parseInt(my_menu_full.querySelector(".fund").innerText))
	})
	main.scrollTop = 0
	
}



function draw_mymenu_choice(my_menu, contractor, div_polar) {
	let yes_btn = document.createElement("button")
	yes_btn.innerText = "Accept offer!"
	yes_btn.className = "button green"
	let no_btn = document.createElement("button")
	no_btn.innerText = "Decline offer!"
	no_btn.className = "button red"
	let quote_text = document.createElement("h2")


	change_to_tag(div_polar, contractor.price)
	div_polar.style.opacity = 1
	my_menu.append(div_polar)

	my_menu.append(quote_text)
	my_menu.append(yes_btn)
	my_menu.append(no_btn)

	let bye_button = document.createElement("button")
		bye_button.innerText = "See you next time!"
		bye_button.addEventListener("click", () => location.reload())

	quote_text.innerText = "I'll make this job for " + contractor.price + " dollars!!!"
//little Morpheus..........................................................................................
	const morph = document.createElement("div")
	morph.id = "show_up_morph"
	const morph_img = document.createElement("img")
	morph_img.src = "Morpheus01.jpg"
	morph.append(morph_img)
	morph_img.style.height = "190px"
	morph_img.style.width = "200px"
	morph.classList.remove("show")
	document.querySelector(".main").append(morph)

//end of little Morpheus.......................................................................................

	yes_btn.addEventListener("click", () => {
		

		my_menu.innerHTML = ""
		let h2 = document.createElement("h2")
		h2.innerText = "Excellent choice!"

		let result = document.createElement("h4")
		if (contractor.price == best_price) {

			let snd = new Audio("yay_z.wav"); 
			snd.play();

			result.innerText = "That was the best price in the list!"
			my_menu.append(render_mini_card(contractor))
			my_menu.append(h2)
			my_menu.append(result)
			my_menu.append(bye_button)


		}else{
			let snd = new Audio("Rubber-stamp.mp3"); 
			snd.play();
			
			result.innerText = "That was not the best price in the list though...."
			let best_offer_card = render_mini_card(best_offer)

			my_menu.append(render_mini_card(contractor, extra = "approved-round.png"))
			my_menu.append(best_offer_card)

			my_menu.append(h2)
			my_menu.append(result)
			best_offer_card.className += " giggle"
			best_offer_card.style += " animation-delay: -.22s; animation-duration: .3s;"
			
			//little Morpheus......................
			morph.classList.add("show")

			//end of little Morpheus......................



			my_menu.append(bye_button)
		}		
	})

	no_btn.addEventListener("click", () => {
		document.querySelector(".main").append(div_polar)
		able_disable_kicked(document.querySelector(".main"), chosen)
		my_menu.innerHTML = ""

	})

}


function able_disable_price(list, fund) {
	list.childNodes.forEach(c => {
		if (c.getAttribute("contractor_price") <= fund) {
			c.style.opacity = 1
		}else
			c.style.opacity = dis_opacity

	})
}

function able_disable_kicked(list, chosen) {
	list.childNodes.forEach(c => {

		if (!chosen.includes(parseInt(c.getAttribute("contractor_id")))) {
			c.style.opacity = 1

		}else
			c.style.opacity = dis_opacity
	})
}

function disable_all(list) {
	list.childNodes.forEach(c => c.style.opacity = dis_opacity)
}

function save_customer(client_name) {
	//debugger
	fetch( clientURL, {
	        method: "POST",
	        headers: {
	            "Content-Type": "application/json"
	        },
	        body: JSON.stringify({
	            name: client_name
	            
	        })
	    })
	.then(res => res.json())
	.then(json => console.log('here', json))

    
}





