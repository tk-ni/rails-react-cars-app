Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :cars do
        get :car_drivers
        get :car_by_id
      end
      get '/cars/car_drivers_combined/:car_title' => 'cars#car_drivers_combined', as: :car_drivers_combined
      resources :drivers do
        get :driver_cars
        get :driver_by_id
      end
      get '/drivers/driver_cars_combined/:driver_name' => 'drivers#driver_cars_combined', as: :driver_cars_combined
    end
  end

  # Reroute unknown paths to index
  get '*path', to: 'pages#index', via: :all
end
