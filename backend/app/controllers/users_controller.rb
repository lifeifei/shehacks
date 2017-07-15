class UsersController < ApplicationController
  def index
    puts "in index"
    render json: { name: 'abec'}

  end
end
