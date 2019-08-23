fetch("http://localhost:3000/api/v1/contractors")
		.then(res => res.json())
		.then(contractors => {
			let main = document.querySelector(".main")

			//main.innerHTML = ""
			
			
			let div_polar = render_flipping_mini_card(contractors[0], "red-question-mark.png", price_tag = true)//"qmark.jpg"
		
				main.append(div_polar)
		 div_polar.className += " giggle"
		 			div_polar.style += " animation-delay: -.22s; animation-duration: .3s;"

			
			console.log(contractors)
			//fill_contractors_line(contractors)
			let div_giggle = document.createElement("div")
			div_giggle.className = "gallery giggle"
			div_giggle.style = "animation-delay: -.22s; animation-duration: .3s;"
			main.append(div_giggle)

		})

document.addEventListener("DOMContentLoaded", () => {
	const morph = document.createElement("div")
	morph.id = "show_up_morph"
	const morph_img = document.createElement("img")
	morph_img.src = "Morpheus01.jpg"
	morph.append(morph_img)
	morph_img.style.height = "200px"
	morph_img.style.width = "220px"
	let my_mini_menu = document.querySelector(".my_menu")
	my_mini_menu.append(morph)
	morph.classList.remove("show")

	document.addEventListener("click", () => {
	morph.classList.add("show")
	})


})

function create_morph(my_mini_menu) {
	// body...
}





function render_flipping_mini_card(c, extra = null, price_tag = true) {
	
	let div_polar = document.createElement("div")
	div_polar.className = "gallery flip-card "


	let div_polar_inner = document.createElement("div")
	div_polar_inner.className = "flip-card-inner"

	let div_polar_inner_front = document.createElement("div")
	div_polar_inner_front.className = "flip-card-front"

	let div_polar_inner_back = document.createElement("div")
	div_polar_inner_back.className = "flip-card-back"

	let div_polar_inner_tag = document.createElement("div")
	//div_polar_inner_back.className = "flip-card-back"

	let h4_name = document.createElement("h4")
	h4_name.innerText = c.name

	let p_intro = document.createElement("p")
	p_intro.innerText = c.intro

	let img = document.createElement("img")
	img.src = c.img
	img.width = "150px"
	img.height = "150px"
	
	let ex_img = document.createElement("img")
	ex_img.id = "extra_image"

	// if (extra) {
	// 	ex_img.src = extra
	// 	ex_img.style.position = "absolute"
	// 	 ex_img.style.top = "0"
	// 	ex_img.style.left = "0"

	// 	 //ex_img.style.zIndex = "10"
	// 	//ex_img.style.backgroundColor = "transparent"
	// 	 ex_img.style.height = "150px"
	// }
	
	let tag_img = document.createElement("img")
	let tag_price = document.createElement("h4")


	if (price_tag) {
		tag_img.src = price_tag_image
		tag_img.style.position = "absolute"
		tag_img.style.top = "90px"
		tag_img.style.right = "0"

		 tag_img.style.zIndex = "10"
		 tag_img.style.opacity = 0.5
		 tag_img.style.height = "55px"
		 tag_img.style.width = "55px"

		tag_price.innerText = "$" +  c.price

		tag_price.style.position = "fixed"
		tag_price.style.top = "90px"
		tag_price.style.right = "0"
		tag_price.style.zIndex = "20"
		tag_price.style.height = "50px"
		tag_price.style.width = "40px"
		tag_price.style.opacity = 0.5
	}

	div_polar_inner_front.append(img, ex_img )
	div_polar_inner_tag.append(tag_img, tag_price)
	div_polar_inner_back.append(h4_name, p_intro)

	div_polar_inner.append(div_polar_inner_front)
	div_polar_inner.append(div_polar_inner_back)
	div_polar.append(div_polar_inner_tag)


	div_polar.append(div_polar_inner)

	div_polar.setAttribute("contractor_id", c.id)
	div_polar.setAttribute("contractor_price", c.price)
	

	return div_polar
}