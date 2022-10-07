class ApplicationController < ActionController::Base
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  
    private
  
    def record_not_found(exception)
      return render json: {errors: exception}, status: :not_found
    end
  
    def record_invalid(exception)
      return render json: {errors: exception.record.errors}, status: :unprocessable_entity
    end
    
end
