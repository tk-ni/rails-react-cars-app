Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :cars do
        get :car_drivers
        get :car_by_id
      end
      resources :drivers do
        get :driver_cars
        get :driver_by_id
      end
    end
  end

  # Reroute unknown paths to index
  get '*path', to: 'pages#index', via: :all
end
