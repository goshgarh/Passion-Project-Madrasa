class Instructor < ApplicationRecord
#     devise :database_authenticatable, :registerable,
#         :recoverable, :rememberable, :trackable, :validatable
       
     has_one_attached :avatar
    
     def full_name
        "#{first_name} #{last_name}" 
    end
end
