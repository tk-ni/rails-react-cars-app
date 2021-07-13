Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :cars
      resources :drivers
    end
  end

  # Reroute unknown paths to index
  get '*path', to: 'pages#index', via: :all
end
