class GroupsController < ApplicationController
     before_action :authenticate_pupil!
#     @pupil = current_pupil
    
    def index
      @groups = Group.all.order(:created_at)
    end
    
    def new
        @group = Group.new
    end
    
    def show
         @group = Group.find(params[:id])
    end
    
    def create
        Group.create(group_params)
        flash[:success]='You have successfully created Group'
        redirect_to groups_path
    end
    
    def edit
        
        @group = Group.find(params[:id])
        
    end
    
    def update
        group = Group.find(params[:id])
        group.update(group_params)
         flash[:success]='You have successfully updated Group'
        redirect_to groups_path
    end
    
    def destroy
        Group.destroy(params[:id])
         flash[:error]='Your Group is deleted'
       render json: {message: 'group is destroyed!'}
        
#        render :edit -- it is edit.html.erb inside views/groups
    end
    
    def group_params
#        will return something like this:
#        {name: '...', description: '....'}
        
        params.require(:group).permit(:name, :description, :avatar)
    end
end
