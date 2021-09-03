class TodosController < ApplicationController
  before_action :require_login

  def index
    render inertia: "Todos/Index", props: {todos: current_user.todos}
  end

  def create
    todo = current_user.todos.new(todo_params)

    if todo.save
      redirect_to todos_path, notice: "Made yer todo"
    else
      render inertia: "Todos/Index",
             props: {todos: current_user.todos, errors: todo.errors}
    end
  end

  private

  def todo_params
    params.require(:todo).permit(:text)
  end
end
