Rails.application.routes.draw do
  resources :apartments
  resources :tenant_apartments
  resources :property_apartments
  resources :owner_properties
  resources :tenants
  resources :properties
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
