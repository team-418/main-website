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

  # POST /principals
  # POST /principals.json
  def create
    @principal = Principal.new(principal_params)

    respond_to do |format|
      if @principal.save
        format.json { render :show, status: :created, location: @principal }
      else
        format.json { render json: @principal.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /principals/1
  # PATCH/PUT /principals/1.json
  def update
    respond_to do |format|
      if @principal.update(principal_params)
        format.json { render :show, status: :ok, location: @principal }
      else
         format.json { render json: @principal.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /principals/1
  # DELETE /principals/1.json
  def destroy
    @principal.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_principal
      @principal = Principal.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def principal_params
      params.require(:principal).permit(:created_at, :last_updated_at, :user_id, :institution_id)
    end
end
