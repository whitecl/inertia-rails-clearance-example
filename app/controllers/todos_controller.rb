class TodosController < ApplicationController
  before_action :require_login

  def index
    render inertia: "Todos/Index"
  end
end
