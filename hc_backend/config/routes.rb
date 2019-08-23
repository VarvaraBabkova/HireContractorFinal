Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
  	namespace :v1 do
  		resources :contractors, only: [:index, :show]
  		resources :clients, only: [:index, :create, :show]
  		resources :categories, only: [:index]
  		resources :appointments, only: [:index, :create]

  	end
  end



end
