class Api::V1::ClientsController < ApplicationController
	def index
		@clients = Client.all
		render json: @clients, only: [:id, :name]
	end

	def create
	    @api_v1_client = Client.new(api_v1_entry_params)
#byebug
	    if @api_v1_client.save
	    	#byebug
	      render json: @api_v1_client, status: :created, location: api_v1_client_url(@api_v1_client)
	    else
	    	byebug
	      render json: @api_v1_client.errors, status: :unprocessable_entity
	    end
   end

	def show
		@api_v1_client = Client.find(params[:id])
		render json: @api_v1_client, only: [:id, :name]
	end

   private
	  def api_v1_entry_params
	      params.require(:client).permit(:name)
	  end

end
