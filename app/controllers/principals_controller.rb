class PrincipalsController < ApplicationController
  before_action :set_principal, only: [:show, :edit, :update, :destroy]
  clear_respond_to
  respond_to :json

  # GET /principals
  # GET /principals.json
  def index
    @principals = Principal.all
  end

  # GET /principals/1
  # GET /principals/1.json
  def show
  end

  # GET /principals/new
  def new
    @principal = Principal.new
  end

  # GET /principals/1/edit
  def edit
  end

  # POST /principals
  # POST /principals.json
  def create
    @principal = Principal.new(principal_params)

    if @principal.save
      render :show, status: :created, location: @principal
    else
      render json: @principal.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /principals/1
  # PATCH/PUT /principals/1.json
  def update
      if @principal.update(principal_params)
        render :show, status: :ok, location: @principal
      else
        render json: @principal.errors, status: :unprocessable_entity
      end
  end

  # DELETE /principals/1
  # DELETE /principals/1.json
  def destroy
    @principal.destroy
    format.json { head :no_content }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_principal
      @principal = Principal.find(params[:id])
    rescue ActiveRecord::RecordNotFound => e
      render json: e.message.to_json, status: :not_found
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def principal_params
      params.require(:principal).permit(:created_at, :last_updated_at, :user_id, :institution_id)
    end
end
