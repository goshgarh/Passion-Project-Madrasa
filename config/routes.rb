Rails.application.routes.draw do
  
  devise_for :teachers, path: 'teachers', controllers: {
        sessions: 'teachers/sessions',
        registrations: 'teachers/registrations'
      }

    
  devise_for :pupils, path: 'pupils', controllers: {
        sessions: 'pupils/sessions',
        registrations: 'pupils/registrations'
      }
    
#    devise_scope :pupil do
#       get '/pupils', to: 'pupils#index' 
#    end
    
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    
    root 'homes#index'
    resources :students
    resources :instructors
    resources :groups
    resources :pupils, only: [:index, :show]
    resources :teachers, only: [:index, :show]
end

