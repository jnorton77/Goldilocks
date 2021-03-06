Goldilocks::Application.routes.draw do
  devise_for :users, path_names: { sign_in: 'login', sign_out: 'logout', password: 'authentication' }

  root :to => "home#index"
  get 'results/today' => 'home#today'
  get 'results/yesterday' => 'home#yesterday'
  get 'results/thisWeek' => 'home#this_week'
  get 'results/all-time' => 'home#all_time'
  get 'users/index/results' => 'users#retrieve_all_responses'
  get 'users/:id/results' => 'users#retrieve_user_responses'
  get 'users/index/heartrates' => 'users#retrieve_all_heart_rates'
  get 'users/:id/heartrates' => 'users#retrieve_user_heart_rates'
  post 'heartrate' => 'users#avg'

  delete :sessions, to: redirect('/home/logout')

  resources :users do
    resources :responses
  end


  match '/users/m/:id/responses' => 'responses#mobile_create', via: :post

  match '/users/:id/heart_rates' => 'heart_rates#create', via: :post

  # match '/request' => 'responses#mobile_create', via: :get

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
