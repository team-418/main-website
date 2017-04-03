Rails.application.routes.draw do
  scope :api do
    resources :institutions
    resources :volunteers
    resources :time_periods
    resources :skills
    resources :reviews
    resources :principals
    resources :institutions
    resources :principals
    resources :institutions
    resources :opportunities, except: :new, defaults: { formats: :json }
    devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions' }
  end

  get "/*path" => 'pages#index', via: [:get]

  root 'pages#index'
end
