function render_mini_card(c, extra = null, price_tag = true) {

	let h4_name = document.createElement("h4")
	h4_name.innerText = c.name

	
	let div_polar = document.createElement("div")
	div_polar.className = "gallery tooltip"

	let img = document.createElement("img")
	img.src = c.img

	
	// let tooltip_span = document.createElement("span")
	// tooltip_span.className = "tooltiptext"
	
	
	let ex_img = document.createElement("img")
	ex_img.id = "extra_image"

	if (extra) {
		ex_img.src = extra
		ex_img.style.position = "absolute"
		ex_img.style.top = "0"
		ex_img.style.left = "0"

		 ex_img.style.zIndex = "10"
		 ex_img.style.backgroundColor = "transparent"
		 ex_img.style.height = "150px"
	}
	
	let tag_img = document.createElement("img")
	let h4 = document.createElement("h4")


	if (price_tag) {
		tag_img.src = price_tag_image
		tag_img.style.position = "absolute"
		tag_img.style.top = "90px"
		tag_img.style.right = "0"

		 tag_img.style.zIndex = "10"
		 tag_img.style.backgroundColor = "transparent"
		 tag_img.style.height = "55px"
		 tag_img.style.width = "55px"

		  h4.innerText = "$" +  c.price
		h4.style.position = "absolute"
		h4.style.top = "90px"
		h4.style.right = "0"
		h4.style.zIndex = "20"
		 h4.style.backgroundColor = "transparent"
		 h4.style.height = "50px"
		 h4.style.width = "40px"
	}

	div_polar.append(img, ex_img, tag_img, h4)

	// div_polar.append(tooltip_span)

	div_polar.setAttribute("contractor_id", c.id)
	div_polar.setAttribute("contractor_price", c.price)

	return div_polar
}

function change_to_tag(div_polar, price) {
	console.log(div_polar, price)

	div_polar.removeChild(div_polar.children[1])

	let tag_img = document.createElement("img")
	let h4 = document.createElement("h4")

	tag_img.src = price_tag_image
	tag_img.style.position = "absolute"
	tag_img.style.top = "90px"
	tag_img.style.right = "0"

	 tag_img.style.zIndex = "10"
	 tag_img.style.backgroundColor = "transparent"
	 tag_img.style.height = "55px"
	 tag_img.style.width = "55px"

	  h4.innerText = "$" + price 
	h4.style.position = "absolute"
	h4.style.top = "90px"
	h4.style.right = "0"
	h4.style.zIndex = "20"
	 h4.style.backgroundColor = "transparent"
	 h4.style.height = "50px"
	 h4.style.width = "40px"
	

	div_polar.append(tag_img, h4)
	console.log(div_polar)
}

function change_to_approved(div_polar, extra = "approved-round.png") {
	console.log(div_polar)

	//div_polar.removeChild(div_polar.children[1])

	let ex_img = document.createElement("img")
	ex_img.id = "extra_image"

		ex_img.src = extra
		ex_img.style.position = "absolute"
		ex_img.style.top = "0"
		ex_img.style.left = "0"

		 ex_img.style.zIndex = "10"
		 ex_img.style.backgroundColor = "transparent"
		 ex_img.style.height = "150px"
	
	div_polar.append(ex_img)
	console.log(div_polar)
}

function render_flipping_mini_card(c, extra = null, price_tag = true) {
	
	let div_polar = document.createElement("div")
	div_polar.className = "gallery flip-card"


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
