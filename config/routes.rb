Goldilocks::Application.routes.draw do
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" },
  path_names: { sign_in: 'login', sign_out: 'logout', password: 'authentication' }

  root :to => "home#index"
  get 'users/:id/results' => 'users#retrieve_results'
  delete :sessions, to: redirect('/home/logout')

  get 'users/:id' => 'users#show'

end
