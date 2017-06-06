Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'frontend#home'
  get 'home', to: 'frontend#home'
  get 'services', to: 'frontend#services'
  get 'portfolio', to: 'frontend#portfolio'
  get 'testimonials', to: 'frontend#testimonials'
  get 'team', to: 'frontend#team'
  get 'contact', to: 'frontend#contact'
end
