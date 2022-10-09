class Owner < ApplicationRecord
    has_secure_password
    has_many :properties, through: :owner_properties
    
    validates :username, presence: true, uniqueness: true
    validates :firstName, presence: true
    validates :lastName, presence: true
    validates :email, presence: true, uniqueness: {message: 'Email has already been used'}
    validates_format_of :email, with: URI::MailTo::EMAIL_REGEXP
    validates :password, presence: true, confirmation: true, length: {minimum: 8}
    validates :password_confirmation, presence: true
    
    # validate :password_length
    validate :password_lower_case
    validate :password_uppercase
    validate :password_special_char
    validate :password_contains_number
    
    private 

    def password_uppercase
      return if !!password.match(/\p{Upper}/)
      errors.add :password, 'must contain at least 1 uppercase'
    end
  
    def password_lower_case
      return if !!password.match(/\p{Lower}/)
      errors.add :password, 'must contain at least 1 lowercase'
    end
  
    def password_special_char
      special = "?<>',?[]}{=-)(*&^%$#`~{}!+"
      regex = /[#{special.gsub(/./){|char| "\\#{char}"}}]/
      return if password =~ regex
      errors.add :password, 'must contain special character'
    end
  
    def password_contains_number
      return if password.count("0-9") > 0
      errors.add :password, 'must contain at least one number'
    end

    # def password_length
    #     return if password.length >= 8
    #     errors.add :password, 'must have minimum 8 characters'
    # end
end

