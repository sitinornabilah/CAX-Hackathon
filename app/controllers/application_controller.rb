class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def home
	@title = "Home"
  end

  def post
  end
  
  def club
  end
  
  def association
  end

  def secretariat
  end

  def faculty
  end

end
