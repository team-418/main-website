Rails.application.routes.draw do
  resources :institutions
  resources :volunteers
  resources :opportunities
  resources :opportunities
  resources :opportunities
  resources :opportunities
  resources :time_periods
  resources :skills
  resources :reviews
  resources :principals
  resources :institutions
  resources :principals
  resources :institutions
  resources :opportunities
  resources :opportunities
  resources :opportunities
  devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions' }
  root 'pages#index'
end
