class FrontendController < ApplicationController
    before_action :set_menu_items

    def home
    end

    def services
    end

    def portfolio
    end

    def testimonials
    end

    def team
    end

    def contact
    end

    def set_menu_items
        # This sets menu items in the top bar with appropriate relative paths
        # home contact portfolio services team testimonials
        names = ["home", "contact", "portfolio", "services", "team", "testimonials"]
        @menu_items = []
        names.each_with_index do |_name, i|
            @menu_items.push({"id": i, "link": route_for(_name), "name": _name})
        end
    end
end
