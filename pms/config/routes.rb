Rails.application.routes.draw do
  resources :tenant_properties
  resources :apartments
  resources :tenant_apartments
  resources :property_apartments
  resources :owner_properties
  resources :tenants
  resources :properties
  resources :owners
  resources :tenants

  post "/signup_owners", to: "owners#create"
  post "/login_owners", to: "owner_sessions#login"
  delete '/logout_owners', to: "owner_sessions#logout"
  post "/signup_tenants", to: "tenants#create"
  post "/login_tenants", to: "tenant_sessions#login"
  delete '/logout_tenants', to: "tenant_sessions#logout"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
