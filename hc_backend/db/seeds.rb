# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Category.destroy_all
Contractor.destroy_all
Client.destroy_all
Appointment.destroy_all

cat1 = Category.create(name: "Plumbers")
cat2 = Category.create(name: "Housekeepers")
cat3 = Category.create(name: "Gardeners")

number = 20

intro = ["I believe that every client should be 100% satisfied with the work I complete for them. 
	If this is not the case I am always willing to go out and make changes to meet their expectations. 
		I treat every project like it was being done in my own home.",
		"Quality handyman work for interior and exteriors and painting needs, power washing.
Creating realism, and able to create what the customer wants in custom artwork, graphics, murals, 
t-shirts, airbrush, pencil, oil and acrylics.", "Jay-B & Group Services is a locally owned business 
that is concern with improving homes, construction and remodeling private and commercial properties. 
We pride in making properties better through our various services that we offered. ",
"We are a group of expertise for all of your Home improvements project and Commercial Big projects,. No project is too small nor too big for our team to handle. We have helped many homes recovered from flood, build from blueprint, add extension to home and remodel bathrooms and kitchen upgrade.",
"Home improvements and Renovation are on our list of great customer Services and quality delivered. 
We covered up to 50 miles away from our major city and within Houston area. Our services are exceptionally great both in customer services and quality of services delivered. We guaranty our quality work. "
]


name_array = ["Harry", "Frank Lancaster", "Noel Rice", "Bo Stafford", "Yusuf Tobi", "Noah Tree", "Liam Nelson",
"William Bark", "Benjamin Frank", "Jacob Aromat", "Elijah Woods", "Ethan Hawk", "Alexander Great"]

p_img_array = ["https://ehmsolutions.org/wp-content/uploads/2018/04/construction-worker-200x374.png",
	"http://streatcrete.co.uk/wp-content/uploads/2015/12/worker.png",
	"http://freepngdownload.com/image/thumb/industrial-worker-png-free-download-26.png",
	"https://media.beliefnet.com/~/media/photos-with-attribution/inspiration/002/peoplemiddleagedmansmilingjpg.jpg?as=1&w=400",
	"https://secure.gravatar.com/avatar/9f7337a4421bb3ac3d9a2890f956ec57?s=400&d=mm&r=g",
	"https://www.thebalancecareers.com/thmb/_aDuzn7q-qo_lzFAyOHzpTklizg=/400x0/463028425-56b098cd5f9b58b7d024486b.jpg",
	"https://www.euspray.com/wp-content/uploads/2017/09/handyman.png",
	"https://i.pinimg.com/236x/3c/b8/d7/3cb8d77747c1c7e4255a488e70560dad--handyman-service-dad-daughter.jpg",
	"https://www.serviceandsolution.ae/wp-content/uploads/2017/12/contractor.png",
	"https://638019d22b19116de0d4-1d4b8e1ee4fc68b037e808a7ff8e61df.ssl.cf2.rackcdn.com/2018/09/Construction-Supervisor.png",
	"http://www.sharrockinsurance.co.uk/wp-content/uploads/2015/05/Build-To-Suit.jpg",
	"https://www.constructionpartner.com/images/general-contractor-sm.jpg",
	"https://www.fbc.ca/sites/default/files/2017-11/tax%20tip%20contractor%20canada.jpg",
	"https://philippiqualityconstruction.com/wp-content/uploads/2012/04/52_callout.jpg.mxw396.mxh298.jpeg",
	"https://www.epa.gov/sites/production/files/styles/medium/public/2016-05/contractor.jpg",
	"http://freepngdownload.com/image/thumb/industrial-worker-png-free-download-3.png",
	"https://turn2ushandyman.com/wp-content/uploads/2017/08/handyman.png",
	"https://i.dlpng.com/static/png/5089911_thumb.png"

]

number.times {
	Contractor.create(name: name_array[rand(name_array.length)], price: rand(5..30), work: "", 
		img: p_img_array[rand(p_img_array.length)], intro: intro[rand(intro.length)], category_id: cat1.id)
} 

hk_names_array = ["Abigail Woods", "Camille Green", "Daisy Green", "Gabrielle Anickson", "Edith Piaph", "Berenice Toll", 
	"Elisa Comp", "Dorris Sheep", "Bertha Redface", "Berta Mag", "Mary Sue"]

hk_img_array = ["http://montrealmascleaning.com/wp-content/uploads/2018/01/Maid-Cleaning-Services-Montreal-1.jpg",
	"https://static.wixstatic.com/media/6a8f54_e276bd72e91640a09281d45adbf8f89b~mv2.jpg/v1/fill/w_568%2Ch_514%2Cal_c%2Cq_90/file.jpg",
	"https://www.booktoclean.com/wp-content/uploads/2014/04/FairOaksMaid.png",
	"https://maidsandmoore.com/wp-content/uploads/2012/10/Cleaning-Service-Austin-TX.jpg",
	"https://www.trzcacak.rs/myfile/detail/44-447087_why-leesburg-home-cleaning-cleaning-maid-png.png",
	"https://maidfortodayofsouthflorida.com/images/bann_rgt.png",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbm6Z6hONglCSRo1p2BAfzQ2P8_8GURZ-B8Tp2MGve-_KCgO0G",
	"https://thumbs.dreamstime.com/b/cleaner-maid-woman-janitor-cart-isolated-white-background-32541804.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDnOreEkdpFvVz23qIhIFN2rtWxn_TrUiSLyADwWg_ZthMA13z",
	"https://whitemaidcleaning.com/wp-content/uploads/2017/01/wmc-maid-03.png",
	"https://jan-pro.com/wp-content/uploads/2018/07/ntnl_acc-philip-ellain-1-633x1024.png",
	"https://previews.123rf.com/images/boarding1now/boarding1now1601/boarding1now160100202/51674962-cleaning-lady-service-cleaner-woman-job-occupation-full-body-isolated-on-a-white-background.jpg",
	"http://www.almeidascleaning.com/wp-content/uploads/2014/10/cleaninglady-japa1.png",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnrMnsWVCL6akvsmduXY4D0l0Z7DRparJxGqbNalyUwuMnQ0gE",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYB_2FWOaFzvmIiRsIor5AdmZeCBYhItM140iuLs75_P4a0dPB",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjYH3BzlNR915JqSrJEPiwt90Up4O08ZtA3wxsJtxIaWTSvOU",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQKcbdt7MYFcEYXpZmNvNlDMgVw5TjsVXRaTqX09bPeiimaVj"
]

hk_intro = ["Top Flight Cleaning Service's provides customers with a carpet/cleaning service in a trustworthy, and professional manner. Our services will exceed the expectations of our customers.",
	"We are only interested in serious inquiries. If you are looking to have your carpet or home cleaned and are ready to hire, give us a call and we can give you a phone consultation. We want to get to know your unique needs to give you the best deal possible.",
	"We take pride in the services we provide. We use only the products that will leave the customer happy, so they will continue to use our services.",
	"Quality customer service and very flexible times. We own professional cleaning equipment that does a very deep clean and leaves little to no trace of any mess, grime, or even smell. Our cleaning chemicals leave a very floral and delicate scent so your home or business will smell fresh. ",
	"Very affordable and friendly, we are willing to adapt to suit any of your cleaning preferences or needs!",
	"Arrive early to take a few minutes to greet introduce my client and then I take a few minutes to explain in detail that you particularly want to be clean. and I take our other packages introduce extra cleaning has our company ",
	"Everything, especially kitchens and bathrooms, I enjoy my work. cleanliness is one of the things that I like to do in homes and to help with household stress families fills me with joy. E_J Cleaning."
]


number.times {
	Contractor.create(name: hk_names_array[rand(hk_names_array.length)], price: rand(5..30), work: "", 
		img: hk_img_array[rand(hk_img_array.length)], intro: hk_intro[rand(hk_intro.length)], category_id: cat2.id)
}

g_img_array = [
	"https://3.imimg.com/data3/WK/HG/MY-9219602/gardeners-manpower-supply-500x500.png",
	"https://i.dlpng.com/static/png/68160_preview.png",
	"https://img.pngio.com/gardener-png-94-images-in-collection-page-1-png-of-woman-gardening-210_323.png",
	"https://img.pngio.com/gardener-png-94-images-in-collection-page-2-png-of-woman-gardening-500_600.png",
	"https://images.freeimages.com/images/premium/previews/1290/12909968-gardener-woman-with-garden-hose-isolated-on-white-background.jpg",
	"https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX4602828.jpg",
	"https://blog.fantasticgardeners.co.uk/wp-content/uploads/2016/08/garden-maintenance-by-Fantastic-gardeners.jpg",
	"https://previews.123rf.com/images/halfpoint/halfpoint1309/halfpoint130900147/22086099-young-male-gardener-is-watering-plants-in-garden.jpg",
	"https://washington.extension.wisc.edu/files/2010/06/12-mangardening.jpg",
	"https://1075koolfm.com/wp-content/uploads/2016/06/man-harvesting.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQttWep_ivXJLHosBbsww5z1CT9ZZ8s-ld84l5CUQyB_geUJyY7",
	"https://independentretailerscoop.com/wp-content/uploads/2018/02/Male-Gardener-Web-Graphic-72dpi-2.png",
	"https://banner2.kisspng.com/20171211/23f/gardener-5a2eb9ec3106b4.4342003015130116922008.jpg",
	"https://banner2.kisspng.com/20180616/xzb/kisspng-gardening-architecture-sitting-people-5b24a6368b6ea2.6278901915291285025711.jpg",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKNz5zkuXwIQQVW6c1hRmfbnoNHSfGhejQRnvd460lIeAvLBYz",
	"https://banner2.kisspng.com/20181129/tip/kisspng-gardening-design-ideas-2-18-gardener-5c000a15016921.3569679515435064530058.jpg",
	"http://speedyproperty.com.au/wp-content/uploads/mowing-orig.png",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-mrTwAU4jl9uzCt-IS-If9UkQGUOPwX734XNlEBncWM9jTKriKA"
]
g_intro = hk_intro

number.times {
	Contractor.create(name: name_array[rand(name_array.length)], price: rand(5..30), work: "", 
		img: g_img_array[rand(g_img_array.length)], intro: g_intro[rand(g_intro.length)], category_id: cat3.id)
}


c1 = Contractor.create(name: "Harry", price: rand(5..30), work: "Chris gets it Done.", 

	img:"https://ehmsolutions.org/wp-content/uploads/2018/04/construction-worker-200x374.png", 
	intro:" I believe that every client should be 100% satisfied with the work I complete for them. 
	If this is not the case I am always willing to go out and make changes to meet their expectations. 
		I treat every project like it was being done in my own home.", category_id: cat1.id )

c3 = Contractor.create(name: "Barry", price: rand(5..30), work: "Chris gets it Done.", 
	img:"http://streatcrete.co.uk/wp-content/uploads/2015/12/worker.png", 
	intro:" I hanges to ", category_id: cat1.id )

c4 = Contractor.create(name: "Larry", price: rand(5..30), work: "Chris gets it Done.", 
	img:"http://freepngdownload.com/image/thumb/industrial-worker-png-free-download-26.png", 
	intro:" I hanges to ", category_id: cat1.id )

c04 = Contractor.create(name: "Frank Lancaster", price: rand(5..30), work: "Job done right and pronto", 
		img:"https://media.beliefnet.com/~/media/photos-with-attribution/inspiration/002/peoplemiddleagedmansmilingjpg.jpg?as=1&w=400", 
		intro:"Been providing high quality Air Conditioning/Heating services. I have been serving Houston and neighboring areas for more than 12 years.", category_id: cat3.id )

c05 = Contractor.create(name: "Bo Stafford", price: rand(5..30), work: "Removes and install carpeting and all general flooring", 
		img:"http://makeup-crematory.weebly.com/uploads/4/7/7/4/47744545/1311677_orig.jpg", 
		intro:"Stop stressing and let Bo address it.", category_id: cat1.id )

c06 = Contractor.create(name: "Cheyenne Whitaker", price: rand(5..30), work: "Over 10 years experience installing electrical units", 
		img:"https://secure.gravatar.com/avatar/9f7337a4421bb3ac3d9a2890f956ec57?s=400&d=mm&r=g", 
		intro:"Experienced electrician you can count on.", category_id: cat1.id )

c07 = Contractor.create(name: "Daphne Scott", price: rand(5..30), work: "Whether it's lawn or garden, I can conform it to your standard", 
		img:"https://cdn10.bigcommerce.com/s-9x46yrfk/product_images/uploaded_images/seraphina300.jpg", 
		intro:"Less is more. For all the overgrown grass, weeds and fallen leaves, you need somebody who can resolve this issue. Due to my excellent service, 
		my business is one of the highest rated landscaping business.", category_id: cat1.id )

c08 = Contractor.create(name: "Noel Rice", price: rand(5..30), work: "Fixes leaking, repairs and construction of roofs", 
		img:"https://i.pinimg.com/236x/3c/b8/d7/3cb8d77747c1c7e4255a488e70560dad--handyman-service-dad-daughter.jpg", 
		intro:"All around roof master.", category_id: cat1.id )

c09 = Contractor.create(name: "Alaina Sherman", price: rand(5..30), work: "HVAC reapairing, maitenance and installation", 
		img:"https://www.thebalancecareers.com/thmb/_aDuzn7q-qo_lzFAyOHzpTklizg=/400x0/463028425-56b098cd5f9b58b7d024486b.jpg", 
		intro:"Don't get burnt in this Houston weather. Call Alaina!", category_id: cat3.id )



c5 = Contractor.create(name: "Varry", price: rand(5..30), work: "Chris gets it Done.", 
	img:"https://www.euspray.com/wp-content/uploads/2017/09/handyman.png", 
	intro:" I hanges to ", category_id: cat1.id )
c6 = Contractor.create(name: "Varry", price: rand(5..30), work: "Chris gets it Done.", 
	img:"https://i.pinimg.com/236x/3c/b8/d7/3cb8d77747c1c7e4255a488e70560dad--handyman-service-dad-daughter.jpg", 
	intro:" I hanges to ", category_id: cat1.id )
c2 = Contractor.create(name: "Varry", price: rand(5..30), work: "Chris gets it Done.", 
	img:"https://www.serviceandsolution.ae/wp-content/uploads/2017/12/contractor.png", 
	intro:" I hanges to ", category_id: cat1.id )

h1 = Contractor.create(name: "Mary", price: rand(5..30), work: "Houston's cleaning, packing,unpacking", 
	img:"https://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/e475f86d-5568-441a-99ce-4f2af15c3623/File/f4386af2ca1ee6ac9e96f05e33cd5221/shutterstock_654521407.jpg",
	intro: "", category_id: cat2.id )
h2 = Contractor.create(name: "Ann", price: rand(5..30), work: "Houston's cleaning, packing,unpacking", 
	img:"https://i.pinimg.com/originals/5e/e3/30/5ee330ae4ea47113f26efcfab61c1bca.jpg",
	intro: "", category_id: cat2.id )
h3 = Contractor.create(name: "Clair", price: rand(5..30), work: "Houston's cleaning, packing,unpacking", 
	img:"https://img-aws.ehowcdn.com/340x221p/photos.demandstudios.com/getty/article/181/165/161146656.jpg",
	intro: "", category_id: cat2.id )
h4 = Contractor.create(name: "Dorris", price: rand(5..30), work: "Houston's cleaning, packing,unpacking", 
	img:"http://daewonthuduc.com/uploadwb/hinhanh/12d62b8_1_79872018125213_b_.jpg",
	intro: "", category_id: cat2.id )

g1 = Contractor.create(name: "Bob", price: rand(5..30), work: "Houston's gardening", 
	img:"https://www.allianz.com.au/business/business-insurance/news/small-business-insurance-for-gardeners-and-landscapers/local-image/small-business-insurance-for-gardeners-and-landscapers-01_360x240.jpg",
	intro: "", category_id: cat3.id )
g2 = Contractor.create(name: "Joe", price: rand(5..30), work: "Houston's gardenin", 
	img:"https://q7i2y6d5.stackpathcdn.com/wp-content/uploads/2014/11/gardener1-400x266.jpg",
	intro: "", category_id: cat3.id )

# a1 = Appointment.create(client_id: cl1.id,contractor_id: c1.id)
# a2 = Appointment.create(client_id: cl1.id,contractor_id: c2.id)
# a3 = Appointment.create(client_id: cl2.id,contractor_id: c1.id)

cl1 = Client.create(name: "Ryan Bell")
cl2 = Client.create(name: "Chris Ryan")
cl3 = Client.create(name: "Travis Stokely")
cl4 = Client.create(name: "Steffi Bailey")
cl5 = Client.create(name: "Yusuf Tobi")

