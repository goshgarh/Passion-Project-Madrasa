class PupilsController < ApplicationController
    def index
        @pupils = Pupil.all
    end
    
    def show
       @pupil = Pupil.find(params[:id]) 
    end
end
